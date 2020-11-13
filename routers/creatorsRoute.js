const express = require("express");
const creatorRouter = express.Router();
const creatorController = require("../controllers/creators");

creatorRouter.get("/", creatorController.getEvents);
creatorRouter.get('/:eventId', creatorController.getEventById);
creatorRouter.get("/:eventId/comics", creatorController.getComicsOfACreator);
creatorRouter.get("/:eventId/events", creatorController.getEventsOfACreator);
creatorRouter.get("/:eventId/series", creatorController.getSeriesOfACreator);
creatorRouter.get("/:eventId/stories", creatorController.getStoriesOfACreator);


module.exports = creatorRouter;
