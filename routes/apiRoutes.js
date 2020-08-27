let notes = require("../db/db.json");
const path = require("path");
const fs = require("fs");

module.exports = (app) => {
  app.get("/api/notes", (req, res) => {
    res.json(notes);
  });
  app.post("/api/notes", (req, res) => {
    const newNote = req.body;
    notes.push(newNote);
    fs.writeFile("db/db.json", JSON.stringify(notes), (err) => {
      if (err) {
        throw err;
      }
    });
    res.json(newNote);
  });
};
