import { Input } from "@/components/ui/input"
import { useCart } from "@/hooks/useCart"
import { ProductType } from "@/types/products.type"
import { useState } from "react"

interface CountProps {
  product: ProductType
}

export const Count = ({ product }: CountProps) => {
  const [count, setCount] = useState(product.count)
  const { updatetotalprice } = useCart()

  function handleChange(operator: string) {
    const operation = operator === "mas" ? 1 : -1
    if (count <= 1 && operator === "menos") return 
    const newCount = count + operation
    product.count = newCount
    product.totalPrice = newCount * product.price
    updatetotalprice(product.id, newCount * product.price)

    setCount(newCount)
  }


  return (
    <div className="flex w-full sm:w-32 items-center justify-center px-2 gap-2 border rounded-lg hover:opacity-90 ">
      <button onClick={() => handleChange("menos")}  className="text-center w-full">-</button>
      <Input type="number" min={1}  value={count} disabled className="text-center w-full [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
      <button onClick={() => handleChange("mas")} className=" text-center w-full opacity-90">+</button>
    </div>
  )
}
