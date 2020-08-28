let notes = require("../db/db.json");
const path = require("path");
const fs = require("fs");

module.exports = (app) => {
  app.get("/api/notes", (req, res) => {
    res.json(notes);
  });
  app.post("/api/notes", (req, res) => {
    const newNote = req.body;
    let noteId = Math.floor(Math.random() * 10000);
    newNote.id = noteId;
    notes.push(newNote);
    fs.writeFile("db/db.json", JSON.stringify(notes), (err) => {
      if (err) throw err;
    });
    res.json(newNote);
  });
  app.delete("/api/notes/:id", (req, res) => {
    const deleteNote = req.params.id;
    const newNotes = notes.filter((note) => note.id !== Number(deleteNote));
    fs.writeFile("db/db.json", JSON.stringify(newNotes), (err) => {
      if (err) throw err;
      res.json(newNotes);
      location.reload();
    });
  });
};
