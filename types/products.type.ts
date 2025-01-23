import { CategoryType } from "./caregories.type"
import { ImageResponseType } from "./images.type"

export type ProductResponseType = {
  id: number
  productName: string
  productDescription: string,
  slug: string
  price: number,
  productImages: ImageResponseType[]
  isFeature: boolean
  isActive: boolean
  product_categories: CategoryType[]
}

export type ProductType = {
  id: number
  productName: string
  productDescription: string
  slug: string
  price: number
  images: string[]
  isFeature: boolean
  isActive: boolean
  categories: {
    slug : string
    category: string
  }[]
  count: number
  totalPrice: number
}

export type metaType = {
  pagination: {
    page: number
    pageSize: number
    pageCount: number
    total: number
  }
}