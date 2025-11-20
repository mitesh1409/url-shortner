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
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  }
}, { timestamps: true });

const URL = mongoose.model("URL", urlSchema);

export {
    URL
};
