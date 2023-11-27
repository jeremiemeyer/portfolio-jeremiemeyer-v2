import wretch from "wretch"

// Instantiate and configure wretch
const api = wretch("https://gh-pinned-repos.egoist.dev", {
  cache: "no-store",
  mode: "cors",
})
  .errorType("json")
  .resolve((r) => r.json())

// For some reason, the API now returns broken links. Function to return data properly
function formatLinks(data: Repo[]) {
  return data.map((item) => {
    const formattedLink = item.link.replace(/[^\w:/.\-]+/g, "")
    const formattedRepo = item.repo.replace(/[^\w:/.\-]+/g, "")
    return { ...item, link: formattedLink, repo: formattedRepo }
  })
}

// Fetch my pinned repository
export const getRepo = async () => {
  try {
    const response = (await api.get("/?username=jeremiemeyer")) as Repo[]
    const formattedData = formatLinks(response) // Format the data
    return formattedData
  } catch (error) {
    throw error
  }
}
