const express = require("express");
const mysql = require("mysql2");
const mysql_config = require("./mysql_config");
const functions = require("./functions");

const app = express();
app.listen(3000, () => {
  console.log("[SERVER]: running on port 3000.");
});

const connection = mysql.createConnection(mysql_config);

app.get("/", (req, res) => {
  connection.query("SELECT * FROM tasks", (err, results) => {
    if (err) {
      res.json(functions.response("error", "Erro: " + err.message));
    } else {
      res.json(
        functions.response("sucess", "tasks listadas com sucesso", results)
      );
    }
  });
});
