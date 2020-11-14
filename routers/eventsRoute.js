const express = require("express");
const eventRouter = express.Router();
const eventController = require("../controllers/events");

eventRouter.get("/", eventController.getEvents);
eventRouter.get("/:eventId", eventController.getEventById);
eventRouter.get("/:eventId/comics", eventController.getComicsOfAnEvent);
eventRouter.get("/:eventId/characters", eventController.getCharactersOfAnEvent);
eventRouter.get("/:eventId/creators", eventController.getCreatorsOfAnEvent);
eventRouter.get("/:eventId/series", eventController.getSeriesOfAnEvent);
eventRouter.get("/:eventId/stories", eventController.getStoriesOfAnEvent);

module.exports = eventRouter;
