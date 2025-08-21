// src/features/media/type.ts
import type { ImageMetadata } from 'astro';

// Define la estructura de datos cruda para cada noticia
export type MediaItemData = {
  id: string; // ID único para las traducciones
  mediaOutlet: string; // Nombre del medio (ej. "CNN Chile")
  date: string; // Fecha de publicación en formato YYYY-MM-DD
  imageUrl: ImageMetadata; // Imagen de referencia (importada)
  url: string; // Enlace a la noticia
};

// Define la estructura de una noticia una vez que se le han aplicado las traducciones
export type TranslatedMediaItem = MediaItemData & {
  title: string; // Titular de la noticia (traducido)
  description?: string; // Descripción opcional (traducida)
};