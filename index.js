import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import data from './data/movies.json'

// Connect to database
const mongoDB = process.env.MONGO_URL || "mongodb://127.0.01/movieAPI"
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = Promise

// Define data model
const Movie = mongoose.model('Movie', {
    description: String,
    subtitle: String,
    thumb: String,
    title: String,
    genre: String,
    sources: [String],
    movieID: Number,
    rating: Number
})

// Listens for RESET_DB=true
if (process.env.RESET_DB) {
    console.log('Resetting database')

    const seed = async () => {
        // clear DB before populating
        await Movie.deleteMany({})

        // populate DB and include values for custom fields
        data.forEach( async(i) => {
            const newMovie = new Movie({
                ...i,
                movieID: Date.now(),
                rating: Math.floor(Math.random() * 5) + 1 
            })
            newMovie.save()
        })
    }
    seed()
}

// Define the port the app will run on. Defaults to 8080.
const port = process.env.PORT || 8080
const app = express()

// Middleware to enable cors and json body parsing
app.use(cors())
app.use(express.json())

// Check if DB is ready. If not, return error.
app.use((req, res, next) => {
    if (mongoose.connection.readyState === 1) {
        next()
        } else {
            res.status(503).json({ error: 'Service unavailable' })
        }
})

// Route definitions
// Root route
app.get('/', (req,res) => {
    res.send(`Welcome to Peggy's Movie API! Documentation for this web service lives here: https://github.com/pwangy/Trainee-Test/blob/main/README.md`)
})

// Get all movies
app.get('/movies', async (req, res) => {
    const allMovies = await Movie.find()
    res.json(allMovies)
})

// Get movie by movieID
app.get('/movies/:movieID', async (req, res) => {
    const searchID = await Movie.findOne({ movieID: req.params.movieID })
    if (searchID) {
        res.json(searchID)
    } else {
        res.status(404).json({ error: `Movie with id ${req.params.movieID} cannot be found`})
    }
})
     
// Get movies by genre, ignore case of query
app.get('/movies/genre/:genre', async (req, res) => {
    const searchGenre = req.params.genre
    const keyRegExp = new RegExp('\\b' + searchGenre + '\\b', 'i')
    if (searchGenre) {
        const genreFound = await Movie.find({ genre: keyRegExp })
        res.json(genreFound)
    } else {
        res.status(400).json({ error: 'Invalid genre'})
    }
})

// Get movies sorted by name
app.get('/title', async (req, res) => {
    const alphaByTitle = await Movie.find().sort({ title: 1 })
    res.json(alphaByTitle)
})

// Get movies sorted by rating (low to high)
app.get('/rating', async (req, res) => {
    const lowToHigh = await Movie.find().sort({ rating: 1 })
    res.json(lowToHigh)
})

// Get top 3 rated movies
app.get('/top', async (req, res) => {
    const topRated = await Movie.find().sort({ rating: -1 }).limit(3)
    res.json(topRated)
})

// Get the 2 top and 2 bottom ranked movies
app.get('/top-and-bottom-ranked', async (req, res) => {
    const rankedResults = [{}]
    const rankedTop = await (await Movie.find().sort({ rating: 1 }).limit(2))
    const rankedBottom = await (await Movie.find().sort({ rating: -1 }).limit(2))
    rankedResults.push(rankedBottom, rankedTop)
    res.json(rankedResults)
})

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})