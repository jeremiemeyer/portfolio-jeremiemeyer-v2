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


  // *API*
// Github
type Repo = {
  repo: string
  description: string
  language: string
  languageColor: string
  stars: number
  link: string
  website: string
}

// Wakatime
type Languages = {
  name: string
  total_seconds: number
  percent: number
  digital: string
  decimal: string
  text: string
  hours: number
  minutes: number
}

// Discord
type DiscordUser = {
  id: string
  username: string
  avatar: string
  global_name: string
}

type Status = string | "online" | "offline" | "idle" | "dnd"

type Activity = {
  name: string
  state?: string
  details?: string
  application_id?: string
  timestamps?: {
    start?: number
    end?: number
  }
  assets?: {
    large_image?: string
    large_text?: string
    small_image?: string
    small_text?: string
  }
}
