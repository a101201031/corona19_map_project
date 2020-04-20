"use strict";

var _express = _interopRequireDefault(require("express"));

var bodyPaser = _interopRequireWildcard(require("body-parser"));

var _swaggerDoc = require("./swaggerDoc");

var _router = require("./router");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import swaggerJSDoc from "swagger-jsdoc";
// import swaggerUi from "swagger-ui-express";
// const swaggerDefinition = {
//   info: {
//     // API informations (required)
//     title: "왜안되냐고? 몰라", // Title (required)
//     version: "1.0.0", // Version (required)
//     description: "Auth API", // Description (optional)
//   },
//   host: "localhost:3000", // Host (optional)
//   basePath: "/", // Base path (optional)
// };
// // Options for the swagger docs
// const options = {
//   // Import swaggerDefinitions
//   swaggerDefinition,
//   // Path to the API docs
//   apis: ["./router/*.js"],
// };
// // Initialize swagger-jsdoc -> returns validated swagger spec in json format
// const swaggerSpec = swaggerJSDoc(options);
const app = (0, _express.default)();
const port = 3000;
app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded({
  extended: false
}));
app.use("/api", _router.mainRouter);
app.use(_swaggerDoc.swaggerRouter);
app.get("/", (req, res) => res.send("hello World")); // API Docs

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));