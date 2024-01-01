import { connectToDB } from "../mongoose";
import user from "./userRepository";
import story from "./storyRepository"

const repository = () => {
  connectToDB();

  return {
    user,
    story
  };
};

export default repository();
