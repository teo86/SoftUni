$(() => {
    const app = Sammy('#container', function () {
        this.use('Handlebars', 'hbs');

        this.get('home', getWelcomePage);
        this.get('index.html', getWelcomePage);



        this.post('#/register', (ctx) => {
            let username = ctx.params['username-register'];
            let password = ctx.params['password-register'];
            let repeatPass = ctx.params['password-register-check'];


            if (!/^.{6,}$/.test(username)) {
                console.log('hi');
                notify.showError('Username should be at least 6 characters long!');
            } else if (password==='' && repeatPass==='') {
                notify.showError('Please fill all inputs!');
            } else if (repeatPass !== password) {
                notify.showError('Passwords must match!');
            } else {
                auth.register(username, password)
                    .then((userData) => {
                        auth.saveSession(userData);
                        notify.showInfo('User registration successful!');
                        ctx.redirect('#/home');
                    })
                    .catch(notify.handleError);
            }
        });


        this.post('#/login', (ctx) => {
            let username = ctx.params['username-login'];
            let password = ctx.params['password-login'];

            if (username === '' || password === '') {
                notify.showError('All fields should be non-empty!');

            } else {
                auth.login(username, password)
                    .then((userData) => {
                        auth.saveSession(userData);
                        notify.showInfo('Login successful.');
                        ctx.redirect('#/home');
                    })
                    .catch(notify.handleError);
            }
        });

        this.get('#/logout', (ctx) => {
            auth.logout()
                .then(() => {
                    sessionStorage.clear();
                    notify.showInfo('Logout successful.');
                    ctx.redirect('#/home');
                })
                .catch(notify.handleError);
        });

        this.get('#/editor', (ctx) => {
            let userId = sessionStorage.getItem('userId')
            receiptService.getActiveReceipt(userId).then(function (res) {
                if(res.length===0){
                    receiptService.createReceipt()
                        .then(function (newRes) {

                            ctx.isAuth = auth.isAuth();
                            ctx.isLoged = auth.isLoged();
                            ctx.username = sessionStorage.getItem('username')
                            ctx.grandTotal = 0
                            ctx.productCount = 0
                            ctx.receiptId = newRes['_id'];
                            ctx.loadPartials({
                                nav: 'templates/common/nav.hbs',
                                footer: 'templates/common/footer.hbs',
                                entry: 'templates/entrys/entry.hbs'
                            }).then(function () {
                                this.partial('templates/receipts/createReceipt.hbs');
                            });
                        }).catch(notify.handleError)
                } else {
                    ctx.receiptId = res[0]['_id'];
                    let receiptId = ctx.receiptId;
                    receiptService.getEntriesByReceiptId(receiptId)
                        .then(function (newRes) {

                            ctx.grandTotal = 0;
                            ctx.productCount = 0;

                            newRes.forEach((r)=>{
                                r.total = Number(r.qty) * Number(r.price);
                                ctx.grandTotal += r.total;
                                ctx.productCount+= Number(r.qty);
                            })
                            ctx.receiptId = receiptId
                            ctx.entrys = newRes
                            ctx.isAuth = auth.isAuth();
                            ctx.isLoged = auth.isLoged();
                            ctx.username = sessionStorage.getItem('username')
                            ctx.loadPartials({
                                nav: 'templates/common/nav.hbs',
                                footer: 'templates/common/footer.hbs',
                                entry: 'templates/entrys/entry.hbs'
                            }).then(function () {
                                this.partial('templates/receipts/createReceipt.hbs');
                            });
                        }).catch(notify.handleError)


                }
            })

        })

        this.post('#/createEntry', function (ctx) {
            let receiptId = $('input[name="receiptId"]').val()
            let type = $('input[name="type"]').val()
            let qty = $('input[name="qty"]').val()
            let price = $('input[name="price"]').val()
            let total = +$('input[name="total"]').val();
            let productCount = +$('input[name="productCount"]').val();

            if(!/([0-9]*[.])?[0-9]+/.test(qty)){
                notify.showError('Quantity must be a number');
            } else if(!/([0-9]*[.])?[0-9]+/.test(price)){
                notify.showError('Price must be a number');
            } else if(type === '' || qty === '' || price ==='') {
                notify.showError('Please fill all fields');
            } else {
                productCount+= +qty
                total+= +qty * +price
                receiptService.addEntry(type, qty, price, receiptId)
                    .then(function (res) {
                        let active = true;
                        receiptService.commitReceipt(active,productCount,total,receiptId)
                            .then(function (res) {
                                notify.showInfo('Entry added')
                                ctx.redirect('#/editor')
                            }).catch(notify.handleError)
                    }).catch(notify.handleError)
            }

        })

        this.get('#/delete:entryId', async function (ctx) {
            let entryId = ctx.params.entryId
            receiptService.deleteEntry(entryId)
                .then(function (res) {
                    ctx.redirect('#/editor')

                }).catch(notify.handleError)
            let data = $(`#${entryId}`).children()
            let total = +$('input[name="total"]').val()- +$(data[3]).text();
            let receiptId = $('input[name="receiptId"]').val()
            let productCount = +$('input[name="productCount"]').val()- +$(data[1]).text();
            let active = true
            receiptService.commitReceipt(active,productCount,total,receiptId).then(function () {
                notify.showInfo('deleteEntry')
            })
        })

        this.get('#/viewAll', function (ctx) {
            let userId = sessionStorage.getItem('userId')
            receiptService.getMyReceipt(userId).then(function (res) {

                ctx.grandTotal = 0
                res.forEach((r)=> {
                    ctx.grandTotal += +r.total
                    let date = r['_kmd']['lmt']
                    r.date = getDate(date)
                })
                ctx.receipts = res

                ctx.isAuth = auth.isAuth();
                ctx.isLoged = auth.isLoged();
                ctx.username = sessionStorage.getItem('username')
                ctx.loadPartials({
                    nav: 'templates/common/nav.hbs',
                    footer: 'templates/common/footer.hbs',
                    receipt: 'templates/receipts/receipt.hbs'
                }).then(function () {
                    this.partial('templates/receipts/viewAll.hbs');
                });
            })
        })

        this.post('#/createReceipt', function (ctx) {
            let total = +$('input[name="total"]').val()
            let receiptId = $('input[name="receiptId"]').val()
            let productCount = +$('input[name="productCount"]').val()
            let active = false
            receiptService.commitReceipt(active,productCount,total,receiptId).then(function (res) {
                ctx.redirect('#/home')
                notify.showInfo('receipt saved')
            }).catch(notify.handleError)
        })

        function getDate(date) {
            let year = date.substr(0,10)
            let hour = date.substr(11,8)
            return year + ' ' + hour

        }

        this.get('#/details:receiptId', function (ctx) {

            let receiptId = ctx.params.receiptId

            receiptService.getEntriesByReceiptId(receiptId).then(function (res) {

                res.forEach((r)=> {
                    r.totalPrice = (+r.price * +r.qty).toFixed(2)
                })
                ctx.details = res

                ctx.isAuth = auth.isAuth();
                ctx.isLoged = auth.isLoged();
                ctx.username = sessionStorage.getItem('username')
                ctx.loadPartials({
                    nav: 'templates/common/nav.hbs',
                    footer: 'templates/common/footer.hbs',
                    detail: 'templates/details/detail.hbs'
                }).then(function () {
                    this.partial('templates/details/details.hbs');
                });
            })
        })

        function getWelcomePage(ctx) {

            ctx.isAuth = auth.isAuth();
            ctx.isLoged = auth.isLoged();
            ctx.username = sessionStorage.getItem('username')
            ctx.loadPartials({
                nav: 'templates/common/nav.hbs',
                footer: 'templates/common/footer.hbs',
            }).then(function () {
                this.partial('templates/home/home.hbs');
            });

        }
    });

    app.run();
});