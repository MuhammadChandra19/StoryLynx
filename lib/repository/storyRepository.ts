"use server"

import StorySchema, { IStory } from '../database/models/story.model'

const storyRepository = () => {
  const createNewStory = (story: Partial<Omit<IStory, "_id">>) => {
    try {
      const { author, content, title, id} = story
      const newStory:IStory = new StorySchema({
        author,
        content,
        title,
        id
      })

      newStory.save()
    } catch (error: any) {
      throw new Error(`Failed to create/update story: ${error.message}`);
    }
  }

  const getStory = async (title: string) => {
    try {
      const story = await StorySchema.findOne({ title }).exec()
      return story
    } catch (error: any) {
      throw new Error(`Failed to get story: ${error.message}`);
    }
  }

  const getStoryList = async (page: number = 1, limit: number = 10, filter = {}) => {
    try {
      const stories = await StorySchema.find(filter)
        .skip((page - 1) * limit)
        .limit(limit)
        .exec();

      return stories;
    } catch (error) {
      throw error;
    }
  }

  return {
    createNewStory,
    getStory,
    getStoryList
  }
}

export default storyRepository()