const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 10000;

// PUBLIC FOLDER serve करा
app.use(express.static(path.join(__dirname, "public")));

// HOME PAGE – index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// START SERVER
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
