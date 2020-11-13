const fetch = require("node-fetch");
require("dotenv").config();

exports.getComics = (req, res , next)=>{
    fetch("https://gateway.marvel.com/v1/public/comics?ts="+process.env.ts_value+"&apikey="+process.env.marvel_public_key+"&hash="+process.env.hash_value)
    .then(res => res.json())
    .then(comics => {
        res.status(200).json(comics.data.results)
    })
    .catch(error =>{
        res.status(404).json(error)
    })
}

exports.getSingleComic = (req, res, next)=>{
    fetch("https://gateway.marvel.com/v1/public/comics/"+req.params.comic_id+"?ts="+process.env.ts_value+"&apikey="+process.env.marvel_public_key+"&hash="+process.env.hash_value)
    .then(res => res.json())
    .then(comic => {
        res.status(200).json(comic.data.results)
    })
    .catch(error =>{
        res.status(404).json(error)
    })
}

exports.getSingleComicCharacters = (req, res, next) =>{
    fetch("https://gateway.marvel.com/v1/public/comics/"+req.params.comic_id+"/characters"+"?ts="+process.env.ts_value+"&apikey="+process.env.marvel_public_key+"&hash="+process.env.hash_value)
    .then(res => res.json())
    .then(comic => {
        res.status(200).json(comic.data.results)
    })
    .catch(error =>{
        res.status(404).json(error)
    })
}

exports.getSingleComicCreators = (req, res, next) =>{
    fetch("https://gateway.marvel.com/v1/public/comics/"+req.params.comic_id+"/creators"+"?ts="+process.env.ts_value+"&apikey="+process.env.marvel_public_key+"&hash="+process.env.hash_value)
    .then(res => res.json())
    .then(comic => {
        res.status(200).json(comic.data.results)
    })
    .catch(error =>{
        res.status(404).json(error)
    })
}


exports.getSingleComicEvents = (req, res, next) =>{
    fetch("https://gateway.marvel.com/v1/public/comics/"+req.params.comic_id+"/events"+"?ts="+process.env.ts_value+"&apikey="+process.env.marvel_public_key+"&hash="+process.env.hash_value)
    .then(res => res.json())
    .then(comic => {
        res.status(200).json(comic.data.results)
    })
    .catch(error =>{
        res.status(404).json(error)
    })
}


exports.getSingleComicStories = (req, res, next) =>{
    fetch("https://gateway.marvel.com/v1/public/comics/"+req.params.comic_id+"/stories"+"?ts="+process.env.ts_value+"&apikey="+process.env.marvel_public_key+"&hash="+process.env.hash_value)
    .then(res => res.json())
    .then(comic => {
        res.status(200).json(comic.data.results)
    })
    .catch(error =>{
        res.status(404).json(error)
    })
}