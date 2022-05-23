const express = require("express");

const routes = require("./routes");
const db = require("./database");

const app = express();

db.hasConnection();

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(port, () => {
  console.log(`Servidor executando na porta: ${port}`);
});
