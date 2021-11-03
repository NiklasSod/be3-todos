// remember to change all "fake" userId's

const Todo = require("../models/todoModel");

exports.todoPage = async (req, res) => {
  try {
    const allTodos = await Todo.find({ userId: '618001e878adaa5f22f8b2e8' });
    res.status(200).json({ data: allTodos });
  } catch (error) {
    console.error(error);
  }
};

exports.todoDetailPage = async (req, res) => {
  try {
    const oneTodo = await Todo.findOne({ _id: req.params.id });
    res.status(200).json({ data: oneTodo });
  } catch (error) {
    console.error(error);
  }
};

exports.addNewTodo = async (req, res) => {
  try {
    const { header } = req.body;
    const content = "Edit to add content!";
    await new Todo({ header, content, userId: '618001e878adaa5f22f8b2e8' }).save();
    const allTodos = await Todo.find({ userId: '618001e878adaa5f22f8b2e8' });
    res.status(200).json({ data: allTodos });
  } catch (error) {
    console.error(error);
  }
}

exports.deleteTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const removedItem = await Todo.findOneAndDelete({ _id: id });
    if (!removedItem) {
      res.status(400).json({ message: 'this todo does not exist' });
    }
    res.status(200).json({ message: 'todo successfully deleted' });
  } catch (error) {
    console.error(error);
  }
}

exports.updateTodo = async (req, res) => {
  try {
    const { header, content } = req.body;
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, {
      header, content, userId: '618001e878adaa5f22f8b2e8'
    }, { new: true });

    res.status(200).json({ data: updatedTodo });
  } catch (error) {
    console.error(error);
  }
}