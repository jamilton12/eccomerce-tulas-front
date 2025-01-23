"use client"

import { getCategories } from "@/api/getCategories"
import { CategoryType } from "@/types/caregories.type"
import { useEffect, useState } from "react"

export function useChooseCategory() {
  const url = `product-categories?populate=*&filters[slug][$eq]=tulas-economicas&filters[slug][$eq]=tulas-modernas&filters[slug][$eq]=tulas-tradicionales`
  const [result, setResult] = useState<CategoryType | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => { 
    (async() => {
      try {
        const res = await getCategories(url)
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
