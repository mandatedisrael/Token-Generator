var express = require('express');
var router = express.Router();

/* POST REQUEST TO HANDLE TOKEN DETAILS */
router.post("/create-token", (req, res) => {
  console.log(req.body)
  res.send("sent to console")
})

router.get("/", (req, res) => {
  res.send("backend connected, no wahala")
})

module.exports = router;
