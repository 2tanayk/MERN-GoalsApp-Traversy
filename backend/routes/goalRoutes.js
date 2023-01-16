const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");

router.route("/").get(getGoals).post(setGoal);
router.route("/:id").delete(deleteGoal).put(updateGoal);

// router.get("/", getGoals);
// router.post("/", setGoal);

// router.put("/:id", updateGoal);
// router.delete("/:id", deleteGoal);

module.exports = router;
