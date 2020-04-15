import * as app from "express";

export const mainRouter = app.Router();
mainRouter.get("/", (req, res) => {
  res.json({
    data: "success",
  });
});
