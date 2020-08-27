const notes = require("../db/db.json");
const path = require("path");

module.exports = (app) => {
  app.get("/api/notes", (req, res) => {
    res.json(notes);
  });
};
