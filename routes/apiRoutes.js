const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require('uuid');

module.exports = function (app) {

    app.get("/api/notes", function (req, res) {
        return res.json(JSON.parse(fs.readFileSync("./db/db.json", "utf8")));
        // console.log(noteLibrary);
        // res.json(noteLibrary);
    })

    app.post("/api/notes", function (req, res) {
        let addNote = req.body;
        // console.log(addNote);
        addNote.id = uuidv4();
        // console.log(addNote.id);
        noteLibrary = (JSON.parse(fs.readFileSync("./db/db.json", "utf8")))
        // console.log(noteLibrary)
        noteLibrary.push(addNote);
        // console.log(noteLibrary)
        fs.writeFileSync("./db/db.json", JSON.stringify(noteLibrary));
        res.json(noteLibrary)
        // console.log(res.json(noteLibrary))

    })


    // app.delete("/api/notes/:id", function (req, res) {

    // })
}
