const Todo = require("../models/todoModel");

exports.todoPage = async (req, res) => {
  // const id = req.user;
  // try {
  //   const todo = await UserModel.findById(id);
  //   res.status(200).json(user);
  // } catch (err) {
  //   res.status(404).json({ message: err.message });
  // }
};

exports.addNewTodo = async (req, res) => {
  const { header, content } = req.body;
  await new Todo({ header, content, userId: '618001e878adaa5f22f8b2e8' }).save();
  // await Todo.find({ userId: '618001e878adaa5f22f8b2e8' });
  res.status(200).json({ data: "hej" });
}
