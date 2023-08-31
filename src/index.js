const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("App GET");
});

app.post("/", (req, res) => {
    res.send("App POST");
});

app.delete("/", (req, res) => {
    res.send("App DELETE");
});

app.listen(PORT, () => {
    console.log(`App Online na porta ${PORT}`);
});
