const normalizeSrc = (src: string) => {
  return src.startsWith("/") ? src.slice(1) : src
}

const cdnUrl = "/cdn-cgi/image"

export default function cloudflareLoader({
  src,
  width,
  quality,
}: {
  src: string
  width: number
  quality?: number
}) {
  // if (process.env.NODE_ENV === "development") {
  //   return src
  // }
  const params = [`width=${width}`]
  if (quality) {
    params.push(`quality=${quality}`)
  }
  const paramsString = params.join(",")

  return `${cdnUrl}/${paramsString}/${normalizeSrc(src)}`
}
