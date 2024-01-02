"use client";
import { createStory } from '@/lib/services/storyService';
import Writer from "./Writer";
// import { auth, currentUser } from '@clerk/nextjs';

const Editor = () => {

  function getTextFromH1(htmlString: string) {
    const match = htmlString.match(/<h1>(.*?)<\/h1>/);
    if (match && match[1]) {
        return match[1];
    } else {
        return null;
    }
  }


  const publishContent = async (content: string) => {
    // const user = await currentUser()
    
    const title = getTextFromH1(content)
    if(title) {
      await createStory({
        content, 
        title, 
        id: title.split('').join('-'),
      })
    }

    console.log(title)

  };

  return (
    <div className="relative">
      <Writer onPublish={publishContent} />
    </div>
  );
};

export default Editor;
