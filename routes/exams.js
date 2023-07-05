const express = require("express");
const router = express.Router();
const {
    getAllExams,
    createExam,
    getSingleExam,
    updateExam,
    deleteExam
} = require("../controllers/exams");

router.get("/", getAllExams);
router.post("/", createExam);
router.get("/:id", getSingleExam);
router.patch("/:id", updateExam);
router.delete("/:id", deleteExam);

module.exports = router;