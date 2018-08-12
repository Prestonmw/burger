var express = require("express");

var router = express.Router();


var burger = require("models/burger.js");

router.get("/", function(request, result) {
    burger.all(function(data) {
        var containsObject = {
            burgers: data
        };
        console.log(containsObject);
        result.render("index", containsObject);
    });
});

router.post("/", function(request, result) {
    burger.create([
        "burger_name"
    ], [
        request.body.name
    ], function() {
        result.redirect("/");
    });
});

router.put("/:id", function(request, result) {
    var condition = "id = " + request.params.id;
    console.log("condition", condition);
    burger.update({
            eaten: request.body.eaten
    },      condition, function() {
            result.redirect("/");
    });
});

module.exports = router;