import { join } from 'path';
import swaggerUi from 'swagger-ui-express';
import swaggereJsdoc from 'swagger-jsdoc';
import { Router } from 'express';
export const swaggerRouter = Router();

const swaggerDefinition = {
  info: {
    // API informations (required)
    title: '누추한 곳의 API', // Title (required)
    version: '2.0.0', // Version (required)
    description: '안될수도 있을껄', // Description (optional)
  },
  // schemes: "http",
  // host: "localhost:3000", // Host (optional)
  basePath: '/', // Base path (optional)
};

const options = {
  swaggerDefinition,
  apis: [join(__dirname, 'router/api/*.js'), join(__dirname, 'router/api/**/*.js')],
};

const specs = swaggereJsdoc(options);
swaggerRouter.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
