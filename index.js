const express = require('express');
const { getLyrics } = require('genius-lyrics-api');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/lyrics', (req, res) => {
    const { title, artist } = req.query; 

    if (!title || !artist) {
        return res.status(400).json({ message: 'Missing required parameters: title and/or artist' });
    }

    const options = {
        title: title,
        artist: artist,
        apiKey: 'ETZO_mIl1KzGo-X0BuQKgKF_rDgqkYWMyjgirLAeQdwWBHiZM9Z8BxDhVF_aYjGS', // Replace with your actual token
        optimizeQuery: true
    };

    getLyrics(options)
        .then((lyrics) => {
            if (lyrics) {
                const versesArray = lyrics.split('\n\n');

                const response = {
                    song: options.title,
                    artist: options.artist, // Add artist name to the response
                    verses: versesArray.map((verse, index) => {
                        return {
                            number: index + 1,
                            lyrics: verse
                        };
                    })
                };

                res.status(200).json(response);
            } else {
                res.status(404).json({ message: 'Lyrics not found' });
            }
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
