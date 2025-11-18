import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
  shortId: {
    type: String,
    required: true,
    unique: true,
  },
  originalUrl: {
    type: String,
    required: true,
    unique: true,
  },
  visitHistory: [
    {
      timestamp: {
        type: Date
      }
    }
  ],
}, { timestamps: true });

const URL = mongoose.model("URL", urlSchema);

export {
    URL
};
