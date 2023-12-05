export type SiteConfig = {
  name: string
  author: string
  description: string
  url: string
  links: {
    github: string
    // facebook: string
    // twitter: string
    linkedin: string
    personal: string
  }
}

export type Maybe<T> = T | null

export type Tuple<T> = [T, T]


export type Meta = {
  id: string,
  title: string,
  summary: string,
  date: string,
  tags: string[]
}

export type BlogPost = {
  meta: Meta,
  content: ReactElement<any, string | JSXElementConstructor<any>>,
}