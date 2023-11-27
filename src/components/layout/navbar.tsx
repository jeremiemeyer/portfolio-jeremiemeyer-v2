"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ModeToggle } from "../mode-toggle"
import { usePathname, useRouter } from "next/navigation"

export default function Navbar() {
  const [navbar, setNavbar] = useState(false)
  const router = useRouter()
  const currentPathname = usePathname()

  const navlinks = [
    {
      path: "/",
      name: "Accueil",
    },
    {
      path: "/realisations",
      name: "Réalisations",
    },
    {
      path: "/dashboard",
      name: "Dashboard",
    },
    {
      path: "/contact",
      name: "Contact",
    },
  ]

  const handleClick = async () => {
    setNavbar(false)
  }

  useEffect(() => {
    if (navbar) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [navbar])

  return (
    <nav className="bg-blur bg-gray-100 dark:bg-gray-800 bg-opacity-70 dark:bg-opacity-50 border border-gray-400 border-opacity-20 dark:border-slate-700 dark:border-opacity-30 rounded-full mt-3 select-none sticky top-0 z-50 w-full max-w-[1200px] mx-auto">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-3 md:block">
            <Link href="/" onClick={handleClick}>
              <h1 className="text-2xl blue_gradient font-bold lg:hover:scale-[1.10] duration-200">
                JM
              </h1>
            </Link>
            <div className="md:hidden flex gap-1">
              <button
                className="p-2 text-zinc-700 dark:text-zinc-400 rounded-md outline-none focus:border-zinc-400 focus:border"
                aria-label="Hamburger Menu"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 "
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
              <ModeToggle />
            </div>
          </div>
        </div>
        <div>
          <div
            className={`absolute m-auto left-0 right-0 md:static justify-self-center border p-4 rounded-md md:block md:p-0 md:mt-0 md:border-none ${
              navbar ? "block bg-white dark:bg-black" : "hidden"
            }`}
            style={{ width: "100%", maxWidth: "40rem" }}
          >
            <ul className="flex flex-col items-center space-y-4 text-lg md:flex-row md:space-y-0 md:space-x-2">
              {navlinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={handleClick}
                  className={
                    link.path === "/"
                      ? currentPathname === "/"
                        ? "text-zinc-900 dark:text-zinc-100"
                        : " text-zinc-400 dark:text-zinc-400"
                      : currentPathname.startsWith(link.path)
                      ? "text-zinc-900 dark:text-zinc-100"
                      : " text-zinc-400 dark:text-zinc-400"
                  }
                >
                  <li className="p-2 px-3 rounded-full hover:bg-gray-200 hover:bg-opacity-70 dark:hover:bg-opacity-50 hover:text-zinc-900 dark:hover:bg-slate-800 dark:hover:text-zinc-100">
                    {link.name}
                  </li>
                </Link>
              ))}

            </ul>
          </div>
        </div>
        <div className="hidden md:block">
          <ModeToggle />
        </div>
      </div>
    </nav>
  )
}
