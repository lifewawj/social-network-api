const router = require("express").Router();

const {
    getAllThoughts
} = require("../../controllers/thoughtController");

// /api/thought
router.route("/").get(getAllThoughts).post()

module.exports = router;