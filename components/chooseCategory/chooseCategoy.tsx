/* eslint-disable @next/next/no-img-element */
import { useChooseCategory } from "@/hooks/useChooseCategories"
import { CategoryType } from "@/types/caregories.type"
import { HooksResponseType } from "@/types/respones.type"
import Link from "next/link"

export const ChooseCategory = () => {
  const { result, loading }: HooksResponseType = useChooseCategory()

  return (
    <section className="max-w-6xl max-auto py-4 sm:py-16 sm:px-24" >
      <h3 className="px-3 text-3xl sm:pb-8">Elige tu categoría</h3>
      <div className="grid gap-5 justify-center sm:grid-cols-3">
        {!loading && result && result.categories.map((category: CategoryType) => (
          <Link key={category.id} href={`/category/${category.slug}`} className="relative max-w-xs overflow-hidden bg-no-repeat bg-cover rounded-lg">
            <img src={category.image} alt={category.categoryName + " image"} className="max-w-[270px transition-transform duration-300] ease-in-out rounded-lg hover:scale-110 " />
            <p className="absolute w-full py-2 text-lg font-bold text-center text-white bottom-5 backdrop-blur-lg">{category.categoryName}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}