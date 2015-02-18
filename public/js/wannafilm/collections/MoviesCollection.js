var MoviesCollection = function(){
    var MoviesCollection = Backbone.Collection.extend({
        model: Movie,
        initialize: function(){

        }
    });
    
    return MoviesCollection;
}();