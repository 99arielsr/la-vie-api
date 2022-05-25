const express = require("express");

const routes = require("./routes");
const db = require("./database");
const handleError = require("./middlewares/handleError");
const authMiddleware = require("./middlewares/auth");
const jwtMiddleware = require("./middlewares/jwt")

const app = express();

db.hasConnection();

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  jwtMiddleware.unless({ path: ["/", "/login", "/psicologos"] })
);
app.use(authMiddleware);
app.use(routes);
app.use(handleError);


app.listen(port, () => {
  console.log(`Servidor executando na porta: ${port}`);
});
