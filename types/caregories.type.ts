import { ImageResponseType } from "./images.type"

export type CategoryType = {
  id: number
  categoryName: string
  slug: string
  categoryDescription: string
  categoryImage: ImageResponseType 
  image: string
}

