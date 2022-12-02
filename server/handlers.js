const zlib = require("zlib");
const axios = require("axios");



const { v4: uuidv4 } = require("uuid");

const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const { query, response } = require("express");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const setlistKey = process.env.SETLIST_KEY;

const getArtist = async (req, res) => {
  try {
    const artistId = req.params.id;
    const options = {
      headers: { Accept: "application/json", "x-api-key": `${setlistKey}` },
    };

    const url = `https://api.setlist.fm/rest/1.0/artist/${artistId}`;

    const result = await axios.get(url, options);
    console.log(result.data);
    res.status(200).json({
      status: 200,
      data: result.data,
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: err,
    });
  }
};

const getAllSetlist = async (req, res) => {
  try {
    const artistId = req.params.id;
    const options = {
      headers: { Accept: "application/json", "x-api-key": `${setlistKey}` },
      decompress: true,
    };

    const url = `https://api.setlist.fm/rest/1.0/artist/${artistId}/setlists?p=1`;

    const result = await axios.get(url, options);
    console.log(result);
    res.status(200).json({
      status: 200,
      data: result.data,
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: err,
    });
  }
};

const getSetlist = async (req, res) => {
  try {
    const setlistId = req.params.id;
    const options = {
      headers: { Accept: "application/json", "x-api-key": `${setlistKey}` },
      decompress: true,
    };

    const url = `https://api.setlist.fm/rest/1.0/setlist/${setlistId}`;

    const result = await axios.get(url, options);
    console.log(result);

    res.status(200).json({
      status: 200,
      data: result.data,
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: err,
    });
  }
};

const getSearchArtist = async (req, res) => {
  try {
    const search = req.params.id;
    const options = {
      headers: { Accept: "application/json", "x-api-key": `${setlistKey}` },
      decompress: true,
    };

    const url = `https://api.setlist.fm/rest/1.0/search/artists?artistName=${search}&p=1&sort=sortName`;

    const result = await axios.get(url, options);
    console.log(result);

    res.status(200).json({
      status: 200,
      data: result.data,
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: err,
    });
  }
};

const postFavorite = async (req, res) => {
  const id = uuidv4();
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("finalproject");

  const result = db
    .collection("favorites")
    .insertOne({ _id: id, data: req.body });

  res.status(200).json({
    status: 200,
    data: result,
  });
};

const getFavorites = async (req, res) => {

  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("finalproject");

  const result = await db.collection("favorites").find().toArray();
  console.log(result);

  res.status(200).json({
    status: 200,
    data: result,
  });
};

module.exports = {
  getArtist,
  getAllSetlist,
  getSetlist,
  getSearchArtist,
  postFavorite,
  getFavorites,
};
