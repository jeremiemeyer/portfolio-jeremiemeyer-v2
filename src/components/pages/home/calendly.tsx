"use client"
import { PopupButton } from "react-calendly"
import { useEffect, useState } from "react"

export default function Calendly() {
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null)

  useEffect(() => {
    // Wait for the component to be mounted before setting the rootElement
    if (typeof window !== "undefined") {
      const nextElement = document.getElementById("__next")
      setRootElement(nextElement)
    }
  }, [])

  return rootElement ? (
    <PopupButton
      className="font-semibold text-black dark:text-white duration-200 hover:bg-primary/20"
      url="https://calendly.com/jeremiem/30min"
      rootElement={rootElement}
      text="planifier un call."
    />
  ) : null
}
