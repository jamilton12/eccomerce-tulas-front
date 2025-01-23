import Link from "next/link"
import { buttonVariants } from "../ui/button"


export const BannerProduct = () => {
  return (
    <section className="relative text-white">
      <div className="mt-4 text-center  absolute top-1/2 left-1/2 transform sm:-translate-y-1/2 lg:-translate-y-1 -translate-x-1/2 py-4 backdrop-blur-lg bg-opacity-70  w-full">
        <p className="sm:text-xs lg:text-lg ">Llevate una tula personalizada con tu</p>
        <h4 className="mt-2 font-extrabold uppercase text-primary sm:text-3xl lg:text-5xl"> diseño favorito</h4>
        <p className="my-2 sm:text-xs lg:text-lg">Al mejor precio del mercado</p>
        <Link href="/shop?page=1" className={buttonVariants()}>Comprar</Link>
      </div>
      <div className="h-[350px] bg-cover lg:h-[600px] bg-[url('/slider-image.jpg')] bg-center mt-5" />
    </section>
  )
}