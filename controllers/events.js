const fetch = require("node-fetch");
const md5 = require("md5");
require("dotenv").config();

const privateKey = process.env.marvel_private_key;
const publicKey = process.env.marvel_public_key;

const baseUrl = "https://gateway.marvel.com:443/v1/public/events";
const ts = Number(new Date());
const hash = md5(ts + privateKey + publicKey);

exports.getEvents = async (req, res, next) => {
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

exports.getEventById = async (req, res, next) => {
  try {
    let response = await fetch(
      `${baseUrl}/${req.params.eventId}?ts=${ts}&apikey=${publicKey}&hash=${hash}`
    );
    let json = await response.json();
    res.status(200).json(json.data.results);
  } catch (error) {
    res.status(404).json(error);
  }
};

exports.getCharactersOfAnEvent = async (req, res, next) => {
  try {
    let response = await fetch(
      `${baseUrl}/${req.params.eventId}/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`
    );
    let json = await response.json();
    res.status(200).json(json.data.results);
  } catch (error) {
    res.status(404).json(error);
  }
};

exports.getComicsOfAnEvent = async (req, res, next) => {
  try {
    let response = await fetch(
      `${baseUrl}/${req.params.eventId}/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}`
    );
    let json = await response.json();
    res.status(200).json(json.data.results);
  } catch (error) {
    res.status(404).json(error);
  }
};

exports.getCreatorsOfAnEvent = async (req, res, next) => {
  try {
    let response = await fetch(
      `${baseUrl}/${req.params.eventId}/creators?ts=${ts}&apikey=${publicKey}&hash=${hash}`
    );
    let json = await response.json();
    res.status(200).json(json.data.results);
  } catch (error) {
    res.status(404).json(error);
  }
};

exports.getSeriesOfAnEvent = async (req, res, next) => {
  try {
    let response = await fetch(
      `${baseUrl}/${req.params.eventId}/series?ts=${ts}&apikey=${publicKey}&hash=${hash}`
    );
    let json = await response.json();
    res.status(200).json(json.data.results);
  } catch (error) {
    res.status(404).json(error);
  }
};

exports.getStoriesOfAnEvent = async (req, res, next) => {
  try {
    let response = await fetch(
      `${baseUrl}/${req.params.eventId}/stories?ts=${ts}&apikey=${publicKey}&hash=${hash}`
    );
    let json = await response.json();
    res.status(200).json(json.data.results);
  } catch (error) {
    res.status(404).json(error);
  }
};
