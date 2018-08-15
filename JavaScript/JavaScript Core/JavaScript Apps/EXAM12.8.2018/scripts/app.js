$(() => {
    const app = Sammy('#container', function () {
        this.use('Handlebars', 'hbs');

        this.get('#/home', getWelcomePage);
        this.get('index.html', getWelcomePage);


        this.get('#/register', function (ctx) {
            ctx.isAuth = auth.isAuth()
            ctx.isLoged = auth.isLoged()

            ctx.loadPartials({
                nav: 'templates/common/nav.hbs',
                footer: 'templates/common/footer.hbs',
            }).then(function () {
                this.partial('templates/registerLogin/register.hbs');
            });
        })

        this.post('#/register', (ctx) => {
            let username = ctx.params['username'];
            let password = ctx.params['password'];
            let repeatPass = ctx.params['repeatPass'];


            if (!/^.{3,}$/.test(username)) {
                notify.showError('Username should be at least 3 characters long!');
            } else if(!/^[A-Za-z]{3,}$/.test(username)){
                notify.showError('Username should contain only english alphabet letters!');
            } else if (!/^[A-Za-z0-9]{6,}$/.test(password)) {
                notify.showError('Password should be at least 6 characters long!');
            } else if (!/^[A-Za-z0-9]{6,}$/.test(repeatPass)) {
                notify.showError('Second password should be at least 6 characters long!');
            } else if (password !== repeatPass){
                notify.showError('Both passwords must match!');
            } else {
                auth.register(username, password)
                    .then((userData) => {
                        auth.saveSession(userData);
                        ctx.redirect('#/allCars');
                        notify.showInfo('User registration successful!');

                    })
                    .catch(notify.handleError);
            }
        });

        this.get('#/login', function (ctx) {

            ctx.isAuth = auth.isAuth()
            ctx.isLoged = auth.isLoged()

            ctx.loadPartials({
                nav: 'templates/common/nav.hbs',
                footer: 'templates/common/footer.hbs',
            }).then(function () {
                this.partial('templates/registerLogin/login.hbs');
            });
        })


        this.post('#/login', (ctx) => {
            let username = ctx.params['username'];
            let password = ctx.params['password'];

            if (!/^.{3,}$/.test(username)) {
                notify.showError('Username should be at least 3 characters long!');
            } else if(!/^[A-Za-z]{3,}$/.test(username)){
                notify.showError('Username should contain only english alphabet letters!');
            } else if (!/^[A-Za-z0-9]{6,}$/.test(password)) {
                notify.showError('Password should be at least 6 characters long!');
            } else {
                auth.login(username, password)
                    .then((userData) => {
                        auth.saveSession(userData);
                        ctx.redirect('#/allCars');
                        notify.showInfo('Login successful.');
                    })
                    .catch(notify.handleError);
            }
        });


        this.get('#/logout', (ctx) => {
            auth.logout()
                .then(() => {
                    sessionStorage.clear();
                    ctx.redirect('#/login');
                    notify.showInfo('Logout successful.');
                })
                .catch(notify.handleError);
        });

        this.get('#/allCars', function (ctx) {
            ctx.isAuth = auth.isAuth()
            ctx.isLoged = auth.isLoged()
            ctx.username = sessionStorage.getItem('username')

            service.listAllCars().then(function (res) {
               res.forEach((c) => {
                   if(c['_acl']['creator'] === sessionStorage.getItem('userId')){
                       c.isAuthor = true
                   } else {
                       c.isAuthor = false
                   }
               })
                ctx.cars = res
                ctx.loadPartials({
                    nav: 'templates/common/nav.hbs',
                    footer: 'templates/common/footer.hbs',
                }).then(function () {
                    this.partial('templates/home/allCars.hbs');
                });
            })
        })

        this.get('#/details/:carId', function (ctx) {
            ctx.isAuth = auth.isAuth()
            ctx.isLoged = auth.isLoged()
            ctx.username = sessionStorage.getItem('username')

            let carId = ctx.params.carId
            service.detailsListening(carId).then(function (res) {
                console.log(res);
                if(res['_acl']['creator'] === sessionStorage.getItem('userId')){
                    res['isAuthor'] = true
                }
                ctx.title = res.title
                ctx.imageUrl = res.imageUrl
                ctx.brand = res.brand
                ctx.model = res.model
                ctx.year = res.year
                ctx.fuel = res.fuel
                ctx.price = res.price
                ctx.id = res['_id']
                ctx.isAuthor = res.isAuthor
                ctx.description = res.description
                ctx.loadPartials({
                    nav: 'templates/common/nav.hbs',
                    footer: 'templates/common/footer.hbs',
                }).then(function () {
                    this.partial('templates/details/details.hbs');
                });
            })

        })

        this.get('#/myCars', function (ctx) {
            ctx.isAuth = auth.isAuth()
            ctx.isLoged = auth.isLoged()
            ctx.username = sessionStorage.getItem('username')
            service.myCarsListening().then(function (res) {
                ctx.cars = res
                ctx.loadPartials({
                    nav: 'templates/common/nav.hbs',
                    footer: 'templates/common/footer.hbs',
                }).then(function () {
                    this.partial('templates/cars/myCars.hbs');
                });
            })
        })

        this.get('#/createCar', function (ctx) {
            ctx.isAuth = auth.isAuth()
            ctx.isLoged = auth.isLoged()
            ctx.username = sessionStorage.getItem('username')

            ctx.loadPartials({
                nav: 'templates/common/nav.hbs',
                footer: 'templates/common/footer.hbs',
            }).then(function () {
                this.partial('templates/cars/create.hbs');
            });
        })

        this.post('#/createCar', function (ctx) {

            let brand = $('input[name="brand"]').val()
            let description = $('input[name="description"]').val()
            let fuel = $('input[name="fuelType"]').val()
            let imageUrl = $('input[name="imageUrl"]').val()
            let model = $('input[name="model"]').val()
            let price = $('input[name="price"]').val()
            let seller = sessionStorage.getItem('username')
            let title = $('input[name="title"]').val()
            let year = $('input[name="year"]').val()
            brand = htmlEscape(brand)
            description = htmlEscape(description)
            fuel = htmlEscape(fuel)
            imageUrl = htmlEscape(imageUrl)
            title = htmlEscape(title)
            if(brand === '' || description === '' || fuel ===''
                || imageUrl === '' ||  model === '' || price ===''
                || seller === '' || title === '' ||  year === ''){
                notify.showError('Please fill all fields!')
            } else if(!/^.{1,33}$/.test(title)){
                notify.showError('The title length must not exceed 33 characters!')
            } else if(!/^.{30,450}$/.test(description)){
                notify.showError('The description length must not exceed 450 characters and should be at least 30!')
            } else if(!/^.{1,11}$/.test(brand)){
                notify.showError('The brand length must not exceed 11 characters!')
            } else if(!/^.{1,11}$/.test(fuel)){
                notify.showError('The fuelType length must not exceed 11 characters!')
            } else if(!/^.{4,11}$/.test(model)){
                notify.showError('The model length must not exceed 11 characters and should be at least 4!')
            } else if(!/^[0-9]{4}$/.test(year)){
                notify.showError('The year must be only 4 chars long!')
            } else if(+price > 1000000){
                notify.showError('The maximum price is 1000000$')
            } else if( +price<0){
                notify.showError('Price should be positive')
            } else if(!/^http/.test(imageUrl)){
                notify.showError('Link url should always start with “http”')
            } else {
                service.createCarListing(brand, description, fuel, imageUrl, model, price, seller, title, year).then(function (res) {
                    notify.showInfo('listing created.')
                    ctx.redirect('#/allCars')
                })
            }
        })

        this.get('#/edit/:carId', function (ctx) {
            ctx.isAuth = auth.isAuth()
            ctx.isLoged = auth.isLoged()
            ctx.username = sessionStorage.getItem('username')
            let carId = ctx.params.carId
            console.log(carId);

            service.detailsListening(carId).then(function (res) {
                ctx.brand = res.brand
                ctx.description = res.description
                ctx.fuel = res.fuel
                ctx.imageUrl = res.imageUrl
                ctx.model = res.model
                ctx.price = res.price
                ctx.title = res.title
                ctx.year = res.year
                ctx.id = res['_id']

                ctx.loadPartials({
                    nav: 'templates/common/nav.hbs',
                    footer: 'templates/common/footer.hbs',
                }).then(function () {
                    this.partial('templates/details/edit.hbs');
                });
            })
        })

        this.post('#/edit/:carId', function (ctx) {
            let carId = ctx.params.carId

            let brand = $('input[name="brand"]').val()
            let description = $('input[name="description"]').val()
            let fuel = $('input[name="fuelType"]').val()
            let imageUrl = $('input[name="imageUrl"]').val()
            let model = $('input[name="model"]').val()
            let price = $('input[name="price"]').val()
            let title = $('input[name="title"]').val()
            let year = $('input[name="year"]').val()
            let seller = sessionStorage.getItem('username')
            brand = htmlEscape(brand)
            description = htmlEscape(description)
            fuel = htmlEscape(fuel)
            imageUrl = htmlEscape(imageUrl)
            title = htmlEscape(title)
            if(brand === '' || description === '' || fuel ===''
                || imageUrl === '' ||  model === '' || price ===''
                || seller === '' || title === '' ||  year === ''){
                notify.showError('Please fill all fields!')
            } else if(!/^.{1,33}$/.test(title)){
                notify.showError('The title length must not exceed 33 characters!')
            } else if(!/^.{30,450}$/.test(description)){
                notify.showError('The description length must not exceed 450 characters and should be at least 30!')
            } else if(!/^.{1,11}$/.test(brand)){
                notify.showError('The brand length must not exceed 11 characters!')
            } else if(!/^.{1,11}$/.test(fuel)){
                notify.showError('The fuelType length must not exceed 11 characters!')
            } else if(!/^.{4,11}$/.test(model)){
                notify.showError('The model length must not exceed 11 characters and should be at least 4!')
            } else if(!/^[0-9]{4}$/.test(year)){
                notify.showError('The year must be only 4 chars long!')
            } else if(+price > 1000000){
                notify.showError('The maximum price is 1000000$')
            } else if( +price<0){
                notify.showError('Price should be positive')
            } else if(!/^http/.test(imageUrl)){
                notify.showError('Link url should always start with “http”')
            } else {
                service.editCarListening(carId, brand, description, fuel, imageUrl, model, price, seller, title, year).then(function (res) {
                    notify.showInfo(`Listing ${title} updated!`)
                    ctx.redirect('#/allCars')
                }).catch(notify.handleError)
            }
        })

        this.get('#/delete/:carId', function (ctx) {

            let carId = ctx.params.carId
            service.deleteCar(carId).then(function (res) {
                ctx.redirect('#/allCars')
                notify.showInfo('Listing deleted!')
            }).catch(notify.handleError)
        })


        function htmlEscape(str) {
            return str.replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#39;');
        }


        function getWelcomePage(ctx) {

            ctx.isAuth = auth.isAuth();
            ctx.isLoged = auth.isLoged();
            ctx.username = sessionStorage.getItem('username')
            ctx.loadPartials({
                nav: 'templates/common/nav.hbs',
                footer: 'templates/common/footer.hbs',
            }).then(function () {
                this.partial('templates/home/homeView.hbs');
            });

        }
    });

    app.run();
});