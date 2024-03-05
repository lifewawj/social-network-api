const router = require("express").Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    deleteThought,
    updateThoughtById,
} = require("../../controllers/thoughtController");

// /api/thoughts/
router.route("/").get(getAllThoughts).post(createThought)

// /api/thoughts/:thoughtId/
router.route("/:thoughtId").get(getThoughtById).delete(deleteThought).put(updateThoughtById)

module.exports = router;