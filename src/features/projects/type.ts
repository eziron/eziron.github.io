export type ProjectData = {
  id: string; // Keep as is, used for main i18n key and internal reference
  slug: string; // New: for URL generation, e.g., 'my-awesome-project'
  dirName: string;
  imageUrl?: any; // Main project image, keep as is
  projectUrl?: string; // Link to live project, keep as is
  codeUrl?: string; // Link to source code, keep as is
  date: string; // New: e.g., '2023-06-15', 'Jan 2023 - Mar 2024'. Will be translated.
  galleryImages?: Array<{ id: string; src: any }>; // Store raw image data, alt/captions come from i18n
  videoUrl?: string;
  isFeatured?: boolean; 
  isHidden?: boolean;   
};

export type TranslatedKeyFeature = {
  id: string;
  title: string;
  description: string;
};

export type TranslatedGalleryImage = {
  id: string;
  src: ImageMetadata;
  alt: string; 
  caption?: string; 
};

export type TranslatedProject = ProjectData & {
  // Existing translated fields
  title: string; // Main title of the project
  description: string; // Short description for cards/previews
  imageAltText: string; // Alt text for the main project image

  // New translated fields for the detailed page
  categoryText?: string; // Translated category
  dateText?: string; // Translated date display string
  detailedDescription?: string | string[]; // Longer description for the project detail page
  galleryImagesTranslated?: Array<TranslatedGalleryImage>;
  
  challenges?: string; // Description of challenges faced (translated)
  learnings?: string; // Key learnings from the project (translated)

  tags?: Array<string>;
  keyFeaturesTranslated?: Array<TranslatedKeyFeature>;
};

// Skills
export type Technology = {
  id: string; // e.g., 'react', 'angular', 'typescript' (will map to react-icons)
  iconName: string; 
  colorClass: string; 
};

export type TranslatedTechnology = Technology & {
  name: string; // El 'name' ahora solo existe aquí
};

export type SkillData = {
  id: string; // Unique identifier for the skill, used for i18n keys
  technologies: Array<Technology>;
};

// Define the type for a skill once its content is translated
export type TranslatedSkill = SkillData & {
  title: string;
};
