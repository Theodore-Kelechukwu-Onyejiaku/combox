const fetch = require("node-fetch");
const md5 = require("md5");
require("dotenv").config();

const privateKey = process.env.marvel_private_key;
const publicKey = process.env.marvel_public_key;

const baseUrl = "https://gateway.marvel.com:443/v1/public/creators";
const ts = Number(new Date());
const hash = md5(ts + privateKey + publicKey);

exports.getCreators = async (req, res, next) => {
  try {
    let response = await fetch(
      `${baseUrl}?ts=${ts}&apikey=${publicKey}&hash=${hash}`
    );
    let json = await response.json();
    res.status(200).json(json.data.results);
  } catch (error) {
    res.status(404).json(error);
  }
};

exports.getCreatorById = async (req, res, next) => {
  try {
    let response = await fetch(
      `${baseUrl}/${req.params.creatorId}?ts=${ts}&apikey=${publicKey}&hash=${hash}`
    );
    let json = await response.json();
    res.status(200).json(json.data.results);
  } catch (error) {
    res.status(404).json(error);
  }
};

exports.getComicsOfACreator = async (req, res, next) => {
  try {
    let response = await fetch(
      `${baseUrl}/${req.params.creatorId}/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}`
    );
    let json = await response.json();
    res.status(200).json(json.data.results);
  } catch (error) {
    res.status(404).json(error);
  }
};

exports.getEventsOfACreator = async (req, res, next) => {
  try {
    let response = await fetch(
      `${baseUrl}/${req.params.creatorId}/events?ts=${ts}&apikey=${publicKey}&hash=${hash}`
    );
    let json = await response.json();
    res.status(200).json(json.data.results);
  } catch (error) {
    res.status(404).json(error);
  }
};

exports.getSeriesOfACreator = async (req, res, next) => {
  try {
    let response = await fetch(
      `${baseUrl}/${req.params.creatorId}/series?ts=${ts}&apikey=${publicKey}&hash=${hash}`
    );
    let json = await response.json();
    res.status(200).json(json.data.results);
  } catch (error) {
    res.status(404).json(error);
  }
};

exports.getStoriesOfACreator = async (req, res, next) => {
  try {
    let response = await fetch(
      `${baseUrl}/${req.params.creatorId}/stories?ts=${ts}&apikey=${publicKey}&hash=${hash}`
    );
    let json = await response.json();
    res.status(200).json(json.data.results);
  } catch (error) {
    res.status(404).json(error);
  }
};
