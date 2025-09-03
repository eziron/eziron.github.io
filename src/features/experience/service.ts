import { defaultLanguage, type LanguageCode } from '@/i18n/ui';
import type { ExperienceData, TranslatedExperience } from './type';

const experienceJsons = import.meta.glob('/src/features/experience/content/**/*.json', { eager: true });
const allLogos = import.meta.glob('/src/features/experience/content/**/*.webp', { eager: true });

function formatExperienceDate(startDate: Date, endDate: Date | null, isCurrent: boolean, lang: LanguageCode): string {
  const options: Intl.DateTimeFormatOptions = { month: 'short', year: 'numeric' };
  const locale = lang === 'es' ? 'es-CL' : 'en-US';

  const startStr = new Intl.DateTimeFormat(locale, options).format(startDate);
  
  if (isCurrent) {
    const present = lang === 'es' ? 'Presente' : 'Present';
    return `${startStr} - ${present}`;
  }

  if (!endDate) {
    return startStr;
  }

  const endStr = new Intl.DateTimeFormat(locale, options).format(endDate);
  
  return `${startStr} - ${endStr}`;
}

async function loadAllExperiences(): Promise<ExperienceData[]> {
  const experiences: ExperienceData[] = [];
  for (const path in experienceJsons) {
    const module = experienceJsons[path] as any;
    const jsonData = module.default;
    
    const dirName = path.substring(path.indexOf('content/') + 8, path.lastIndexOf('/'));

    const experience: ExperienceData = {
      id: jsonData.id,
      slug: jsonData.slug,
      dirName: dirName,
      startDate: jsonData.startDate,
      endDate: jsonData.endDate,
      isCurrent: jsonData.isCurrent,
      companyUrl: jsonData.companyUrl,
      linkedinUrl: jsonData.linkedinUrl,
      email: jsonData.email,
      isFeatured: jsonData.isFeatured ?? false,
    };
    
    const logoPath = `/src/features/experience/content/${dirName}/main.webp`;
    if (allLogos[logoPath]) {
      experience.imageUrl = (allLogos[logoPath] as any).default;
    }

    experiences.push(experience);
  }
  return experiences;
}

function translateExperience(experience: ExperienceData, lang: LanguageCode): TranslatedExperience {
  const jsonPath = `/src/features/experience/content/${experience.dirName}/experience.json`;
  const module = experienceJsons[jsonPath] as any;
  const jsonData = module.default;
  const langContent = jsonData[lang] ?? jsonData[defaultLanguage];

  const startDate = new Date(experience.startDate);
  const endDate = experience.endDate ? new Date(experience.endDate) : null;
  
  return {
    ...experience,
    title: langContent.title,
    companyName: langContent.companyName,
    imageAltText: `Logo de ${langContent.companyName}`,
    dateText: formatExperienceDate(startDate, endDate, experience.isCurrent, lang),
    // Campos para futuro
    detailedDescription: langContent.detailedDescription,
    keyAchievements: langContent.keyAchievements,
  };
}

export async function getTranslatedExperiences(lang: LanguageCode): Promise<TranslatedExperience[]> {
  const allExperiences = await loadAllExperiences();
  
  const featuredExperiences = allExperiences.filter(exp => exp.isFeatured);
  
  const sortedExperiences = [...featuredExperiences].sort((a, b) => {
    if (a.isCurrent && !b.isCurrent) return -1;
    if (!a.isCurrent && b.isCurrent) return 1;
    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
  });

  return sortedExperiences.map(e => translateExperience(e, lang));
}

// Funciones preparadas para el futuro
export async function getAllExperiencesForStaticPaths(): Promise<ExperienceData[]> {
    return await loadAllExperiences();
}

export async function getTranslatedExperienceBySlug(slug: string, lang: LanguageCode): Promise<TranslatedExperience | undefined> {
  const allExperiences = await loadAllExperiences();
  const experience = allExperiences.find(p => p.slug === slug);
  return experience ? translateExperience(experience, lang) : undefined;
}