import { unbounded } from "@/app/fonts";

interface HeadingProps {
  title: string
  subtext?: string
  children?: React.ReactNode;
}


export default function HeadingText({ title, subtext, children }: HeadingProps) {
  return (
    <div className={`${unbounded.className} space-y-2  md:space-y-5`}>
      <h1 className='text-3xl md:text-3xl  font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:leading-14'>
        {title}
      </h1>
      {subtext && (
        <p className='text-2xl leading-7 text-zinc-500 dark:text-zinc-400'>
          {subtext}
        </p>
      )}
      {children}
    </div>
  );

}
