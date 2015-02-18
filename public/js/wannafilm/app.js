Backbone.sync = function(method, model) {
    alert(method + ": " + JSON.stringify(model));
    model.id = 1;
};

var app = new AppView('1', 5);