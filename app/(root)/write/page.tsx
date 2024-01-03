import Editor from "@/components/shared/Editor";
import { createStory } from '@/lib/services/storyService';
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const Page = async () => {
  const { userId } = auth();
  if (!userId) {
    redirect("/sign-in");
  }

  const publishStory = async (content: string, title: string, id: string) => {
    await createStory({
      content, 
      title, 
      id,
    })
  }

  return <Editor onPublish={publishStory} />;
};

export default Page;
