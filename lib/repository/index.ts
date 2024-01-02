import { connectToDB } from '../mongoose'
import storyRepository from './storyRepository'
import userRepository from './userRepository'

const repository = () => {
  connectToDB()

  return {
    user: userRepository,
    story: storyRepository
  }
}

export default repository()