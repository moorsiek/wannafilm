var Movie = function(){
    var Movie = Backbone.Model.extend({
        defaults: {
            isNew: true,
            title: 'Муви 1',
            director: 'Незнакомец',
            rating: 0,
            created: Date.now(),
            downloaded: false,
            watched: false,
            actors: null,
            imdbUrl: '',
            kinopoiskUrl: '',
            poster: null
        },
        initialize: function(){

        }
    });

    return Movie;
}();