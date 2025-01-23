"use client"

import { useRouter } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import Autoplay from "embla-carousel-autoplay";
import WhatsAppIcon from "@/icons/whatsAppIcon";
;
const dataCarouselTop = [
  {
    id: 1,
    title: `Contactanos en nuestro WhatsApp `,
    description: "Para un servio personalizado y de la mejor calidad.",
    link: "https://wa.me/573146709120?text=Hola%2C%20estoy%20interesado%20en%20hacer%20un%20pedido",
    icon: <WhatsAppIcon className="w-6 h-6 ml-2" />,
},
]


export const CarouselTextBanner = () => {
  const router = useRouter();
  return (
    <section className="bg-gray-200 dark:bg-primary" >
      <Carousel className="w-full mx-w-4xl mx-auto"
        plugins={[
          Autoplay({
            delay: 2500,
          })
        ]}
      >
        <CarouselContent>
          {dataCarouselTop.map(({id, title, description, link, icon}) => (
            <CarouselItem key={id} onClick={() => router.push(link)} className="cursor-pointer">
              <div>
                <Card  className="shadow-none border-none bg-transparent">
                  <CardContent className="flex flex-col justify-center p-2 items-center text-center">
                    <h4 className="sm:text-lg text-wap flex dark:text-gray-200">{title}{icon}</h4>
                    <p className="text-xs sm:text-sm text-wrap dark:text-gray-300 ">{description}</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel> 
    </section>
  )
}