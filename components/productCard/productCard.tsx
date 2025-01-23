/* eslint-disable @next/next/no-img-element */
import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { formatPrice } from "@/lib/formatPrice";


import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { ProductType } from "@/types/products.type";
import { IconButton } from "@/components/iconButton/iconButton";
import { useCart } from "@/hooks/useCart";

type productCardProps = {
  product: ProductType
}

export const ProductCard = ({product} : productCardProps) => {
  const router = useRouter()
  const { addItem, updatetotalprice } = useCart()
  return (
    <Link 
      href={`/product/${product.slug}`} 
      className="relative p-1 transition-all duration-100 rounded-lg hover:shadow-md h-full border flex flex-col justify-between"
    >
      <Carousel 
        opts={{
          align:"start"
        }}
        className="w-full max-w-sm  "
      >
        <CarouselContent>
          {product.images.map((image, index) =>(
            <CarouselItem key={index} className="group ">
              <img src={image} alt="image" className="rounded-xl"/>
              <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                <div className="flex justify-center gap-x-6">
                  <IconButton onClick={() => router.push(`/product/${product.slug}`)} >
                    <Expand size={20} className="text-gray-600"/>
                  </IconButton>
                  <IconButton onClick={() => {addItem(product); updatetotalprice(product.id, product.price)}} >
                    <ShoppingCart size={20} className="text-gray-600 z-10"/>
                  </IconButton>  
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <p className="text-2xl text-center">{product.productName}</p>
      <p className="font-bold text-center">{formatPrice(product.price)}</p>
    </Link>
  )
}