import React from 'react';
import Autoplay from 'embla-carousel-autoplay';
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
      delay: 3500,
      stopOnInteraction: true,
    })
  );

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <section aria-label="Galería de imágenes del proyecto" className="not-prose my-12">
      <Carousel
        className="w-full relative" 
        opts={{
          align: 'start',
          loop: true,
        }}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        <CarouselContent className="-ml-4">
          {images.map((image, index) => (
            <CarouselItem key={image.id || index} className="pl-4 flex flex-col items-center justify-center">
              <div className="w-full max-h-[80vh] flex items-center justify-center overflow-hidden rounded-lg bg-black/10 dark:bg-white/5">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-contain"
                />
              </div>
              {image.caption && (
                <p className="mt-2 text-sm text-center text-muted-foreground">
                  {image.caption}
                </p>
              )}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 bg-background/60 hover:bg-background/80" />
        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 bg-background/60 hover:bg-background/80" />
      </Carousel>
    </section>
  );
}