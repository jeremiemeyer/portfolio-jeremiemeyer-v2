import ContactForm from "@/components/shared/contact-form"
import SocialMediaIcons from "@/components/common/social-media-icons"
import HeadingText from "@/components/common/heading-text"
import FadeInOnEntry from "@/components/fade-in-on-entry"

export const metadata = {
  title: "Contact | Jeremie Meyer",
  description: "Page de contact",
}

export default function Contact() {
  return (
    <main className="fade-in container py-4 sm:py-8 flex flex-col items-center">
      <div className="flex flex-col items-center text-center space-y-2 gap-4 my-6">
        <HeadingText title="Contact" />
        <SocialMediaIcons />
      </div>
      <ContactForm />
    </main>
  )
}
