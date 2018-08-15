$(() => {
    const app = Sammy('#main', function () {
        let appCtx = this
        appCtx.use('Handlebars', 'hbs');

        appCtx.get('#/home', function (ctx) {
            this.loadPartials({
                header: '../templates/common/header.hbs',
                footer: '../templates/common/footer.hbs'
            }).then(function () {
            this.partial('../templates/home/home.hbs')
            })
        })
    });

    app.run();
});