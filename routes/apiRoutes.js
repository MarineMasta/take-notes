//// Dependency - fs
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');

//// API Routes
module.exports = function (app) {
    fs.readFile("db/db.json","utf8", (err, data) => {
        if (err) throw err;
        var notes = JSON.parse(data);
    ////GET
    app.get("/api/notes", (request, response) => {
        console.log("Returning note data!");
        response.json(notes);
    });
    ////POST
    app.post("/api/notes", (request, response) => {
        const newNote = request.body;
        newNote.id = uuidv4();
        notes.push(newNote);
        fs.writeFileSync('./db/db.json', JSON.stringify(notes));
        console.log("Added new note!");
        response.json(notes);
    });
    ////DELETE
    app.delete("/api/notes/:id", (request, response) => {
        let noteId = request.params.id.toString();
        const newData = notes.filter( note => note.id.toString() !== noteId );
        fs.writeFileSync('./db/db.json', JSON.stringify(newData));
        console.log("Deleted note!");
        response.json(newData);
    });
    });
};