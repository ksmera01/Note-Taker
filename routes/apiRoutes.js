const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require('uuid');

module.exports = function (app) {

    app.get("/api/notes", function (req, res) {
        let noteLibrary = JSON.parse(fs.readFile("/db/db.json", "utf8"));
        console.log(noteLibrary);
        res.json(noteLibrary);
    })

    app.post("/api/notes", function (req, res) {
        let addNote = req.body;
        console.log(addNote);
        JSON.parse(fs.writeFile("/db/db.json", "utf8"));
        noteLibrary.push(addNote);
    })

    let newNoteID = uuidv4();
    console.log(newNoteID);

    app.delete("/api/notes/:id", function (req, res) {

    })
}
