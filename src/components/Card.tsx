import Image from 'next/image';
import Link from 'next/link';

function Card({ title, description, banner, href } : { title: any; description: any; banner: any; href: any }): React.ReactElement {
  const image = (
    <Image
      alt={title}
      src={banner}
      className='object-cover object-center md:h-36 lg:h-48'
      width={0}
      height={0}
      sizes="100vw"
      style={{ width: '100%', height: 'auto' }}
    />
  );

  return (
    
    <div className='md p-4 md:w-1/2'>
    {/* <div className='md p-4 md:w-1/2' style={{ maxWidth: '544px' }}> */}
      <div
        className={`${
          banner && 'h-full'
        }  overflow-hidden rounded-md border-2 border-gray-200 dark:border-gray-800 hover:bg-gray-200 dark:hover:bg-gray-900`}
      >
        {banner &&
          (href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {image}
            </Link>
          ) : (
            image
          ))}
        <div className='p-6'>
          <h2 className='mb-3 text-2xl font-bold leading-8 tracking-tight'>
            {href ? (
              <Link href={href} aria-label={`Link to ${title}`}>
                {title}
              </Link>
            ) : (
              title
            )}
          </h2>
          <p className='prose mb-3 max-w-none text-gray-500 line-clamp-2 dark:text-gray-400'>
            {description}
          </p>
          {href && (
            <Link
              href={href}
              className='text-base font-medium leading-6 blue_gradient hover:text-blue-800 dark:hover:text-blue-800'
              aria-label={`Link to ${title}`}
            >
              En savoir plus &rarr;
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
