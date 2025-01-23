"use client"
/* eslint-disable @next/next/no-img-element */
import { useProductsFeatured } from "@/hooks/useProductsFeatured"
import { useRouter } from "next/navigation"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"
import { ProductType } from "@/types/products.type"
import { HooksResponseType } from "@/types/respones.type"
import { Card, CardContent } from "../ui/card"
import { IconButton } from "../iconButton/iconButton"
import { Expand, ShoppingCart } from "lucide-react"
import { SkeletonSchema } from "../skeleton/skeletonSchema"
import { useCart } from "@/hooks/useCart"

export const FeaturedProducts = () => {
  const { result, loading }: HooksResponseType = useProductsFeatured()
  const { addItem, updatetotalprice } = useCart()
  const { push } = useRouter()

  return (
    <section className="max-w-6xl max-auto py-4 sm:py-16 sm:px-24" >
      <h3 className="px-3 text-3xl sm:pb-8">Productos destacados</h3>

      <div>
        <Carousel>
          <CarouselContent className="-ml-2 md:-ml-4" >
            {loading && (<SkeletonSchema grid={3} />)}
            {!loading && result?.products.map((product: ProductType) => {
              const { id, productName, productDescription, images, categories, slug, price } = product

              return (
                <CarouselItem key={id} className="cursor-pointer md:basis1/2 lg:basis-1/3 group" >
                  <section className="p-1 h-full">
                    <Card className="py-4 border border-gray-200 shadow-none h-full">
                      <CardContent className="relative flex justify-center items-center px-6 py-2">
                        <img src={images[0]} alt={productName + " image"}/>
                        <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                          <div className="flex justify-center gap-x-6">
                            <IconButton 
                              onClick={() => push(`/product/${slug}`)}
                              className="text-gray-600"
                            >
                              <Expand size={20} />
                            </IconButton>
                            <IconButton 
                              onClick={() => {addItem(product); updatetotalprice(id, price)}}
                              className="text-gray-600"
                            >
                              <ShoppingCart size={20} />
                            </IconButton>
                          </div>
                        </div>
                      </CardContent>
                      <div className="flex justify-between gap-4 px-8">
                        <h3 className="text-lg font-bold">{productName}</h3>
                        <div className="flex items-center justify-between gap-3">
                          <p></p>
                          <p></p>
                        </div>
                      </div>
                    </Card>
                  </section>
                </CarouselItem>
              )
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  )

}