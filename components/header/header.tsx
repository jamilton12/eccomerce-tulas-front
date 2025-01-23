"use client"
import { BaggageClaim, Heart, ShoppingCart, User } from "lucide-react"
import { useRouter } from "next/navigation"
import { MenuList } from "./menuList"
import { ModeToggle } from "./toggleTheme"
import { MenuMovile } from "./menuListMovile"
import { useCart } from "@/hooks/useCart"
import { useLovedPoducts } from "@/hooks/useLovedProducts"

export const Header = () => {
  const { push } = useRouter()
  const { items } = useCart()
  const { lovedProducts } = useLovedPoducts()

  return (
    <header className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-4xl md:max-w-6xl  ">
      <h1 className="text-2xl sm:text-3xl font-black text-primary" onClick={() => push("/")}>Tulas<span className="text-white font-medium">Personalizadas</span></h1>
      <section className="items-center justify-center hidden lg:flex ">
        <MenuList/>
      </section>
      <section className="flex lg:hidden">
        <MenuMovile />
      </section>
      <section className="flex items-center justify-between gap-2 sm:gap-7">
        {items.length === 0 ?(
          <ShoppingCart 
            strokeWidth="1" 
            className="cursor-pointer" 
            onClick={() => push("/cart")} 
          />
        ):(
          <div className="flex gap-1" onClick={() => push("/cart")}>
            <BaggageClaim strokeWidth={1} className="cursor-pointer" />
            <span>{items.length}</span>
          </div>
        )}
        {lovedProducts.length === 0 ? (
          <Heart strokeWidth={1}  className="cursor-pointer hover:fill-current" onClick={() => push('/loved-products')}/>
        ): (
          <div className="flex gap-1" onClick={() => push("/loved-products")}>
            <Heart strokeWidth={1} className="cursor-pointer hover:fill-current" />
            <span>{lovedProducts.length}</span>
          </div>
        )}
        <User strokeWidth="1" className="cursor-pointer" />
        <ModeToggle/>
      </section>
    </header>
  )
}