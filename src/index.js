import { engine } from "express-handlebars";
import express from "express";
import morgan from "morgan";
import route from "./routes/index.js";
import { connect } from "./config/db/index.js";
//connect to db
connect()

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//HTTP logger
app.use(morgan("combined"));

//Template engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", "./src/resource/views");

route(app)



app.listen(port, () => {
  console.log(`Example app listening on port ab ${port}`);
});

