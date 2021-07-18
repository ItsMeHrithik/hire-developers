const express = require("express");

const router = express.Router();

//@route GET api/profile/test
//@desc Test Profile route
//@access Public
router.get("/test", (req, res) => {
  res.send({ msg: "ok the profile test is working" });
});

module.exports = router;
