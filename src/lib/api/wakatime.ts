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
      Authorization: `Basic ${Buffer.from("waka_6683c4bd-e206-4936-b99f-fe1952a46595").toString(
        "base64"
      )}`,
    })
    .get("/api/v1/users/current/stats")
}
