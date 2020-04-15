import express from "express";
import * as bodyPaser from "body-parser";
import * as swaggerJSDoc from "swagger-jsdoc";
import * as swaggerUi from "swagger-ui-express";

const swaggerDefinition = {
  info: {
    // API informations (required)
    title: "Auth Service", // Title (required)
    version: "1.0.0", // Version (required)
    description: "Auth API", // Description (optional)
  },
  host: "localhost:3000", // Host (optional)
  basePath: "/", // Base path (optional)
};

// Options for the swagger docs
const options = {
  // Import swaggerDefinitions
  swaggerDefinition,
  // Path to the API docs
  apis: ["./routes/index.js", "./users/index.js", "./roles/index.js"],
};

// Initialize swagger-jsdoc -> returns validated swagger spec in json format
const swaggerSpec = swaggerJSDoc(options);

const app = express();
const port = 3000;

app.use(bodyPaser.json());
app.use(
  bodyPaser.urlencoded({
    extended: false,
  })
);
app.use("/api");
app.get("/", (req, res) => res.send("hello World"));

// API Docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
