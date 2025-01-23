"use client"
import { Item } from "@/components/shared/items/items";
import { useLovedPoducts } from "@/hooks/useLovedProducts";


export default function page() {
  const { lovedProducts, removeLovedProduct } = useLovedPoducts();
  return (
    <main className="max-w-4xl max-auto py-4 sm:py-32 sm:px-24">
      <h1 className="sm:text-2xl">Productos favoritos</h1>
      <section>
        <div>
          {lovedProducts.length === 0 && (
            <p>No hay productos favoritos</p>
          )}
          <ul>
            {
              lovedProducts.map((product) => (
                <Item key={product.id} item={product} removeItem={removeLovedProduct}/>
              ))
            }
          </ul>
        </div>
      </section>
    </main>
  )
}