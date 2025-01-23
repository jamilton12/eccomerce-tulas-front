"use client"
import { Item } from "@/components/shared/items/items"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/hooks/useCart"
import { formatPrice } from "@/lib/formatPrice"
import { ProductType } from "@/types/products.type"


export default function page() {
  const { items, removeItem, totalPrice	} = useCart()

  return (
    <main className="max-w-6xl px-4 py-16 max-auto sm:px-6 lg:px-8">
      <h1 className="mb-5 text-3xl font-bold">Carrito de compra</h1>
      <div className="grid sm:grid-cols-2 sm:gap-5">
        <section>
          {items.length === 0 && (
            <p>No hay productos en el carrito</p>
          )}
          <ul>
            {items.map((item : ProductType) => (
              <Item key={item.id} item={item} removeItem={removeItem}/>
            ))}
          </ul>
        </section>
        <section className="max-w-xl">
          <div className="p-8 rounded-lg bg-slate-100 text-black">
            <p className="mb-3 text-lg font-semibold">Resumen de la compra</p>
            <Separator />
            <header className="flex justify-between gap-5 my-4">
              <p>Subtotal</p>
              <p>{formatPrice(totalPrice)}</p>
            </header>
            <footer className="flex items-center justify-center w-full mt-3">
              <Button 
                className="w-full"
                onClick={() => console.log("comprar")}
              >
                Comprar
              </Button>
            </footer>
          </div>
        </section>
      </div>
    </main>
  )
}
