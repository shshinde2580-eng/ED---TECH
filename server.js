const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;

// ✅ Public folder serve करा
app.use(express.static(path.join(__dirname, "Public")));

// ✅ Default route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "Public", "index.html"));
});

// ✅ Server listen
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
