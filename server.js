const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;

// Serve public folder
app.use(express.static(path.join(__dirname, "public")));

// Default route → Notes homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "Notes", "notes.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
