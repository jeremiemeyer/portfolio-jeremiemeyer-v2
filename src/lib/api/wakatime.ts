import { env } from "../utils"
import wretch from "wretch"

// Instantiate and configure wretch
const api = wretch("https://wakatime.com", { cache: "no-store" })
  .errorType("json")
  .resolve((r) => r.json())

// Fetch stats from wakatime
export const getCodingStats = async () => {
  return await api
    .headers({
      Authorization: `Basic ${Buffer.from("waka_9355036d-f43e-4895-988e-5f3b2d8fac04").toString(
        "base64"
      )}`,
    })
    .get("/api/v1/users/current/stats")
}
