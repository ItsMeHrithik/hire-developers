const express = require("express");

const router = express.Router();

//@route GET api/users/test
//@desc Test users route
//@access Public
router.get("/test", (req, res) => {
  res.send({ msg: "ok the users test is working" });
});

module.exports = router;
