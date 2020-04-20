"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mainRouter = void 0;

var _express = require("express");

const mainRouter = (0, _express.Router)();
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: user management
 * definitions:
 *   Users:
 *     type: object
 *     required:
 *       - content
 *     properties:
 *       _id:
 *         type: string
 *         description: ObjectID
 *       content:
 *         type: string
 *         description: 할일 내용
 *       done:
 *         type: boolean
 *         description: 완료 여부
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     tags: [Users]
 *     description: Returns users
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: get user info
 *
 *         schema:
 *           type: object
 *           items:
 *             $ref: '#/api/users'
 */

exports.mainRouter = mainRouter;
mainRouter.get("/users", (req, res) => {
  res.json({
    data: "success"
  });
});