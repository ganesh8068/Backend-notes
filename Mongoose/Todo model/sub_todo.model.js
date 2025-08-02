import mongoose from "mongoose";

const subTodoSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  subTodos: [
    {
      type: mongoose.schema.Types.ObjectId,
      ref: "SubTodo",
      required: false,
    }
  ]

}, { timestamps: true });

export const subTodo = mongoose.model("SubTodo", subTodoSchema);
