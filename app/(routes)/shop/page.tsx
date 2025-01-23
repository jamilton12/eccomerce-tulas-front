"use client"

import { ProductCard } from "@/components/productCard/productCard"
import { PaginationElement } from "@/components/shared/pagination/pagination"
import { SkeletonSchema } from "@/components/skeleton/skeletonSchema"
import { Separator } from "@/components/ui/separator"
import { useProductsAll } from "@/hooks/useProductsAll"
import { ProductType } from "@/types/products.type"
import { HooksResponseType } from "@/types/respones.type"

export default function page({ searchParams }: { searchParams: { [key : string]: string } }) {
  const { page } = searchParams

  const { result, loading }: HooksResponseType = useProductsAll(Number(page))

  return (
    <main className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      <h1 className="text-3xl font-medium py-4">Todos los productos</h1>
      <Separator />
      <section className="sm:flex sm:justify-between">
        <div className="grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
          {loading && (
            <SkeletonSchema grid={3} />
          )}
          {!loading && result !== null && result.products.map((product: ProductType) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {!loading && result !== null && result.pagination > 1 && (
        <section className="mt-8">
          <PaginationElement currentPage={Number(page)} totalPages={result.pagination} url="shop" /> 
        </section>
      )}
    </main>
  )
}