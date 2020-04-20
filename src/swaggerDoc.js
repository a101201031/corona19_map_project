import swaggerUi from "swagger-ui-express";
import swaggereJsdoc from "swagger-jsdoc";
import { Router } from "express";
// import yamlLoader from "yamljs";
export const swaggerRouter = Router();
import path from "path";
console.log(path.join(__dirname, "router/*.js"));
const swaggerDefinition = {
  info: {
    // API informations (required)
    title: "왜안되냐고? 몰라", // Title (required)
    version: "2.0.0", // Version (required)
    description: "모르는 API", // Description (optional)
  },
  // schemes: "http",
  // host: "localhost:3000", // Host (optional)
  basePath: "/", // Base path (optional)
  // tag: { name: "Directory", description: "Directory Scan" },
};

const options = {
  swaggerDefinition,
  // apis: ["/Users/chosoohyun/Project/corona19_map_project/dist/router/*.js"],
  apis: ["./router/*.js"],
};

const specs = swaggereJsdoc(options);
swaggerRouter.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

// const swaggerConfig = yamlLoader.load(
//   "/Users/chosoohyun/Project/corona19_map_project/src/swagger.yaml"
// );
// console.log(swaggerConfig);
// swaggerRouter.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerConfig));
