import Link from "next/link"
import SocialMediaIcons from "../../common/social-media-icons"
import { Button } from "../../ui/button"

export default function Hero() {
  return (
    <header className="md:container">
      <div className="mainDiv">
        <div className="py-16 px-8 md:px-0 lg:py-32 flex flex-col items-center text-center gap-8">
          <h1 className="text-5xl lg:text-6xl font-bold text-black dark:text-zinc-300 text-opacity-70">Jeremie Meyer</h1>
          <h2 className="text-lg lg:text-3xl font-light text-black dark:text-zinc-300 text-opacity-70">
            Développeur front-end<br/>
          </h2>
          <SocialMediaIcons />
          <Link href="/contact">
            <Button className="w-[12rem]">Contactez-moi</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
