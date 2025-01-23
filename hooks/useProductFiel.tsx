
import { getContentType } from "@/api/getContentType"
import { contentType } from "@/types/contentType.type"
import { useEffect, useState } from "react"

export function useProductField() {
  const url = `content-type-builder/content-types/api::product.product`
  const [result, setResult] = useState<contentType | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => { 
    (async() => {
      try {
        const res = await getContentType(url)
        setResult(res)
        setLoading(false)
      } catch (error: any) {
        setError(error)
        console.log('error');
        
        setLoading(false)
      }
    })()
  }, [url])

  return { result, loading, error }
}
