const express = require("express");
const router = express.Router();
const Contr = require("./Contr");

router.get("/api/hello", Contr.DataBaseLink);
router.post("/createTodo", Contr.DataBasePost);
router.get("/getTodo/:id", Contr.DataBaseGetSingleTodo);
router.delete("/deleteTodo/:id", Contr.DataBaseDelete);

module.exports = router;
