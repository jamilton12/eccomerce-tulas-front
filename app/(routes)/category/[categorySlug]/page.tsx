"use client"
import { Separator } from "@/components/ui/separator"
import { useProductsByCategory } from "@/hooks/useProductByCategories"
import { ProductType } from "@/types/products.type"
import { HooksResponseType } from "@/types/respones.type"
import { useParams } from "next/navigation"
import { useState } from "react"

import { SkeletonSchema } from "@/components/skeleton/skeletonSchema"
import { ProductCard } from "@/components/productCard/productCard"



export default function page() {
  const params  = useParams()
  const { categorySlug } = params

  const {result, loading}: HooksResponseType = useProductsByCategory(categorySlug)

  return (
    <main className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      {
        result !== null && !loading && (
          <h1 className="text-3xl font-medium py-4">{findTitle(categorySlug, result.products[0])}</h1>
        )
      }
      <Separator />   
      <section className="sm:flex sm:justify-between">
        {/* <FiltersControlsCategory setFilterOrigin={setFilterOrigin} /> */}
        <div className="grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
          {loading && (
            <SkeletonSchema grid={3} />
          )}
          {result !== null && !loading && result.products.map((product: ProductType) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

    </main>
  )
}

function findTitle(slug: string | string[], product : ProductType) {
  const category = product.categories.find((ProducCategory: any) => ProducCategory.slug === slug)
  const title = category?.category
  return title
}