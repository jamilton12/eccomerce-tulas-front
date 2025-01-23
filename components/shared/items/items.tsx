
/* eslint-disable @next/next/no-img-element */
import { formatPrice } from "@/lib/formatPrice"
import { cn } from "@/lib/utils"
import { ProductType } from "@/types/products.type"

import { X } from "lucide-react"
import { useRouter } from "next/navigation"
import { Count } from "../count/count"

interface ItemsProps {
  item: ProductType
  removeItem: (id: number) => void
}

export const Item = ({ item, removeItem } : ItemsProps) => {
  const { push } = useRouter()

  return (
    <li className="flex py-6 border-b">
      <div onClick={() => push(`/product/${item.slug}`)}>
        <img src={item.images[0]} alt="product" className="w-24 h-24 overflow-hidden rounded-md sm:w-auto sm:h-32 cursor-pointer"/>
      </div>
      <div className="flex justify-between flex-1 px-6"  >
        <div>
          <h2 className="text-lg font-bold">
            {item.productName}
          </h2>
          <p>
            {formatPrice(item.price)} $
          </p>
          <Count product={item}/>
        </div>
        <div>
          <button
            className={cn("rounded-full flex items-center justify-center text-black bg-white border shoadow-md p-1 hover:scale-110")}
          >
            <X  size={20} onClick={() =>{ removeItem(item.id);}}/>
          </button>
        </div>
      </div>
    </li>
  )
}