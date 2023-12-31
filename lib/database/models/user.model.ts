import { Document, Schema, model, ObjectId } from "mongoose";
export interface IUser extends Document {
  _id: string;
  username: string;
  name: string;
  email: string;
  about: string;
  image: string;
}

const userSchema: Schema = new Schema({
  username: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  about: {
    type: String,
  },
  image: {
    type: String,
  },
});

export default model<IUser>("User", userSchema);
