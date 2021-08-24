const router = require("express").Router();
const axios = require("axios");
require("dotenv").config();
const API = process.env.GLIZZY_KEY;

const trendingSearch = () => {
  return new Promise(async (resolve, reject) => {
    console.log("hello");
    try {
      const request = await axios.get(
        `https://api.giphy.com/v1/gifs/trending?api_key=${API}`
      );
      resolve(request.data);
    } catch (err) {
      reject(err);
    }
  });
};

router.get("/api", async (req, res) => {
  try {
    res.json(await trendingSearch(res));
  } catch (err) {
    res.json(err);
  }
});

const searchGiphy = (search = "the office") => {
  return new Promise(async (resolve, reject) => {
    try {
      const request = await axios.get(
        `https://api.giphy.com/v1/gifs/search?api_key=${API}&q=${search}`
      );
      // console.log(request);
      resolve(request.data);
    } catch (err) {
      reject(err);
    }
  });
};

router.get("/api/search", async (req, res) => {
  try {
    console.log(req.query);
    res.json(await searchGiphy(req.query.search));
  } catch (err) {
    res.json(err);
  }
});

// router.get("/api", (req, res) => {
//   axios
//     .get(`https://api.giphy.com/v1/gifs/trending?api_key=${API}`)
//     .then()
//     .catch((err) => console.log(err));
//   console.log(
//     axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=${API}`)
//   );
//   res.json({ msg: "success" });
// });

module.exports = router;
