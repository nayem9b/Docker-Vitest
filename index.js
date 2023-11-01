const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => res.send("Hello World FROM Docker!"));
app.listen(port, () => console.log(`EXAMPLE app listening on port ${port}`));
