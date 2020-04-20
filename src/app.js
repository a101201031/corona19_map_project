import express from "express";
import * as bodyPaser from "body-parser";
// import swaggerJSDoc from "swagger-jsdoc";
// import swaggerUi from "swagger-ui-express";
import { swaggerRouter } from "./swaggerDoc";
import { mainRouter } from "./router";

const app = express();
const port = 3000;

app.use(bodyPaser.json());
app.use(
  bodyPaser.urlencoded({
    extended: false,
  })
);
app.use("/api", mainRouter);
app.use(swaggerRouter); // API Docs
app.get("/", (req, res) => res.send("hello World"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
