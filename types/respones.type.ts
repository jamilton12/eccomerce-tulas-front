import { contentType } from "./contentType.type"

export type HooksResponseType = {
  result: any,
  loading: boolean,
  error: string
}


export type FilterType = {
  result:null | contentType, 
  loading: boolean,
  error: string
}