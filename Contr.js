const Todos = require("./model");

const DataBaseLink = (req, res) => {
  Todos.find()
    .sort({ createdAt: -1 })
    .then((data) => {
      res.json({ Todos: data });
    })
    .catch((err) => {
      res.json({ error: err });
    });
};

const DataBasePost = (req, res) => {
   console.log('Data requested for save:', req.body);
  const Todo = new Todos(req.body);


  Todo.save()
    .then((data) => {
      console.log("data saved successfully");
    })
    .catch((err) => {
      res.json({ error: err });
    });
};

const DataBaseGetSingleTodo = (req, res) => {
  const id = req.params.id;

  Todos.findById(id)
    .then((data) => {
      res.json({ data });
    })
    .catch((err) => {
      res.json({ error: err });
    });
};

// const GetTodoByTitle = (req, res) => {
//   const title = req.body.title.trim().toLowerCase();

//   if (!title) {
//     return res.status(400).json({ message: "Title is required" });
//   }

//   Todos.findOne({ title: title })
//     .then((data) => {
//       if (!data) {
//         console.log("Todo not found");
//         return res.status(404).json({ message: "Todo not found" });
//       }
//       console.log(data);
//       res.json({ todo: data });
//     })
//     .catch((err) => {
//       res.status(500).json({ error: err.message || err });
//     });
// };


const DataBaseDelete = (req, res) => {
  console.log('DELETE request for ID:', req.params.id);
  const id = req.params.id;
  Todos.findByIdAndDelete(id)
    .then(() => {
      res.status(200).json({ message: "Todo deleted successfully" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: err.message || "Server error" });
    });
};

module.exports = {
  DataBaseLink,
  DataBasePost,
  DataBaseGetSingleTodo,
  DataBaseDelete,
};
