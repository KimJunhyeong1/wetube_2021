import express from "express";
import {
  getEdit,
  postEdit,
  watch,
  getUpload,
  postUpload,
} from "../controllers/videoController";

const videoRouter = express.Router();

const handleWatchVideo = (request, response) => {
  return response.send("Watch Video!");
};

videoRouter.get("/upload", getUpload);
videoRouter.post("/upload", postUpload);
videoRouter.get("/:id(\\d+)", watch);
videoRouter.get("/:id(\\d+)/edit", getEdit);
videoRouter.post("/:id(\\d+)/edit", postEdit);

export default videoRouter;
