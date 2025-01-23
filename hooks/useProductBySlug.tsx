import { getProducts } from "@/api/getProducts"
import { useEffect, useState } from "react"

export function useProductsBySlug(slug : string | string[]) {
  const URL = `products?populate=*&filters[slug][$eq]=${slug}` 

  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => { 
    (async() => {
      try {
        const res = await getProducts(URL)
        setResult(res)
        setLoading(false)
      } catch (error: any) {
        setError(error)
        setLoading(false)
      }
    })()
  }, [URL])

  return { result, loading, error }
}