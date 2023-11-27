import ContactForm from "@/components/pages/contact-form"
import SocialMediaIcons from "@/components/common/social-media-icons"
import HeadingText from "@/components/common/heading-text"

export const metadata = {
  title: "Contact | Jeremie Meyer",
}

export default function Contact() {
  return (
    <main className="fade-in container py-4 sm:py-8 flex flex-col items-center">
      <div className="flex flex-col items-center text-center space-y-2npm i">
        <HeadingText
          title="Contact"
        />
        <SocialMediaIcons />
      </div>
      <ContactForm />
    </main>
  )
}
