/* go fish controller file - from burger express homework */
 /* no routes as of yet, add one day */ 
 
var express = require("express");

var router = express.Router();

/* Import the model (goFish.js) to use its database functions */
var goFish = require("../models/goFish_models.js");

/* Create all our routes and set up logic within those routes where required */
router.get("/", function(req, res) {
  goFish.all(function(data) {
    var hbsObject = {goFish: data};
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/goFish", function(req, res) {
  goFish.create(["goFish"], [req.body.goFish], function(result) {
    /* Send back the ID of the new quote */
    res.json({ id: result.insertId });
  });
});

router.put("/api/goFish/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  goFish.update({
    devoured: req.body.devour
  }, condition, function(result) {
    if (result.changedRows == 0) {
      /* If no rows were changed, then the ID must not exist, so 404 */
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

/* Export routes for server.js to use */
module.exports = router;