import express, { request, response } from "express";
import playlist from "./db/playlist.js"

const app = express();

export default app;

app.get('/ping', (request, responde) => {
    responde.send("You've reached the Playlist API!")
});

app.get('/playlist' , (request, responde) => {
    responde.send(playlist)
});

app.get('/playlist/:index', (request, response) => {
    const song = playlist[request.params.index];
    if (!song) {
        return response.status(404).send("That song does not exist in the playlist.");
    }
    response.send(song)
});
