"use server"
import User, { IUser } from '../database/models/user.model'

const userRepository = () => {
  const createOrUpdate = async (user: Omit<IUser, "id">, id: string) => {
    const { username, name, about,email, image } = user

    try {
      await User.findOneAndUpdate(
        { id },
        {  
          username: username?.toLocaleLowerCase(),
          name,
          about,
          email,
          image
        },
        {
          upsert: true
        }
      )
    } catch(error: any) {
      throw new Error(`Failed to create/update user: ${error.message}`);
    }
  }

  type TGetUserParam = {
    id: string
    username: string
    name: string
    email: string
  }
  const getUser = async (params: TGetUserParam) => {
    const user = await User.findOne({ 
      ...params
    }).exec()

    return user
  }

  return {
    createOrUpdate,
    getUser
  }
}

export default userRepository()
