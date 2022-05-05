import express from 'express'
import cors from 'cors'

import data from './movies.json'

// Defines the port the app will run on and default to 8080
const port = process.env.PORT || 8080
const app = express()

// Middleware to enable cors and json body parsing
app.use(cors())
app.use(express.json())

// Route definitions
app.get('/', (req,res) => {
    res.send('Hello World!')
})

app.get('/movies', (req, res) => {
    // list all movies
    res.json(data)
})

app.get('/movies/add', (req, res) => {
    res.send('new movie form')
})


console.log(data.length)


// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})