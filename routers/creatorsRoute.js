const express = require("express");
const creatorRouter = express.Router();
const creatorController = require("../controllers/creators");

creatorRouter.get("/", creatorController.getCreators);
creatorRouter.get("/:creatorId", creatorController.getCreatorById);
creatorRouter.get("/:creatorId/comics", creatorController.getComicsOfACreator);
creatorRouter.get("/:creatorId/events", creatorController.getEventsOfACreator);
creatorRouter.get("/:creatorId/series", creatorController.getSeriesOfACreator);
creatorRouter.get(
  "/:creatorId/stories",
  creatorController.getStoriesOfACreator
);

module.exports = creatorRouter;
