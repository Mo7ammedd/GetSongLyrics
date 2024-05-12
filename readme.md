## Genius Lyrics API

This is a simple Express.js application that utilizes the Genius Lyrics API to retrieve lyrics for songs.

### Usage

1. **Install Dependencies** :   ``` npm install express genius-lyrics-api dotenv```

## Set up Environment Variables

* Create a .env file in the root directory of your project and add your Genius API key like so: ```GENIUS_API_KEY=your_actual_api_key_here```

# Endpoints


 ## GET /lyrics

This endpoint retrieves lyrics for a given song title and artist name using the Genius API.
Parameters: <br>title : ```  (required): The title of the song``` <br>
artist : ```(required): The name of the artist```
