const router = require("express").Router();
const axios = require("axios");
require("dotenv").config();
const API = process.env.GLIZZY_KEY;

const trendingSearch = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const request = await axios.get(
        `https://api.giphy.com/v1/gifs/trending?api_key=${API}`
      );
      resolve(request.data);
    } catch (err) {
      console.log(err);
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
