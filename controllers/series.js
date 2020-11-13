const fetch = require("node-fetch");
require("dotenv").config();

exports.getSeries = (req, res, next) => {
  fetch(
    "https://gateway.marvel.com/v1/public/series?ts=" +
      process.env.ts_value +
      "&apikey=" +
      process.env.marvel_public_key +
      "&hash=" +
      process.env.hash_value
  )
    .then((res) => res.json())
    .then((series) => {
      res.status(200).json(series.data.results);
    });
};

exports.getSingleSeries = (req, res, next) => {
  fetch(
    "https://gateway.marvel.com/v1/public/series/" +
      req.params.storyId +
      "?ts=" +
      process.env.ts_value +
      "&apikey=" +
      process.env.marvel_public_key +
      "&hash=" +
      process.env.hash_value
  )
    .then((res) => res.json())
    .then((series) => {
      res.status(200).json(series.data.results);
    });
};

exports.getSingleSeriesComics = (req, res, next) => {
  fetch(
    "https://gateway.marvel.com/v1/public/series/" +
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
    .then((series) => {
      res.status(200).json(series.data.results);
    });
};

exports.getSingleSeriesEvents = (req, res, next) => {
  fetch(
    "https://gateway.marvel.com/v1/public/series/" +
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
    .then((series) => {
      res.status(200).json(series.data.results);
    });
};

exports.getSingleSeriesStory = (req, res, next) => {
  fetch(
    "https://gateway.marvel.com/v1/public/series/" +
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
    .then((series) => {
      res.status(200).json(series.data.results);
    });
};

exports.getSingleSeriesCharacter = (req, res, next) => {
  fetch(
    "https://gateway.marvel.com/v1/public/series/" +
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
    .then((series) => {
      res.status(200).json(series.data.results);
    });
};
