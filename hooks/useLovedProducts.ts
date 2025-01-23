
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

import { toast } from './use-toast'
import { ProductType } from '@/types/products.type'

interface LovedProductStoreTypes {
  lovedProducts: ProductType[]
  addLovedProduct: (data: ProductType) => void
  removeLovedProduct: (id: number) => void
}

export const useLovedPoducts = create(
  persist<LovedProductStoreTypes>(
    (set, get) => ({
      lovedProducts: [],
      addLovedProduct: (data: ProductType) => {
        const currentLovedProducts = get().lovedProducts
        const existingProduct = currentLovedProducts.find((product) => product.id === data.id)

        if (existingProduct) {
          return toast({
            title: "El producto ya existe en favoritos.❌",
            variant: "destructive"
          })
        }

        set({
          lovedProducts: [...get().lovedProducts, data]
        })
        toast({
          title: "Producto agregado a favoritos.✅",
        })
      },
      removeLovedProduct: (id: number) => {
        set({
          lovedProducts: get().lovedProducts.filter((product) => product.id !== id)
        })
        toast({
          title: "Producto eliminado de favoritos.🗑️",
        })
      },
    }),
    {
      name: "loved-products-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
)
