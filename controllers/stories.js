const fetch = require("node-fetch");
require("dotenv").config();

exports.getStories = (req, res, next) => {
  fetch(
    "https://gateway.marvel.com/v1/public/stories?ts=" +
      process.env.ts_value +
      "&apikey=" +
      process.env.marvel_public_key +
      "&hash=" +
      process.env.hash_value
  )
    .then((res) => res.json())
    .then((characters) => {
      res.status(200).json(characters.data.results);
    });
};

exports.getSingleStory = (req, res, next) => {
  fetch(
    "https://gateway.marvel.com/v1/public/stories/" +
      req.params.storyId +
      "?ts=" +
      process.env.ts_value +
      "&apikey=" +
      process.env.marvel_public_key +
      "&hash=" +
      process.env.hash_value
  )
    .then((res) => res.json())
    .then((story) => {
      res.status(200).json(story.data.results);
    });
};

exports.getSingleStoryComics = (req, res, next) => {
  fetch(
    "https://gateway.marvel.com/v1/public/stories/" +
      req.params.storyId +
      "/comics" +
      "?ts=" +
      process.env.ts_value +
      "&apikey=" +
      process.env.marvel_public_key +
      "&hash=" +
      process.env.hash_value
  )
    .then((res) => res.json())
    .then((story) => {
      res.status(200).json(story.data.results);
    });
};

exports.getSingleStoryEvents = (req, res, next) => {
  fetch(
    "https://gateway.marvel.com/v1/public/stories/" +
      req.params.storyId +
      "/events" +
      "?ts=" +
      process.env.ts_value +
      "&apikey=" +
      process.env.marvel_public_key +
      "&hash=" +
      process.env.hash_value
  )
    .then((res) => res.json())
    .then((story) => {
      res.status(200).json(story.data.results);
    });
};

exports.getSingleStorySeries = (req, res, next) => {
  fetch(
    "https://gateway.marvel.com/v1/public/stories/" +
      req.params.storyId +
      "/series" +
      "?ts=" +
      process.env.ts_value +
      "&apikey=" +
      process.env.marvel_public_key +
      "&hash=" +
      process.env.hash_value
  )
    .then((res) => res.json())
    .then((story) => {
      res.status(200).json(story.data.results);
    });
};

exports.getSingleStoryCharacter = (req, res, next) => {
  fetch(
    "https://gateway.marvel.com/v1/public/stories/" +
      req.params.storyId +
      "/stories" +
      "?ts=" +
      process.env.ts_value +
      "&apikey=" +
      process.env.marvel_public_key +
      "&hash=" +
      process.env.hash_value
  )
    .then((res) => res.json())
    .then((story) => {
      res.status(200).json(story.data.results);
    });
};
