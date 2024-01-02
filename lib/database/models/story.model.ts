import { Document, Schema, model, models } from "mongoose";

export interface IStory extends Document {
  _id: string;
  id: string;
  title: string;
  content: string;
  author: { _id: string; name: string; image: string };
  createdAt: string;
}

const storySchema = new Schema({
  id: { type: String, required: true},
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Story = models.Story || model<IStory>("Story", storySchema);
export default Story
