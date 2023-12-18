import mongoose from "mongoose";

// set rule
const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 20,
  },
  description: {
    type: String,
    required: true,
    trim: true,
    maxlength: 55,
  },
  date: {
    type: Date,
    required: true,
  },
});

// create table
export const Todo = mongoose.model("Todo", todoSchema);
