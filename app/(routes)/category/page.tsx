/* eslint-disable @next/next/no-img-element */
"use client"
import { PaginationElement } from "@/components/shared/pagination/pagination";
import { SkeletonSchema } from "@/components/skeleton/skeletonSchema";
import { Separator } from "@/components/ui/separator";
import { useAllCategory } from "@/hooks/useAllCategories";
import { CategoryType } from "@/types/caregories.type";
import { HooksResponseType } from "@/types/respones.type";
import Link from "next/link";

export default function Page({ searchParams }: { searchParams: { [key : string]: string } }) {
  const { page } = searchParams

  const { result, loading }: HooksResponseType = useAllCategory(Number(page) )

  return (
    <main className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      <h1 className="text-3xl font-medium py-4">Todas las categorías</h1>
      <Separator />
      <section className="sm:flex sm:justify-between">
        <div className="grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
          {loading && (
            <SkeletonSchema grid={3} />
          )}
          {!loading && result !== null && result.categories.map((category: CategoryType) => (
            <Link key={category.id} href={`/category/${category.slug}`} className="relative max-w-xs overflow-hidden bg-no-repeat bg-cover rounded-lg">
              <img src={category.image} alt={category.categoryName + " image"} className="max-w-[270px transition-transform duration-300] ease-in-out rounded-lg hover:scale-110 " />
              <p className="absolute w-full py-2 text-lg font-bold text-center text-white bottom-5 backdrop-blur-lg">{category.categoryName}</p>
            </Link>
          ))}
        </div>
      </section>

      {!loading && result !== null && result.meta.pagination.pageCount > 1 && (
        <section className="mt-8">
          <PaginationElement currentPage={Number(page)} totalPages={result.meta.pagination.pageCount} url="category" />
        </section>
      )}
    </main>
  )
}