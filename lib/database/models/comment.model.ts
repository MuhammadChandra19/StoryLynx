import { Document, Schema, model, models } from 'mongoose';

export interface IComment extends Document {
  _id: string
  postId: string
  content: string
  author: { _id: string, name: string, image: string }
  parentId: string
  createdAt: string
  children: Array<IComment>
}

const commentSchema = new Schema({
  id: { type: String, required: true},
  postId: { type: String, required: true },
  content: { type: String, required: true },
  parentId: {
    type: String
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  children: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment',
    }
  ]
})

export default model<IComment>('Comment', commentSchema)

