import type { ImageMetadata } from "astro";

// Datos base, independientes del idioma
export type ExperienceData = {
  id: string;
  slug: string;
  dirName: string;
  imageUrl?: ImageMetadata; // Logo de la empresa
  companyUrl: string;
  linkedinUrl?: string;
  email?: string;
  startDate: string; // Formato YYYY-MM-DD
  endDate?: string | null;
  isCurrent: boolean;
  isFeatured: boolean;
};

// Datos una vez que se han aplicado las traducciones
export type TranslatedExperience = ExperienceData & {
  title: string; // Cargo
  companyName: string;
  imageAltText: string;
  dateText: string; // Rango de fechas formateado

  // Campos preparados para la futura página de detalle
  detailedDescription?: string[];
  keyAchievements?: { title: string; description: string }[];
};