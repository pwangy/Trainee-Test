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

// listens for RESET_DB=true
if (process.env.RESET_DB) {
    console.log('Resetting database')
    const seed = async () => {
        // clear db before populating
        await Movie.deleteMany({})

        // populate db
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

// Define the port the app will run on with default to 8080
const port = process.env.PORT || 8080
const app = express()

// Middleware to enable cors and json body parsing
app.use(cors())
app.use(express.json())

// Check if DB is ready. If not, return error
app.use((req, res, next) => {
    if (mongoose.connection.readyState === 1) {
        next()
        } else {
            res.status(503).json({ error: 'Service unavailable' })
        }
    })

// Route definitions
app.get('/', (req,res) => {
    res.send(`Welcome to Peggy's Movie API!`)
})

// Get all movies along with ID and random rating
app.get('/movies', async (req, res) => {
    const allMovies = await Movie.find()
    res.json(allMovies)
})

// Get movie by ID
app.get('/movies/:movieID', async (req, res) => {
    const searchID = await Movie.findOne({ movieID: req.params.movieID })
    if (searchID) {
        res.json(searchID)
    } else {
        res.status(404).json({ error: `Movie with id ${req.params.movieID} cannot be found`})
    }
})
     
    


// Get movies by genre

// Get movies sorted by name

// Get movies sorted by rating (low to high)

// Get movies without subtitle and thumb properties

// Get top 3 rated movies


app.get('/movies/add', (req, res) => {
    res.send('new movie form')
})


console.log(data.length)
console.log(data)


// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})