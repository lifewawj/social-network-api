const router = require("express").Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
} = require("../../controllers/thoughtController");

// /api/thoughts/
router.route("/").get(getAllThoughts).post(createThought)

// /api/thoughts/:thoughtId/
router.route("/:thoughtId").get(getThoughtById)

module.exports = router;