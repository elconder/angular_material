var UserList = function() {
  this.loadAll = function() {
    browser.get('AngularJS/AngularMaterialDemo/app/main.html');
  };

  this.count = function() {
    return element.all(by.css('md-list-item')).count();
  };
};

module.exports = UserList;

