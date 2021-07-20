const movies = require('./db.json')

module.exports = {
    getMovies: function(req, res) {
        res.status(200).send(movies)
    },
    deleteMovie: function(req, res) {
        const { id } = req.params;

        const tgtIndex = movies.findIndex(function(movieObj) {
            return movieObj.id === +id;
        });

        movies.splice(tgtIndex, 1);

        res.status(200).send(movies);
    },
    createMovie: function(req, res) {

    },
    updateMovie: function(req, res) {
        const id = +req.params.id;
        const { type } = req.body;

        const tgtIndex = movies.findIndex(function(movieObj) {
            return movieObj.id === id;
        });

        if(type === 'plus') {
            movies[tgtIndex].rating++
            res.status(200).send(movies)
        } else if(type === 'minus') {
            movies[tgtIndex].rating--
            res.status(200).send(movies)
        } else {
            res.status(400).send('Values should be plus or minus')
        }
    }
}