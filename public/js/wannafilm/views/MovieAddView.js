var MovieAddView = function(){
    var MovieAddView = Backbone.View.extend({
        template: _.template($('#MovieAddTpl').html()),
        events: {
            'click .j-save': 'saveMovie'
        },
        initialize: function(){
        },
        render: function(){
            this.$el.html(this.template());
            return this;
        },
        saveMovie: function(){
            var title = this.$el.find('.j-field[name=title]').val(),
                director = this.$el.find('.j-field[name=director]').val();
            this.model.save({
                title: title,
                director: director
            });
            this.trigger('done');
        }
    });
    
    return MovieAddView;
}();