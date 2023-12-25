'use client'

import { Button } from '@/components/ui/button'
import Writer from './Writer'

const Editor = () => {
  const publishContent = (content: string) => {
    console.log(content)
  }

  return (
    <div className="relative">
      <Writer onPublish={publishContent}/>
    </div>
  )
}

export default Editor