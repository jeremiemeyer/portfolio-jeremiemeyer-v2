"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Votre nom est requis",
  }),
  email: z.string().min(1, {
    message: "Votre e-mail est requis",
  }),
  // subject: z.string().min(1, {
  //   message: "Un objet est requis",
  // }),
  msg: z.string().min(1, {
    message: "Un message est requis",
  }),
})

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      // subject: "",
      msg: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    let senderName, email, message

    let data = {
      senderName: `${values.name}`,
      email: `${values.email}`,
      // subject: `${values.subject}`,
      message: `${values.msg}`,
    }

    // console.log(JSON.stringify(data))

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      // console.log("Response received")
      if (res.status === 200) {
        // console.log("Response succeeded!")
        form.reset()
      }
      setSubmitted(true)
      console.log(submitted)
    })
  }

  return (
    <>
    <div className="flex flex-col">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full sm:w-[24rem] space-y-4"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nom</FormLabel>
                <FormControl>
                  <Input
                    className="bg-white dark:bg-black"
                    placeholder="Votre nom"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input
                    className="bg-white dark:bg-black"
                    placeholder="Votre e-mail valide"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Objet</FormLabel>
                <FormControl>
                  <Input placeholder="Entrez l'objet" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> */}
          <FormField
            control={form.control}
            name="msg"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    className="bg-white dark:bg-black"
                    placeholder="Entrez votre message"
                    {...field}
                  />
                </FormControl>
                {/* <FormDescription>
                  Votre message me parviendra directement sur ma boîte mail.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <div />
          <Button className="w-full" type="submit">
            Envoyer
          </Button>
        </form>
      </Form>

      {submitted && (
        <h1 className="fade-in green_gradient font-semibold mt-8 text-center">
          Message envoyé !
        </h1>
      )}
      </div>
    </>
  )
}
