import Link from "next/link"
import { siteConfig } from "@/../config/site"
import { usePathname, useRouter } from "next/navigation"

export default function Footer() {
  const router = useRouter()
  const currentPathname = usePathname()

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-auto">
      <div className="w-full max-w-screen-xl mx-auto p-6 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="/">
            <h1 className="text-2xl font-bold mb-2 sm:mb-0">JM</h1>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-zinc-500 dark:text-zinc-400 sm:mb-0">
            <li>
              <Link 
                href="/mentions-legales"
                className={
                  "mr-4 hover:underline md:mr-6" +
                  (currentPathname === "/mentions-legales" ? " font-semibold blue_gradient" : " text-zinc-400 dark:text-zinc-200")
                }
              >
                Mentions légales
              </Link>
            </li>
            {/* <li>
              <Link href="/dashboard" className="mr-4 hover:underline md:mr-6 ">
                Dashboard
              </Link>
            </li> */}
            <li>
              <Link
                href="/rgpd"
                className={
                  "mr-4 hover:underline md:mr-6" +
                  (currentPathname === "/rgpd" ? " font-semibold blue_gradient" : " text-zinc-400 dark:text-zinc-200")
                }
              >
                RGPD
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-800 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-zinc-500 dark:text-zinc-400 sm:text-center">
          © {new Date().getFullYear()}{" "}
          <a
            target="_blank"
            href={siteConfig.links.personal}
            className="hover:underline"
          >
            Jeremie Meyer
          </a>
          . Tous droits réservés.
        </span>
      </div>
    </footer>
  )
}
