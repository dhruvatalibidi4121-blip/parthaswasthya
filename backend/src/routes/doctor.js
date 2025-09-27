import express from "express";
const router = express.Router();

// Example: Register doctor
router.post("/register", (req, res) => {
  const { name, specialization } = req.body;
  res.json({ success: true, doctor: { name, specialization } });
});

// Example: Fetch doctor list
router.get("/", (req, res) => {
  res.json([{ id: 1, name: "Dr. Asha", specialization: "General Physician" }]);
});

export default router;
