"use client"
import { BannerDiscount } from "@/components/bannerDiscount/bannerDiscount";
import { BannerProduct } from "@/components/bannerProduct/bannerProduct";
import { CarouselTextBanner } from "@/components/carousel/carouselTextBanner";
import { ChooseCategory } from "@/components/chooseCategory/chooseCategoy";
import { FeaturedProducts } from "@/components/featuredProducts/featuredProducts";

export default function Home() {
  return (
    <>
      <CarouselTextBanner />
      <FeaturedProducts />
      <BannerDiscount />
      <ChooseCategory />
      <BannerProduct />
    </>
  )
}
