import { getProducts } from "@/api/getProducts"
import { ProductType } from "@/types/products.type"
import { useEffect, useState } from "react"

type responseType = {
  products: ProductType[]
  pagination: number
}

export function useProductsAll(page : number  = 1) {
  const URL = `products?populate=*&pagination[page]=${page}&pagination[pageSize]=10`

  const [result, setResult] = useState<responseType | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => { 
    (async() => {
      try {
        const res = await getProducts(URL)
        console.log(res);
        
        setResult(res )
        setLoading(false)
      } catch (error: any) {
        setError(error)
        setLoading(false)
      }
    })()
  }, [URL])

  return { result, loading, error }
}