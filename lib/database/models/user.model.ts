import { Document, Schema, model, models } from "mongoose";
export interface IUser extends Document {
  _id: string;
  userId: string;
  username: string;
  name: string;
  email: string;
  about: string;
  image: string;
}

const userSchema: Schema = new Schema({
  userId: { type: String, required: true },
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

const User = models.User || model<IUser>("User", userSchema);

export default User
