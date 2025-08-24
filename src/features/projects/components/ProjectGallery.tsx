import React from 'react'; 
import Autoplay from 'embla-carousel-autoplay';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface GalleryImage {
  src: string;
  alt: string;
  id: string;
  caption?: string;
}

interface ProjectGalleryProps {
  images: GalleryImage[];
}

export default function ProjectGallery({ images }: ProjectGalleryProps) {
  const autoplay = React.useRef(
    Autoplay({
      delay: 4000, // Tiempo en milisegundos entre cada slide (4 segundos)
      stopOnInteraction: true, // ¡Clave! Detiene el autoplay cuando el usuario interactúa (botones o swipe)
      stopOnMouseEnter: false, // Opcional pero recomendado: detiene el autoplay al pasar el ratón por encima
    })
  );

  return (
    <Carousel
      className="w-full md:ml-12"
      opts={{
        align: 'start',
        loop: true,
      }}
      plugins={[autoplay.current]}
    >
      <CarouselContent className="-ml-1 not-prose">
        {images.map((image, index) => (
          <CarouselItem key={index} className="pl-1 relative">
            <div>
              <Card>
                <CardContent>
                  <AspectRatio ratio={16 / 9} className="h-full w-full">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-full w-full rounded-md object-cover"
                      width={600}
                      height={600}
                    />
                  </AspectRatio>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className=" md:left-[-3rem] absolute  left-4 top-1/2 -translate-y-1/2" />
      <CarouselNext className=" md:right-[-3rem] absolute right-4  top-1/2 -translate-y-1/2" />
    </Carousel>
  );
}
