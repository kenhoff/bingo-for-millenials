const express = require("express");
const path = require("path");
const names = require("./names");


let app = express();

const http = require("http").Server(app);
const io = require("socket.io")(http);

let games = {};

app.use("/", express.static("build"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "game.html"));
});

io.on("connection", (socket) => {
    console.log("user connected");
    socket.on("join-room", (roomID) => {
        socket.join(roomID)
        // generate a name for the user

        let userName = names[Math.floor(Math.random() * names.length)]

        // add socket / user to room
        if (!(roomID in games)) {
            games[roomID] = {
                players: [{
                    socketID: socket.id,
                    name: userName
                }]
            };
        } else {
            games[roomID].players.push({
                socketID: socket.id,
                name: userName
            });
        }
        console.log(games);
        // broadcast to update player lists
        io.in(roomID).emit("update-player-list", games[roomID].players);

    });
    socket.on("disconnect", () => {
        console.log("user disconnected");
        // remove socket / user from room

        for (var room in games) {
            if (games.hasOwnProperty(room)) {
                let location = games[room].players.findIndex((player) => {
                    return (player.socketID === socket.id);
                });
                if (location !== -1) {
                    games[room].players.splice(location, 1);
                }
            }
        }
        console.log(games);

    });
});

const port = process.env.PORT || 1234;

http.listen(port, () => {
    console.log(`Listening on ${port}...`);
});
