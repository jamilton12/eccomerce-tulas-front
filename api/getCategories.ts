import { getUrl, query } from "./query";
import { CategoryType } from "@/types/caregories.type";


const URL = getUrl()

export function getCategories(url : string) {
  return query(url)
    .then((res) =>{
      const meta = res.meta
      const categories = res.data.map((category : CategoryType) => {
        const { categoryName, categoryDescription, categoryImage, id, slug } = category

        const image = `${URL}${categoryImage.url}`

        return {
          id,
          categoryName,
          categoryDescription,
          image,
          slug
        }
      })
      
      return { categories, meta }
    })
}
