const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require('uuid');

module.exports = function (app) {

    //Checks for existing notes
    app.get("/api/notes", function (req, res) {
        noteLibrary = res.json(JSON.parse(fs.readFileSync("./db/db.json", "utf8")));
        // console.log(noteLibrary);
    })

    //Post request for new notes
    app.post("/api/notes", function (req, res) {
        let addNote = req.body;
        // console.log(addNote);
        addNote.id = uuidv4();
        // console.log(addNote.id);
        noteLibrary = (JSON.parse(fs.readFileSync("./db/db.json", "utf8")))
        // console.log(noteLibrary)
        noteLibrary.push(addNote);
        fs.writeFileSync("./db/db.json", JSON.stringify(noteLibrary));
        res.json(noteLibrary)
        // console.log(res.json(noteLibrary))

    })

    //Delete request for existing notes
    app.delete("/api/notes/:id", function (req, res) {
        noteLibrary = (JSON.parse(fs.readFileSync("./db/db.json", "utf8")))
        // console.log(req);
        // console.log(req.params);
        savedNoteID = req.params.id
        // console.log(savedNoteID);
        for (let i = 0; i < noteLibrary.length; i++) {
            if (savedNoteID === noteLibrary[i].id) {
                console.log("success");
                noteLibrary.splice(i, 1);
            }
            // console.log(noteLibrary[i]);
            // console.log(noteLibrary[i].id)
            fs.writeFileSync("./db/db.json", JSON.stringify(noteLibrary));
            res.json(noteLibrary)
        }
    })
}
