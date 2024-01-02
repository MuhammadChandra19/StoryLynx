"use server"

import { auth } from '@clerk/nextjs'
import repository from '../repository'

type TCreateStory = {
  // userId: string
  title: string
  id: string
  content: string
}
export const createStory = async (body: TCreateStory)  => {
  const { content, id, title } = body
  try {
    const { userId } = auth()
    const author = await repository.user.getUser({ userId: userId || '' })
    if(!author) return
    await repository.story.createNewStory({
      author: {
        _id: author?._id,
        image: author.image,
        name: author.name
      },
      content,
      title,
      id,
    })
  } catch(error: any) {
    throw new Error(`Failed to create story: ${error.message}`);
  }
}