const fetch = require("node-fetch");
require("dotenv").config();

exports.getCharacters = (req, res , next)=>{
    fetch("https://gateway.marvel.com/v1/public/characters?ts="+process.env.ts_value+"&apikey="+process.env.marvel_public_key+"&hash="+process.env.hash_value)
    .then(res => res.json())
    .then(characters => {
        res.status(200).json(characters.data.results)
    })
}

exports.getSingleCharacter = (req, res, next)=>{
    fetch("https://gateway.marvel.com/v1/public/characters/"+req.params.character_id+"?ts="+process.env.ts_value+"&apikey="+process.env.marvel_public_key+"&hash="+process.env.hash_value)
    .then(res => res.json())
    .then(character => {
        res.status(200).json(character.data.results)
    })
}

exports.getSingleCharacterComics = (req, res, next) =>{
    fetch("https://gateway.marvel.com/v1/public/characters/"+req.params.character_id+"/comics"+"?ts="+process.env.ts_value+"&apikey="+process.env.marvel_public_key+"&hash="+process.env.hash_value)
    .then(res => res.json())
    .then(character => {
        res.status(200).json(character.data.results)
    })
}

exports.getSingleCharacterEvents = (req, res, next) =>{
    fetch("https://gateway.marvel.com/v1/public/characters/"+req.params.character_id+"/events"+"?ts="+process.env.ts_value+"&apikey="+process.env.marvel_public_key+"&hash="+process.env.hash_value)
    .then(res => res.json())
    .then(character => {
        res.status(200).json(character.data.results)
    })
}


exports.getSingleCharacterSeries = (req, res, next) =>{
    fetch("https://gateway.marvel.com/v1/public/characters/"+req.params.character_id+"/series"+"?ts="+process.env.ts_value+"&apikey="+process.env.marvel_public_key+"&hash="+process.env.hash_value)
    .then(res => res.json())
    .then(character => {
        res.status(200).json(character.data.results)
    })
}


exports.getSingleCharacterStories = (req, res, next) =>{
    fetch("https://gateway.marvel.com/v1/public/characters/"+req.params.character_id+"/stories"+"?ts="+process.env.ts_value+"&apikey="+process.env.marvel_public_key+"&hash="+process.env.hash_value)
    .then(res => res.json())
    .then(character => {
        res.status(200).json(character.data.results)
    })
}
