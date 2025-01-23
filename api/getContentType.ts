import { query } from "./query";


export function getContentType(url: string) {
  return query(url)
    .then((res) => {
      return res.data
    })
}