import { Count } from "@/components/shared/count/count"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/hooks/useCart"
import { useLovedPoducts } from "@/hooks/useLovedProducts"
import { formatPrice } from "@/lib/formatPrice"
import { ProductType } from "@/types/products.type"
import { Heart, ShoppingCart } from "lucide-react"


interface infoProductProps {
  product : ProductType
}

export const InfoProduct = ({ product }: infoProductProps) => {
  const { addItem } = useCart()
  const { addLovedProduct } = useLovedPoducts()
  return (
    <section className="px-6">
      <div className="justify-between mb-3 sm:flex">
        <h1 className="text-2xl">{product.productName}</h1>
        <p>{product.categories[0].category}</p>
      </div>
      <Separator className="my-4" />
      <p className="my-4 text-2xl">{product.productDescription}</p>
      <Separator className="my-4" />
      <div className="flex my-4 flex-col sm:flex-row gap-3 justify-between w-full ">
        <p className="text-2xl">{formatPrice(product.price)} $</p>
        <Count product={product} />
      </div>
      <div className="flex items-center gap-5">
        <Button onClick={() => addItem(product)} className="w-full">
          Comprar 
          <ShoppingCart size={20} />
        </Button>
        <Heart 
          width={30}
          strokeWidth={1}
          className="transition-colors duration-300 cursor-pointer hover:fill-current"
          onClick={() => addLovedProduct(product)}
        />
      </div>
    </section>    
  )
}