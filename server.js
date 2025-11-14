const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;

// Serve public folder
app.use(express.static(path.join(__dirname, "public")));

// Default route – Home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// NOTES route
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "Notes", "notes.html"));
});

// SYLLABUS route
app.get("/syllabus", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "Syllabus", "syllabus.html"));
});

// PAPERS route
app.get("/papers", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "papers", "papers.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
