import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
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

export const Todo = mongoose.model("Todo", TodoSchema);
