import { Button } from "@/components/ui/button";
import { BubbleMenu, Editor } from "@tiptap/react";
import { Bold, Heading1, Heading2, Italic } from "lucide-react";

type TPopover = {
  editor: Editor;
};

const Popover = ({ editor }: TPopover) => {
  return (
    <BubbleMenu editor={editor} className="bg-black flex rounded-lg p-2">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => editor.chain().focus().toggleBold().run()}
      >
        <Bold className="h-4 w-4" color="#ffffff" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => editor.chain().focus().toggleItalic().run()}
      >
        <Italic className="h-4 w-4" color="#ffffff" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
      >
        <Heading1 className="h-4 w-4" color="#ffffff" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
      >
        <Heading2 className="h-4 w-4" color="#ffffff" />
      </Button>
    </BubbleMenu>
  );
};

export default Popover;
