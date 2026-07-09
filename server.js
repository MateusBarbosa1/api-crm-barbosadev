const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.use(express.static(path.join(__dirname, "./public")));
app.set("views", path.join(__dirname, "./views"));

app.use(
  cors({
    origin: "*", // ou o domínio do seu site estático, se for fixo
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  }),
);
const routesPath = path.join(__dirname, "routes");
fs.readdirSync(routesPath).forEach((file) => {
  require(path.join(routesPath, file))(app);
});

app.listen(3000, () => console.log("server runnning on port 3000!"));
