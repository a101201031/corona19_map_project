"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.swaggerRouter = void 0;

var _path = require("path");

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

var _swaggerJsdoc = _interopRequireDefault(require("swagger-jsdoc"));

var _express = require("express");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const swaggerRouter = (0, _express.Router)();
exports.swaggerRouter = swaggerRouter;
const swaggerDefinition = {
  info: {
    // API informations (required)
    title: 'CORONA MAP API',
    // Title (required)
    version: '1.0.0',
    // Version (required)
    description: '안될수도 있을껄' // Description (optional)

  },
  // schemes: "http",
  // host: "localhost:3000", // Host (optional)
  basePath: '/' // Base path (optional)

};
const options = {
  swaggerDefinition,
  apis: [(0, _path.join)(__dirname, 'router/api/*.js'), (0, _path.join)(__dirname, 'router/api/**/*.js')]
};
const specs = (0, _swaggerJsdoc.default)(options);
swaggerRouter.use('/api-docs', _swaggerUiExpress.default.serve, _swaggerUiExpress.default.setup(specs));