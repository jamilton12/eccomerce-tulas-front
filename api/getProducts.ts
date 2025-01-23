import { ProductResponseType } from "@/types/products.type";
import { getUrl, query } from "./query";
import { ImageResponseType } from "@/types/images.type";
import { CategoryType } from "@/types/caregories.type";

const URL = getUrl()

export function getProducts(url : string) {
  return query(url)
    .then((res) =>{
      const pagination = res.meta.pagination.pageCount 
      const products = res.data.map((product : ProductResponseType) => {
        const { id, productName, productDescription, productImages,isFeature, isActive, product_categories, slug, price } = product

        const images = productImages.map((image : ImageResponseType) => {
          return `${URL}${image.url}`
        })

        const categories = product_categories.map((categoryProduct : CategoryType) => {
          const {categoryName, slug } = categoryProduct
          const  category = categoryName
          return {category, slug}
        })

        const count = 1

        return {
          id,
          productName,
          productDescription,
          images,
          isFeature,
          isActive,
          categories,
          slug,
          price,
          count
        }
      })  
      return {products, pagination}
    })
}