var MoviesView = function(){
    var MoviesView = Backbone.View.extend({
        template: _.template($('#MoviesTpl').html()),
        initialize: function(){
            var that = this;

            this.model.on('all', function(){
                console.log('zz');
                that.render();
            });
        },
        render: function(){
            this.$el.html(
                this.template({
                    movies: this.model
                })
            );
            return this;
        }
    });
    
    return MoviesView;
}();