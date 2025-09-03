// src/features/projects/service.ts

import { ui, defaultLanguage, type LanguageCode } from '@/i18n/ui';
import type {
  ProjectData,
  SkillData,
  TranslatedProject,
  TranslatedSkill,
} from './type';

const projectJsons = import.meta.glob('/src/features/projects/content/**/*.json', { eager: true });
const allImages = import.meta.glob('/src/features/projects/content/**/*.{webp,jpg,jpeg,png}', { eager: true });

let _allProjects: ProjectData[] | null = null;

async function loadAllProjects(): Promise<ProjectData[]> {
  if (_allProjects) {
    return _allProjects;
  }

  const projects: ProjectData[] = [];
  for (const path in projectJsons) {
    const module = projectJsons[path] as any;
    const jsonData = module.default;
    
    const projectDir = path.substring(0, path.lastIndexOf('/')); 
    const dirName = projectDir.split('/').pop()!; 

    const project: ProjectData = {
      id: jsonData.id,
      slug: jsonData.slug,
      dirName: dirName, 
      date: jsonData.date,
      projectUrl: jsonData.projectUrl,
      codeUrl: jsonData.codeUrl,
      videoUrl: jsonData.videoUrl,
      isFeatured: jsonData.isFeatured ?? false,
      isHidden: jsonData.isHidden ?? false,
      galleryImages: [],
    };

    const mainImagePath = Object.keys(allImages).find(p => p.startsWith(`${projectDir}/main.`));
    if (mainImagePath) {
      project.imageUrl = (allImages[mainImagePath] as any).default;
    }

    
    const galleryImagePaths = Object.keys(allImages).filter(p => p.startsWith(`${projectDir}/gal`));
    const galleryImages = galleryImagePaths.map(p => {
      const id = p.split('/').pop()?.split('.')[0] ?? '';
      return { id, src: (allImages[p] as any).default };
    });

    if (mainImagePath) {
      galleryImages.push({
        id: 'main', // Le damos un 'id' fijo para poder referenciarla
        src: (allImages[mainImagePath] as any).default
      });
    }

    project.galleryImages = galleryImages;

    projects.push(project);
  }

  _allProjects = projects;
  return projects;
}

function translateProject(project: ProjectData, lang: LanguageCode): TranslatedProject {
  const jsonPath = `/src/features/projects/content/${project.dirName}/project.json`;

  const module = projectJsons[jsonPath] as any;
  if (!module) throw new Error(`JSON module for project directory '${project.dirName}' not found at path '${jsonPath}'.`);
  const jsonData = module.default;
  
  if (!jsonData) throw new Error(`JSON for project directory '${project.dirName}' not found at path '${jsonPath}'.`);

  const langContent = jsonData[lang] ?? jsonData[defaultLanguage];

  const galleryImagesTranslated = project.galleryImages?.map(img => {
    const translatedImgData = langContent.galleryImages?.[img.id];

    return {
      ...img, 
      alt: translatedImgData?.alt || `Imagen de galería para ${langContent.title}`,
      caption: translatedImgData?.caption || '',
    };
  }) || [];

  return {
    ...project,
    title: langContent.title ?? jsonData.id,
    description: langContent.description,
    imageAltText: langContent.imageAltText ?? `Portada del proyecto ${langContent.title}`,
    categoryText: langContent.categoryText,
    dateText: langContent.dateText ?? new Date(project.date).toLocaleDateString(lang === 'es' ? 'es-CL' : 'en-US', {
        year: 'numeric',
        month: 'long',
    }),
    detailedDescription: langContent.detailedDescription,
    keyFeaturesTranslated: (langContent.keyFeatures || []).map((f: any, index: number) => ({ id: `${project.id}-kf-${index}`, ...f })),
    galleryImagesTranslated: galleryImagesTranslated,
    challenges: langContent.challenges,
    learnings: langContent.learnings,
    tags: langContent.tags || [],
  };
}

