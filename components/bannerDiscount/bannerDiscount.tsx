import Link from "next/link"
import { buttonVariants } from "../ui/button"
import { Instagram } from "lucide-react"
import WhatsAppIcon from "@/icons/whatsAppIcon"

export const BannerDiscount = () => {
  return (
    <div className="p-5 sm:p-20 text-center ">
      <h2 className="uppercase font-black text-2xl text-primary">¿Vas ha comprar más de 15 unidades?</h2>
      <h3 className="mt-3 font-semibold">Contactanos por nuestro WhatsApp o nuestro instagram</h3>
      <div className="max-w-md mx-auto flex flex-col sm:flex-row justify-center gap-5 md:gap-8 mt-5">
        <Link href="https://wa.me/573146709120?text=Hola%2C%20estoy%20interesado%20en%20hacer%20un%20pedido" className={buttonVariants()}>
          Comprar por WhatsApp
          <WhatsAppIcon size={20}/>
        </Link>
        <Link href="https://www.instagram.com/tulaspersonalizadas/" className={buttonVariants({ variant: "outline" })}>
          comprar por Instagram 
          <Instagram size={20} />
        </Link>

      </div>
    </div>
  )
}