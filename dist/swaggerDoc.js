"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.swaggerRouter = void 0;

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

var _swaggerJsdoc = _interopRequireDefault(require("swagger-jsdoc"));

var _express = require("express");

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import yamlLoader from "yamljs";
const swaggerRouter = (0, _express.Router)();
exports.swaggerRouter = swaggerRouter;
console.log(__dirname);
const swaggerDefinition = {
  info: {
    // API informations (required)
    title: "왜안되냐고? 몰라",
    // Title (required)
    version: "2.0.0",
    // Version (required)
    description: "모르는 API" // Description (optional)

  },
  // schemes: "http",
  // host: "localhost:3000", // Host (optional)
  basePath: "/" // Base path (optional)
  // tag: { name: "Directory", description: "Directory Scan" },

};
const options = {
  swaggerDefinition,
  // apis: ["/Users/chosoohyun/Project/corona19_map_project/dist/router/*.js"],
  apis: ["router/*.js"]
};
const specs = (0, _swaggerJsdoc.default)(options);
swaggerRouter.use("/api-docs", _swaggerUiExpress.default.serve, _swaggerUiExpress.default.setup(specs)); // const swaggerConfig = yamlLoader.load(
//   "/Users/chosoohyun/Project/corona19_map_project/src/swagger.yaml"
// );
// console.log(swaggerConfig);
// swaggerRouter.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerConfig));