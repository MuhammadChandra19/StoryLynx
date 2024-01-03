"use client";

import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import Document from "@tiptap/extension-document";
import Placeholder from "@tiptap/extension-placeholder";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import { getTextFromH1, replaceEmptySpaceAndInsertDash, setupLowlight } from "./utils";

import "./styles.scss";
import Toolbar from "./Toolbar";
import Popover from "./Popover";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

type TWriter = {
  onPublish: (content: string, title: string, id: string) => void;
  isEditable?: boolean;
  content?: string;
  isLoading?: boolean
};

const Editor = ({ onPublish, isEditable = true, content = "", isLoading = false }: TWriter) => {
  const CustomDocument = Document.extend({
    content: "heading block*",
  });

  const editor = useEditor({
    extensions: [
      CustomDocument,
      StarterKit.configure({
        codeBlock: false,
        document: false,
      }),
      CodeBlockLowlight.configure({
        lowlight: setupLowlight(),
      }),
      Placeholder.configure({
        placeholder: ({ node }) => {
          if (node.type.name === "heading") {
            return "What’s the title?";
          }

          return "Can you add some further context?";
        },
      }),
    ],
    content: content,
  });

  useEffect(() => {
    if (editor) {
      editor.setEditable(isEditable);
    }
  }, [editor, isEditable]);

  const handlePublish = () => {
    const content = editor?.getHTML() || '';
    const title = getTextFromH1(content) || '';
    const id = replaceEmptySpaceAndInsertDash(title)
    onPublish(content, title, id);
  };

  return (
    <article className="relative">
      <div className="fixed top-3 pt-24 z-50">
        <Button
          className="rounded-3xl bg-blue-500 hover:bg-blue-600"
          onClick={handlePublish}
          disabled={isLoading}
        >
          Publish
        </Button>
      </div>
      {editor && <Toolbar editor={editor} />}
      {editor && <Popover editor={editor} />}
      <EditorContent editor={editor} className="max-w-3xl m-auto" />
    </article>
  );
};

export default Editor;
