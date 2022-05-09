# Movie API

## Completed Objectives :eyeglasses:
- Create a Movie API in JavaScript with the first requirement *and* at least 6 more methods.
  - [x] (REQUIRED) When instantiating the class with the imported movies.json file, add an “id” and a random “rating” from 1 to 5 for each movie before storing it.
  - [x] A method that returns movies from a certain genre.
   
  - [x] A method that returns the movies sorted by name.
  - [x] A method that returns the 2 top rated movies and 2 bottom rated movies.
  - [x] A method that prints out the three top rated movies.
  - [x] A method that prints out movies sorted from bottom rated to top rated.
  - [x] A method that returns a movie with a certain id (if found).
- A JSON file with movie objects is provided and should be used as input when instantiating the Movie API.
- Write your code in the index.js file.

  


##	Approach :movie_camera:

Being focused on frontend devellopment, this challenge was a good refresher on setting up backend files! 

My general approach was to first get up and running just enough so that I view the database in MongoDB Compass. This meant defining the port, adding middleware, something to start the server, the connection to Mongoose and MongoDB, defining the data model and making sure to clear the database before seeding it to avoid duplication. WHEW!

Once that got going I started tackle creating the endpoints. First deciding to simply use a Date.now() value as the movieID and then adding the random math function to generate ratings for all the titles when seeding the database. I continued to work this way down the line to complete all endpoints.

Testing continuiously throughout writing the code, I wrapped up by doing another round of code cleanup and removing extra line spaces or commented out console.log commands,  and now, finally writting up this ReadMe document.

I have to confess that I spent much of my time remembering *how* to go about writing a server file and a RESTful API, but managed to complete the challenge with work that I feel good about.

If I were to continue work on the challenge, I would learn more about how best I can split up my code into directories for the data model and routes. Then I would continue with the remaining endpoints. 

Thanks very much for reviewing my work, and of course, I welcome any constructive feedback on how I can make this code better. :)


## :point_right:	View it live
https://movieapi.up.railway.app/

<hr>

# API Documentation :popcorn: 
<br/>
The following endpoints can be accessed using ```GET``` methods.


- /movies :arrow_forward:	A list of all movies in the database.

- /movies/:movieID :arrow_forward: Returns data for a specific movie.
   
   example: https://movieapi.up.railway.app/movies/1652102893209
   
- /movies/genre/:genre :arrow_forward:	A list of all movies with a specific genre (not case sensitive)
   
   example: https://movieapi.up.railway.app/movies/genre/adventure
   
   Possible genres to search: 
   
        action
        adventure
        animated
        comedy
        drama
        horror
        romance
        sci-fi
- /title :arrow_forward:	Lists all movies sorted alphabetically by Title
- /rating :arrow_forward:	Lists all movies sorted low to high based on Ranking
- /top :arrow_forward: Lists the top 3 rated movies
- /top-and-bottom-ranked :arrow_forward: Lists the top 2 and bottom 2 ranked movies
