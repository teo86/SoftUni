$(() => {
    const app = Sammy('#app', function () {
        this.use('Handlebars', 'hbs');


        this.get('market.html', getWelcomePage);


        this.get('#/home', function (ctx) {
            ctx.isAuth = auth.isAuth()
            if(auth.isAuth()){
                ctx.name = sessionStorage.getItem('name')
                ctx.loadPartials({
                    header: 'templates/common/header.hbs',
                    footer: 'templates/common/footer.hbs',
                }).then(function () {
                    this.partial('templates/home/userHome.hbs');
                });
            } else {
                ctx.loadPartials({
                    header: 'templates/common/header.hbs',
                    footer: 'templates/common/footer.hbs',
                }).then(function () {
                    this.partial('templates/home/appHome.hbs');
                });
            }
        })

        this.get('#/register', function (ctx) {
            ctx.isAuth = auth.isAuth()
            ctx.loadPartials({
                header: 'templates/common/header.hbs',
                footer: 'templates/common/footer.hbs',
            }).then(function () {
                this.partial('templates/registerLogin/register.hbs');
            });
        })

        this.post('#/register', function (ctx) {
            let username = ctx.params.username
            let password = ctx.params.password
            let name = ctx.params.name

            auth.register(username, password, name).then(function (res) {
                auth.saveSession(res)
                notify.showInfo('User registration successful.')
                ctx.redirect('#/home')
            }).catch(notify.handleError)
        })

        this.get('#/login', function (ctx) {
            ctx.isAuth = auth.isAuth()
            ctx.loadPartials({
                header: 'templates/common/header.hbs',
                footer: 'templates/common/footer.hbs',
            }).then(function () {
                this.partial('templates/registerLogin/login.hbs');
            });
        })

        this.post('#/login', function (ctx) {
            let username = ctx.params.username
            let password = ctx.params.password

            auth.login(username, password).then(function (res) {
                auth.saveSession(res)
                notify.showInfo('Login successful.')
                ctx.redirect('#/home')
            }).catch(notify.handleError)
        })

        this.get('#/logout', function (ctx) {
            auth.logout().then(function (res) {
                sessionStorage.clear()
                notify.showInfo('Logout successful.')
                ctx.redirect('#/home')
            }).catch(notify.handleError)
        })

        this.get('#/shop', function (ctx) {
            ctx.isAuth = auth.isAuth()
            ctx.name = sessionStorage.getItem('name')
            service.getAllProducts().then(function (res) {
                res.forEach((p) => p.price = parseFloat(p.price).toFixed(2))
                ctx.products = res
                ctx.loadPartials({
                    header: 'templates/common/header.hbs',
                    footer: 'templates/common/footer.hbs',
                    allProducts: 'templates/shop/shopDetails.hbs'
                }).then(function () {
                    this.partial('templates/shop/viewShop.hbs');
                });
            })
        })

        this.get('#/purchase/:itemId', function (ctx) {
            let itemId = ctx.params.itemId;
            service.getProduct(itemId).then(function (res) {
                if(sessionStorage.getItem('cart') === 'undefined'){
                    let obj = {}
                    obj[itemId] = {quantity: 1, products:{name: res['name'], description: res['description'], price: res['price']}}
                    sessionStorage.setItem('cart', JSON.stringify(obj))
                } else if(JSON.parse(sessionStorage.getItem('cart')).hasOwnProperty(itemId)){
                    let obj = JSON.parse(sessionStorage.getItem('cart'));
                    obj[itemId].quantity = +obj[itemId].quantity + 1;
                    sessionStorage.setItem('cart', JSON.stringify(obj))
                } else {
                    let obj = JSON.parse(sessionStorage.getItem('cart'));
                    obj[itemId] = {quantity: 1, products:{name: res['name'], description: res['description'], price: res['price']}}
                    sessionStorage.setItem('cart', JSON.stringify(obj))
                }
                let obj = JSON.parse(sessionStorage.getItem('cart'));
                service.updateUser().then(function (res) {
                    ctx.redirect('#/shop')
                    notify.showInfo('Product purchased.')
                }).catch(notify.handleError)
            })

        })

        this.get('#/cart', function (ctx) {
            ctx.isAuth = auth.isAuth();
            ctx.name = sessionStorage.getItem('name');
            let res = {};
            if(sessionStorage.getItem('cart') !== 'undefined'){
                res = JSON.parse(sessionStorage.getItem('cart'));
            }

            let ids = Object.keys(res);
            let products = [];

            for (let id of ids) {
                let totalPrice = +res[id].quantity * +res[id].products.price
                totalPrice = parseFloat(totalPrice).toFixed(2)
                products.push({id: id, name: res[id].products.name,
                    quantity: res[id].quantity, totalPrice: totalPrice, description: res[id].products.description})
            }
            ctx.products = products

            ctx.loadPartials({
                header: 'templates/common/header.hbs',
                footer: 'templates/common/footer.hbs',
                allProducts: 'templates/shop/cartDetails.hbs'
            }).then(function () {
                this.partial('templates/shop/viewCart.hbs');
            });

        })

        this.get('#/cart/:itemId', function (ctx) {
            let itemId = ctx.params.itemId
            let obj = JSON.parse(sessionStorage.getItem('cart'))
            delete obj[itemId];
            sessionStorage.setItem('cart', JSON.stringify(obj))
            service.updateUser().then(function (res) {
                notify.showInfo('Product discarded.')
                ctx.redirect('#/cart')
            }).catch(notify.handleError)
        })

        function getWelcomePage(ctx) {

            ctx.redirect('#/home')


        }
    });

    app.run();
});