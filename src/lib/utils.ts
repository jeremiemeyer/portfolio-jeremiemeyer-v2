//@ts-nocheck
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { env } from "@/../env.mjs"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function absoluteUrl(path: string) {
  return `${env.NEXT_PUBLIC_APP_URL}${path}`
}

export function isWord(str: string) {
  let alphaNumericFound = false
  for (let i = 0; i < str.length; i++) {
      const code = str.charCodeAt(i)
      if ((code > 47 && code < 58) || // numeric (0-9)
          (code > 64 && code < 91) || // upper alpha (A-Z)
          (code > 96 && code < 123)) { // lower alpha (a-z)
          alphaNumericFound = true
          return alphaNumericFound
      }
  }
  return alphaNumericFound
}

export function wordCounter(input: string) {
  const text = input.split(/\s+/)
  let wordCount = 0
  for (let i = 0; i < text.length; i++) {
      if (text[i] !== ' ' && isWord(text[i])) {
          wordCount++
      }
  }
  return wordCount
}

const wordsPerMinute = 225

export function readingTime(text: string) {
    return Math.ceil(wordCounter(text) / wordsPerMinute)
}

// add TS
export function extractTextFromContent(content) {
  let extractedText = "";

  content.forEach((section) => {
    if (section.sectionContent) {
      const sectionText = extractTextFromJSX(section.sectionContent);
      extractedText += sectionText + " ";
    }

    if (section.subSections) {
      section.subSections.forEach((subSection) => {
        if (subSection.subSectionContent) {
          const subSectionText = extractTextFromJSX(subSection.subSectionContent);
          extractedText += subSectionText + " ";
        }
      });
    }
  });

  return extractedText.trim();
}

export function extractTextFromJSX(jsxElement) {
  let text = "";

  if (typeof jsxElement === "string") {
    text += jsxElement;
  } else if (Array.isArray(jsxElement)) {
    jsxElement.forEach((element) => {
      text += extractTextFromJSX(element);
    });
  } else if (jsxElement.props && jsxElement.props.children) {
    text += extractTextFromJSX(jsxElement.props.children);
  }

  return text;
}

export function getArticleContentAsString(article) {
  let contentString = "";
  if (article.content) {
    contentString = extractTextFromContent(article.content);
  }
  return contentString;
}

export { env }
