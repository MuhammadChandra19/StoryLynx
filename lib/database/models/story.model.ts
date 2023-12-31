import { Document, Schema, model, models } from 'mongoose';

export interface IStory extends Document {
  _id: string
  title: string
  content: string
  author: { _id: string, name: string, image: string }
  createdAt: string
}

const storySchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
})

export default model<IStory>('Story', storySchema) 
