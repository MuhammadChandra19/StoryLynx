'use client'

import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import css from 'highlight.js/lib/languages/css'
import js from 'highlight.js/lib/languages/javascript'
import ts from 'highlight.js/lib/languages/typescript'
import html from 'highlight.js/lib/languages/xml'

import { createLowlight } from 'lowlight'

import './styles.scss'
import Toolbar from './Toolbar'
import Popover from './Popover'


const Writer = () => {
  const lowlight = createLowlight()
  lowlight.register('html', html)
  lowlight.register('css', css)
  lowlight.register('js', js)
  lowlight.register('ts', ts)
  
  const editor = useEditor({
    extensions: [
      StarterKit,
      CodeBlockLowlight.configure({
        lowlight,
      }),
    ],
    content: '<p>Hello World! 🌎️</p>',
  })

  return (
    <article className="relative">
      {editor && <Toolbar editor={editor} /> }
      {editor && <Popover editor={editor} /> }
      <EditorContent editor={editor} className="max-w-3xl m-auto"/>
    </article>
  )
}

export default Writer
