import mongoose from "mongoose";

const urlSchema = new mongoose.Schema(
  {
    originalUrl: { type: String, required: true, trim: true, maxlength: 2048 },
    shortCode: { type: String, required: true, unique: true },
    clicks: { type: Number, default: 0 },
    expiresAt: {
      type: Date,
      default: () => new Date(Date.now() + 24 * 60 * 60 * 1000),
    },
  },
  { timestamps: true },
);

urlSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

const urlModel = mongoose.model("Url", urlSchema);

export default urlModel;
