"use client"

import { getCategories } from "@/api/getCategories"
import { CategoryType } from "@/types/caregories.type"
import { metaType } from "@/types/products.type"
import { useEffect, useState } from "react"

type HooksCategoryType = {
  categories: CategoryType[]
  meta: metaType
}

export function useAllCategory(page: number = 1) {
  const url = `product-categories?populate=*&pagination[page]=${page}&pagination[pageSize]=10`
  const [result, setResult] = useState<HooksCategoryType | null>(null)
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