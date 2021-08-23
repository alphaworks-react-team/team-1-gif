const router = require("express").Router();
require("dotenv").config();

router.get("/api", (req, res) => {
  console.log(process.env.GLIZZY_KEY);
  res.json({ msg: "success" });
});

module.exports = router;
