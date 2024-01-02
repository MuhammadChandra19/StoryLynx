import User, { IUser } from "../database/models/user.model";
import { connectToDB } from '../mongoose';

const userRepository = () => {
  const createOrUpdate = async (
    user: Partial<Omit<IUser, "_id">>,
    id: string,
  ) => {
    const { username, name, about, email, image } = user;

    try {
      await User.findOneAndUpdate(
        { userId: id },
        {
          username: username?.toLocaleLowerCase(),
          name,
          about,
          email,
          image,
        },
        {
          upsert: true,
        },
      );
    } catch (error: any) {
      throw new Error(`Failed to create/update user: ${error.message}`);
    }
  };

  type TGetUserParam = {
    userId: string
    username: string;
    name: string;
    email: string;
  };
  const getUser = async (params: Partial<TGetUserParam>) => {
    const user = await User.findOne<IUser>({
      ...params,
    }).exec();

    return user;
  };

  return {
    createOrUpdate,
    getUser,
  };
};

export default userRepository();
