import { useState, useEffect } from "react"
import { hasCookie, setCookie } from "cookies-next"
import { Button } from "./ui/button"

const CookiesConsent = (props: any) => {
  const [showConsent, setShowConsent] = useState(true)

  useEffect(() => {
    if(hasCookie("localConsent")) {
      document.body.style.overflow = "auto"
    } else {
      document.body.style.overflow = "hidden"
    }
    
    setShowConsent(hasCookie("localConsent"))
  }, [])

  const acceptCookie = () => {
    setShowConsent(true)
    setCookie("localConsent", "true", {})
  }

  if (showConsent) {
    document.body.style.overflow = "auto"
    return null
  }

  return (
    <div className="fixed inset-0 bg-blur bg-slate-100 bg-opacity-70 dark:bg-black dark:bg-opacity-70">
      <div className="fixed bottom-0 left-0 right-0 flex items-center justify-between px-8 py-8  bg-gray-300 bg-opacity-50 dark:bg-gray-900 dark:bg-opacity-50">
        <span className="text-dark dark:text-zinc-200 text-base mr-16">
          Ce site utilise des cookies. En poursuivant, vous consentez à ce que
          des cookies soient déposés sur votre navigateur web.
        </span>
        <Button className="w-[12rem]" onClick={() => acceptCookie()}>
          Accepter
        </Button>

      </div>
    </div>
  )
}

export default CookiesConsent