import { toast } from "@/hooks/use-toast";
import { ProductType } from "@/types/products.type";
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'



interface CartStore {
  items : ProductType[]
  totalPrice: number
  addItem: (item: ProductType) => void
  removeItem: (id: number) => void
  clear: () => void
  updatetotalprice : (id: number, count: number) => void

}

export const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      totalPrice: 0,
      addItem: (item: ProductType) => {
        const currentItems = get().items
        const existingItem = currentItems.find((i) => i.id === item.id)
        if (existingItem) {
          return toast({
            title: 'El producto ya esta en el carrito',
            description: 'Se ha incrementado la cantidad en el carrito',
            variant: 'destructive',
          })
        }
        
        set({totalPrice: calculateTotalPrice([...get().items, item]) })
        set({ items: [...get().items, item] })
        toast({
          title: 'Producto agregado al carrito 🛍️',
        })
      },
      removeItem : (id: number) => {
        set({
          items: get().items.filter((item) => item.id !== id),
        })
        set({totalPrice: calculateTotalPrice(get().items) })
        toast({
          title: 'Producto eliminado del carrito 🗑️',
        })
      },
      clear: () => {
        set({ items: [] })
      },
      updatetotalprice : (id: number, newPrice: number) => {
        const currentItems = get().items
        const item = currentItems.find((i) => i.id === id) 
        if (item === null || item === undefined) return

        item.totalPrice = newPrice
        set({ items: currentItems })

        set({totalPrice: calculateTotalPrice(get().items) })
      }
    }),{
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage)
    }
  )
)

function calculateTotalPrice (items: ProductType[]) {
  const prices = items.map((item) => item.totalPrice)
  if (prices.length === 0) return 0
  return prices.reduce((total, price) => total + price, 0)
}