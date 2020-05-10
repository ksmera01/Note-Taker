const fs = require("fs");
var path = require("path");
const { v4: uuidv4 } = require('uuid');

app.post("/api/notes", function (req, res) {
    userInput = fs.readFile("/db/db.json", "utf8");
    console.log(userInput);
})

let newNoteID = uuidv4();
console.log(newNoteID);
