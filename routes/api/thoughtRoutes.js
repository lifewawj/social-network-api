const router = require("express").Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    deleteThought,
    updateThoughtById,
    addReaction,
    deleteReaction,
} = require("../../controllers/thoughtController");

// /api/thoughts/
router.route("/").get(getAllThoughts).post(createThought)

// /api/thoughts/:thoughtId/
router.route("/:thoughtId").get(getThoughtById).delete(deleteThought).put(updateThoughtById)

// /api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions").put(addReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId/
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;