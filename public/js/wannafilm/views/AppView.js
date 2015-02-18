var AppView = function(){
    var AppView = Backbone.View.extend({
        tagName: 'div',
        events: {
            'click .j-movie-add': 'addMovie'
        },
        initialize: function() {
            this.movies = new MoviesCollection();
            this.moviesView = new MoviesView({model: this.movies});

            this.$el
                .html(this.template())
                .appendTo('body');

            this.moviesView.render().$el.appendTo(this.$el);
        },
        template: _.template($('#AppTpl').html()),
        render: function() {
        },
        addMovie: function(e) {
            var that = this;
            e.preventDefault();

            this.$el.find('.j-movie-add').hide();

            var movie = new Movie();
            var view = new MovieAddView({model: movie});
            view.once('done', function(){
                console.log(movie);
                console.log(that.movies);
                that.movies.add(movie);
                that.$el.find('.j-movie-add').show();
                view.remove({silent: true});
            });



            this.$el.append(view.render().el);
        }
    });

    return AppView;
}();