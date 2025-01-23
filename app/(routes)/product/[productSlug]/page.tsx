"use client"

import { useProductsBySlug } from "@/hooks/useProductBySlug"
import { HooksResponseType } from "@/types/respones.type"
import { useParams } from "next/navigation"
import { CarouselProduct } from "./components/CarouselProduct"
import { InfoProduct } from "./components/infoProduct"
import { SkeletonProduct } from "./components/skeletonProduct"

export default function page() {
  const params = useParams()
  const { productSlug } = params
  const { result, loading }: HooksResponseType = useProductsBySlug(productSlug)

if (result === null && loading) {
    return (
      <SkeletonProduct />
    )
  }

  return (
    <section className="max-w-6xl mx-auto sm:py-32 sm:px-16">
      <div className="grid gap-5 lg:gap-0 lg:grid-cols-2">
        <header>
          <CarouselProduct images={result.products[0]?.images} />
        </header>
        <footer className="sm:px-12">
          <InfoProduct product={result.products[0]} />
        </footer>
      </div>
    </section>
  )
}