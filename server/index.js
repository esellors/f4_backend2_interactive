const express = require('express');
const cors = require('cors');
const app = express();
const ctrl = require('./controller');

app.use(cors());
app.use(express.json());

// get all movies
app.get('/api/movies', ctrl.getMovies);

// delete a movie
app.delete('/api/movies/:id', ctrl.deleteMovie);

// add a movie
app.post('/api/movies', ctrl.createMovie);

// update a movie
app.put('/api/movies/:id', ctrl.updateMovie);




app.listen(4004, function() {
    console.log('Server running on 4004')
})