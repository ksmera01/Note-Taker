const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require('uuid');

module.exports = function (app) {

    // let noteLibrary = [];

    app.get("/api/notes", function (req, res) {
        return res.json(JSON.parse(fs.readFileSync("./db/db.json", "utf8")));
        // console.log(noteLibrary);
        // res.json(noteLibrary);
    })

    app.post("/api/notes", function (req, res) {
        let addNote = req.body;
        console.log(addNote);
        addNote.id = uuidv4();
        fs.writeFile("./db/db.json", "utf8");
        JSON.parse(noteLibrary.push(addNote));
    })


    // app.delete("/api/notes/:id", function (req, res) {

    // })
}
