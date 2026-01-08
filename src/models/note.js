// models/note.js
import mongoose, { Schema } from "mongoose";

const noteSchema = new Schema(
  {
    title: String,
    content: String,
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt
  }
);

const Note = mongoose.models.Note || mongoose.model("Note", noteSchema);

export default Note;