var express = require('express');
var router = express.Router();

/* POST REQUEST TO HANDLE TOKEN DETAILS */
router.post("/create-token", (req, res) => {
  res.send(req.params)
})

module.exports = router;
