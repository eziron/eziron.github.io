// src/features/media/service.ts
import { ui, defaultLanguage, type LanguageCode } from '@/i18n/ui';
import type { MediaItemData, TranslatedMediaItem } from './type';

// Importación de tus imágenes desde src/assets/media/
import coelemuJapon2018 from '@/assets/media/coelemuJapon2018.webp';
import noticiaMoneda from '@/assets/media/noticiaMoneda.webp';
import reconocimientoNacionalUBB2023 from '@/assets/media/reconocimientoNacionalUBB2023.webp';
import participacionNacionalUBB2023 from '@/assets/media/participacionNacionalUBB2023.webp';
import exitosMundialUBB2023 from '@/assets/media/exitosMundialUBB2023.webp';
import relatoExperienciaUBB2024 from '@/assets/media/relatoExperienciaUBB2024.webp';
import tvuRobotracer2025 from '@/assets/media/tvuRobotracer2025.webp';
import grubbJapon2025 from '@/assets/media/grubbJapon2025.webp';
import noticiaPerfilUDEC from '@/assets/media/noticiaPerfilUDEC.webp';

const mediaListUnsorted: Array<MediaItemData> = [
  {
    id: 'perfilUDEC2025',
    mediaOutlet: 'Periodismo UDEC - Tiempo Real',
    date: '2025-03-28',
    imageUrl: noticiaPerfilUDEC,
    url: 'https://tiemporeal.periodismoudec.cl/2025/03/28/rodrigo-fuentes-entre-cables-ambiciones-y-suenos/',
  },
  {
    id: 'grubbJapon2025',
    mediaOutlet: 'Facultad de Ingeniería UBB (Instagram)',
    date: '2025-03-13',
    imageUrl: grubbJapon2025,
    url: 'https://www.instagram.com/p/DHJRuMHR0DY',
  },
  {
    id: 'tvuRobotracer2025',
    mediaOutlet: 'TVU',
    date: '2025-01-23',
    imageUrl: tvuRobotracer2025,
    url: 'https://www.tvu.cl/programas/modo-verano/2025/01/23/estudiantes-de-la-ubb-participaran-en-el-all-japan-robotracer-contest.html',
  },
  {
    id: 'relatoExperienciaUBB2024',
    mediaOutlet: 'Noticias UBB',
    date: '2024-10-03',
    imageUrl: relatoExperienciaUBB2024,
    url: 'https://fi.ubiobio.cl/noticia/equipo-entuercas-del-colegio-basico-san-vicente-de-talcahuano-junto-al-grupo-de-robotica-ubb-relatan-su-experiencia-en-competencias-a-nivel-nacional-e-internacional/',
  },
  {
    id: 'exitosMundialUBB2023',
    mediaOutlet: 'Noticias UBB',
    date: '2023-12-15',
    imageUrl: exitosMundialUBB2023,
    url: 'https://fi.ubiobio.cl/noticia/grupo-de-robotica-ubb-cosecha-exitos-y-se-prepara-para-lograr-cupo-en-competencia-mundial/',
  },
  {
    id: 'participacionNacionalUBB2023',
    mediaOutlet: 'Noticias UBB',
    date: '2023-01-06',
    imageUrl: participacionNacionalUBB2023,
    url: 'https://fi.ubiobio.cl/noticia/grupo-de-robotica-ubb-participa-en-dos-importantes-competencias-nacionales/',
  },
  {
    id: 'reconocimientoNacionalUBB2023',
    mediaOutlet: 'Facultad de Ingeniería UBB (Instagram)',
    date: '2023-01-06',
    imageUrl: reconocimientoNacionalUBB2023,
    url: 'https://www.instagram.com/p/CnFdPEWP3Uc/',
  },
  {
    id: 'visitaMoneda2019',
    mediaOutlet: 'Ministerio de Ciencias (Instagram)',
    date: '2019-01-03',
    imageUrl: noticiaMoneda,
    url: 'https://www.instagram.com/p/BsL4oDAhQum/',
  },
  {
    id: 'coelemuJapon2018',
    mediaOutlet: 'Bionoticias',
    date: '2018-12-01',
    imageUrl: coelemuJapon2018,
    url: 'https://bionoticias.cl/estudiantes-del-liceo-de-la-comuna-de-coelemu-viajaran-a-japon-para-participar-en-la-competencia-de-robotica-all-japan-robot-sumo-tournament/',
  },
];

export const mediaList = [...mediaListUnsorted].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export function getTranslatedMediaItems(
  lang: LanguageCode | undefined
): Array<TranslatedMediaItem> {
  const currentLang = lang || defaultLanguage;
  type MediaIdKey = keyof (typeof ui)[typeof defaultLanguage]['mediaContent'];

  return mediaList.map((item) => {
    const currentItemId = item.id as MediaIdKey;
    const itemContentSource = ui[currentLang]?.mediaContent?.[currentItemId]
      ? ui[currentLang].mediaContent
      : ui[defaultLanguage].mediaContent;

    const translations = itemContentSource[currentItemId];

    return {
      ...item,
      title: translations?.title ?? item.id,
      description: translations?.description,
    };
  });
}