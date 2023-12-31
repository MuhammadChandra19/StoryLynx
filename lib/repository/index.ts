import { connectToDB } from "../mongoose";
import userRepository from "./userRepository";

const repository = () => {
  connectToDB();

  return {
    userRepository,
  };
};

export default repository();
