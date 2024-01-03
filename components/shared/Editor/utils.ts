import css from "highlight.js/lib/languages/css";
import js from "highlight.js/lib/languages/javascript";
import ts from "highlight.js/lib/languages/typescript";
import html from "highlight.js/lib/languages/xml";
import { createLowlight } from "lowlight";

export const setupLowlight = () => {
  const lowlight = createLowlight();
  lowlight.register("html", html);
  lowlight.register("css", css);
  lowlight.register("js", js);
  lowlight.register("ts", ts);

  return lowlight;
};

export const getTextFromH1 = (htmlString: string) => {
  const match = htmlString.match(/<h1>(.*?)<\/h1>/);
  if (match && match[1]) {
      return match[1];
  } else {
      return null;
  }
}

export const replaceEmptySpaceAndInsertDash = (str: string) => {
  // Replace all empty spaces with '-'
  const stringWithoutSpaces = str.replace(/\s/g, '-');
  
  // Insert '-' between every character
  const stringWithDashes = stringWithoutSpaces.replace(/(.)(?!$)/g, '$1-');
  
  return stringWithDashes;
}
