const express = require("express");
const path = require("path");

let app = express();

app.use("/", express.static("build"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "game.html"));
});

const port = process.env.PORT || 1234;

app.listen(port, () => {
    console.log(`Listening on ${port}...`);
});
