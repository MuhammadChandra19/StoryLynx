import Editor from '@/components/shared/Editor'
import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

const Page = async () => {
  const { userId } = auth()
  
  if(!userId) {
    redirect('/sign-in')
  }

  return <Editor />
}

export default Page
