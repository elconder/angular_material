var UserDetails = function () {
    this.load = function () {
        browser.get('/AngularJS/AngularMaterialDemo/app/main.html');
    };

    this.contactUser = function () {
        $('button.contact').click();
    };

};

module.exports = UserDetails;

