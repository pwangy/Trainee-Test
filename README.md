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

We are interested in the quality of the implementation rather than the number of features. We value originality and creativity. The application and the code should be of such quality so that it can be read and maintained by other developers.


Your task is to create a Movie API written as a class using JavaScript that should perform/offer a certain set of methods (listed below). You are to put around **1 hour** on this project. How you solve it is eventually up to you. We will look at everything from readable code, documentation, minimal code duplication, error handling, etc.


You will receive a JSON file containing movie objects, which should be used as input when instantiating the Movie API. Write your code inside the index.js file.

When you are done, upload your files to a github repo and send that link to us in an email. Please also write down the amount of time you've spent on this.


## :point_right:	Getting this project up and running locally
1. Clone this repo
2. ``` $ cd ``` into the directory for this project
3. ``` $ npm install```
4. ``` $ npm start ```
5. In your browser, go to http://localhost:8080/

<hr>

# API Documentation :popcorn: 
<br/>
The following endpoints can be accessed using ```GET``` methods.


- /movies :arrow_forward:	A list of all movies in the database.

- /movies/:movieID :arrow_forward: Returns data for a specific movie.
   
   example: http://localhost:8080/movies/1652034777141
   
- /movies/genre/:genre :arrow_forward:	A list of all movies with a specific genre (not case sensitive)
   
   example: http://localhost:8080/movies/genre/adventure
   
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
