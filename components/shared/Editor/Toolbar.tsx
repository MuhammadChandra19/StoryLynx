"use client";

import { Button } from "@/components/ui/button";
import { useIsVisible } from "@/hooks/useIsVisible";
import { Editor, FloatingMenu } from "@tiptap/react";
import { Code, Image as Img, Plus } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type TToolbar = {
  editor: Editor;
};

const Toolbar = ({ editor }: TToolbar) => {
  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);
  const isVisible = useIsVisible(ref);

  useEffect(() => {
    if (!isVisible) {
      if (isOpen) {
        setOpen(false);
      }
    }
  }, [isOpen, isVisible]);

  return (
    <FloatingMenu
      editor={editor}
      tippyOptions={{ duration: 100 }}
      className="-ml-20 max-w-fit"
    >
      <div className="flex gap-4 transition-all bg-white" ref={ref}>
        <Button
          variant="outline"
          className="rounded-full"
          size="icon"
          onClick={() => setOpen((prev) => !prev)}
        >
          <Plus className="h-4 w-4" />
        </Button>
        {isOpen && (
          <div className="flex gap-4">
            <Button variant="outline" className="rounded-full" size="icon">
              <Img className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="rounded-full"
              size="icon"
              onClick={() => editor.chain().focus().setCodeBlock().run()}
            >
              <Code className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </FloatingMenu>
  );
};

export default Toolbar;
