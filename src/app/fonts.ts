import { Work_Sans, Unbounded, Lato } from "next/font/google"

export const worksans = Work_Sans({
  subsets: ["latin"],
})

export const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"]
})


export const unbounded = Unbounded({
  subsets: ["latin"],
})
