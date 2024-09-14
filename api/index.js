const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "..", "public")));
app.use(express.static(path.join(__dirname, "..", "assets")));

app.get("/", (req, res) => {

    res.sendFile(path.join(__dirname, "..", "public", "slicehosting.html"));
});

app.get("/slicehosting", (req, res) => {

    res.sendFile(path.join(__dirname, "..", "public", "slicehosting.html"));
});

app.get("/facebook", (req, res) => {

    res.sendFile(path.join(__dirname, "..", "public", "facebook.html"));
});

app.get("/instagram", (req, res) => {

    res.sendFile(path.join(__dirname, "..", "public", "instagram.html"));
});

module.exports = app;

