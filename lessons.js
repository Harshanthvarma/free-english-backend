// routes/lessons.js
const express = require("express");
const router = express.Router();
const Lesson = require("../models/Lesson");

// Add a lesson
router.post("/add", async (req, res) => {
  try {
    const { title, content, level } = req.body;
    const lesson = new Lesson({ title, content, level });
    await lesson.save();
    res.status(201).json({ message: "Lesson added successfully", lesson });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all lessons
router.get("/", async (req, res) => {
  try {
    const lessons = await Lesson.find();
    res.status(200).json(lessons);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
