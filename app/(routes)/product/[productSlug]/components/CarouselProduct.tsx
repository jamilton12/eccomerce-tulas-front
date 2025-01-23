/* eslint-disable @next/next/no-img-element */
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

interface CarouselProductProps {
  images: string[]
}

export const CarouselProduct = ({ images } : CarouselProductProps) => {
  return (
    <div className="sm:px-16">
      <Carousel>
        <CarouselContent>
          {
            images.map((image, index) => (
              <CarouselItem key={index}>
                <img src={image} alt={`imagen #${index + 1}`} className="rounded-lg" />
              </CarouselItem>
            ))
          }
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}