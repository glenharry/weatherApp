const PORT = 8000;
const express = require("express");
const cors = require("cors");
const axios = require("axios");

require("dotenv").config();

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json();
});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
