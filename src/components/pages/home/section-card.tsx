import React, { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export default function SectionCard({ children }: Props) {
  return (
    <section className="p-8 lg:p-8 rounded-3xl bg-gray-300 bg-opacity-20 dark:bg-gray-700 dark:bg-opacity-20 border border-gray-400 border-opacity-20 dark:border-slate-700 dark:border-opacity-30 mx-auto w-full">
      <div className="flex flex-col lg:flex-col-reverse gap-6">
        <div className="space-y-4">{children}</div>
      </div>
    </section>
  )
}
