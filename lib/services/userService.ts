import { currentUser } from '@clerk/nextjs';
import repository from '../repository';

/**
 * Setup inital user data
 * - check if user loggedin
 * - will add user to database if it doesn't exists
 */
export const setupUser = async () => {
  try {
    const current = await currentUser()
    if(current) {
      const user = await repository.user.getUser({ userId: current.id })
      if(!user) {
        await repository.user.createOrUpdate({
          userId: current?.id,
          username: current?.username || '',
          email: current?.emailAddresses[0].emailAddress,
          about: "",
          image: current?.imageUrl,
        }, current?.id || '')
      }
    }
  } catch(error: any) {
    throw new Error(`Failed to setup user data: ${error.message}`);
  }
}