export async function getTranslatedProjects(
  lang: LanguageCode,
  options: { includeHidden?: boolean; prioritizeFeatured?: boolean } = {}
): Promise<TranslatedProject[]> {
  const { includeHidden = false, prioritizeFeatured = true } = options;

  const allProjects = await loadAllProjects();
  
  const visibleProjects = includeHidden 
    ? allProjects 
    : allProjects.filter(p => !p.isHidden);

  const sortedProjects = [...visibleProjects].sort((a, b) => {
    if (prioritizeFeatured) {
      if (a.isFeatured && !b.isFeatured) return -1;
      if (!a.isFeatured && b.isFeatured) return 1;
    }
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return sortedProjects.map(p => translateProject(p, lang));
}

export async function getTranslatedProjectBySlug(slug: string, lang: LanguageCode): Promise<TranslatedProject | undefined> {
  const allProjects = await loadAllProjects();
  const project = allProjects.find(p => p.slug === slug);
  return project ? translateProject(project, lang) : undefined;
}

export async function getAllProjectsForStaticPaths(): Promise<ProjectData[]> {
    return await loadAllProjects();
}

// Skills
export const skillsList: Array<SkillData> = [
  {
    id: 'technicalSkills',
    technologies: [
      { id: 'embedded', iconName: 'mdi:chip', colorClass: 'bg-purple-600 hover:bg-purple-500' },
      { id: 'processing', iconName: 'mdi:square-wave', colorClass: 'bg-blue-600 hover:bg-blue-500' },
      { id: 'pcb', iconName: 'mdi:relation-many-to-many', colorClass: 'bg-green-600 hover:bg-green-500' },
      { id: 'smd', iconName: 'mdi:soldering-iron', colorClass: 'bg-orange-500 hover:bg-orange-400' },
      { id: 'printing', iconName: 'mdi:printer-3d-nozzle', colorClass: 'bg-gray-700 hover:bg-gray-600' },
      { id: 'plc', iconName: 'mdi:factory', colorClass: 'bg-blue-800 hover:bg-blue-700' },
    ],
  },
  {
    id: 'programmingLanguages',
    technologies: [
      { id: 'cplusplus', iconName: 'mdi:language-c', colorClass: 'bg-purple-600 hover:bg-purple-500' },
      { id: 'python', iconName: 'mdi:language-python', colorClass: 'bg-yellow-500 hover:bg-yellow-400' },
      { id: 'ladder', iconName: 'mdi:ladder', colorClass: 'bg-gray-600 hover:bg-gray-500' },
    ],
  },
  {
    id: 'toolsAndPrograms',
    technologies: [
      { id: 'eagle', iconName: 'mdi:alpha-e', colorClass: 'bg-red-600 hover:bg-red-500' },
      { id: 'inventor', iconName: 'mdi:alpha-i-box', colorClass: 'bg-orange-400 hover:bg-orange-300' },
      { id: 'cubemx', iconName: 'mdi:cube-outline', colorClass: 'bg-blue-500 hover:bg-blue-400' },
      { id: 'git', iconName: 'mdi:git', colorClass: 'bg-orange-500 hover:bg-orange-400' },
      { id: 'linuxcli', iconName: 'mdi:console', colorClass: 'bg-gray-800 hover:bg-gray-700' },
    ],
  },
  {
    id: 'frameworksAndPlatforms',
    technologies: [
      { id: 'stm32', iconName: 'stmicroelectronics', colorClass: 'bg-blue-700 hover:bg-blue-600' },
      { id: 'arduino', iconName: 'arduino', colorClass: 'bg-teal-500 hover:bg-teal-400' },
      { id: 'rpi', iconName: 'raspberry-pi', colorClass: 'bg-red-700 hover:bg-red-600' },
      { id: 'rpipico', iconName: 'raspberry-pi', colorClass: 'bg-pink-600 hover:bg-pink-500' },
    ],
  },
];

// Function to get skills with translated content
export function getTranslatedSkills(
  lang: LanguageCode | undefined
): Array<TranslatedSkill> {
  const currentLang = lang ?? defaultLanguage;

  return skillsList.map((skillCategory) => {
    // 1. Traduce el título de la categoría (como antes)
    const categoryTranslations =
      ui[currentLang]?.skillsContent?.[skillCategory.id as keyof typeof ui[typeof currentLang]['skillsContent']] ??
      ui[defaultLanguage].skillsContent[skillCategory.id as keyof typeof ui[typeof defaultLanguage]['skillsContent']];

    // 2. Mapea y traduce cada tecnología dentro de la categoría
    const translatedTechnologies = skillCategory.technologies.map((tech) => {
      // Busca la traducción del nombre de la tecnología
      const techName =
        ui[currentLang]?.technologiesContent?.[tech.id as keyof typeof ui[typeof currentLang]['technologiesContent']] ??
        ui[defaultLanguage].technologiesContent[tech.id as keyof typeof ui[typeof defaultLanguage]['technologiesContent']] ??
        tech.id; // Fallback al id si no se encuentra la traducción

      return {
        ...tech, // Mantiene id, iconName, colorClass
        name: techName, // Añade el nombre traducido
      };
    });

    // 3. Devuelve el objeto de la categoría completamente traducido
    return {
      ...skillCategory,
      title: categoryTranslations.title,
      technologies: translatedTechnologies,
    };
  });
}
