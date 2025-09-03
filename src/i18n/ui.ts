export const languages: Record<'es' | 'en' , { name: string; flag: string }> = {
  es: { name: 'Español', flag: 'cl' },
  en: { name: 'English', flag: 'us' }, 
} as const;

export const defaultLanguage = 'es';

export type LanguageCode = keyof typeof languages;

export const ui = {
  es: {
    uselessButton: {
      initialTooltip: '¿Qué es esto?',
      phrases: [
        'Botón inútil',
        'En serio, no hace nada',
        '¿Estás aburrido?',
        'Sigue intentando...',
        'Tal vez en el próximo clic...',
        'Nope.',
        '¿Aún aquí?',
        'La curiosidad mató al gato',
        'Casi...',
        '¡Sigue!',
        'lja#hd%',
        'Lo vas a romper!',
        '¿Tienes mucho tiempo libre?',
        'Sal a tocar pasto',
        'Sapeee!',
        'Error 404: Gracia not found',
        'Insertar moneda para continuar',
        'undefined',
        'null',
        'Mis proyectos son más interesantes',
        'Esto no estaba en los requisitos',
        'Achievement Unlocked: Paciencia',
        'El hombre que araña...',
        'No gastes el mouse',
        'Cargando broma...',
        "¡Llegó el Lechero!",
        "Colorado, te doi media hora!!",
        "La concha de la Lora",
        "Necesito una maceta",
      ],
    },
    skillsContent: {
      technicalSkills: {
        title: 'Habilidades Técnicas',
      },
      programmingLanguages: {
        title: 'Lenguajes de Programación',
      },
      toolsAndPrograms: {
        title: 'Herramientas y Programas',
      },
      frameworksAndPlatforms: {
        title: 'Frameworks y Plataformas',
      },
    },
    technologiesContent: {
      embedded: 'Sistemas Embebidos',
      processing: 'Procesamiento Analógico/Digital',
      pcb: 'Diseño de PCBs',
      smd: 'Soldadura SMD',
      printing: 'Impresión 3D',
      plc: 'Control de PLCs',
      cplusplus: 'C/C++',
      python: 'Python',
      ladder: 'Ladder',
      eagle: 'Autodesk Eagle',
      inventor: 'Autodesk Inventor',
      cubemx: 'STM32CubeMX',
      git: 'Git',
      linuxcli: 'Linux CLI',
      stm32: 'STM32 (HAL)',
      arduino: 'Arduino',
      rpi: 'Raspberry Pi',
      rpipico: 'RPi Pico (SDK)',
    },
    site: {
      title: 'Rodrigo Fuentes | Portafolio',
      description:'Desarrollo de sistemas embebidos.',
    },
    nav: {
      home: 'Inicio',
      blog: 'Blog',
      contact: 'Contacto',
      projects: 'Proyectos',
      media: 'Medios',
    },
    footer: {
      rights: 'Todos los derechos reservados.',
    },
    homePage: {
      pageTitle: 'Rodrigo Fuentes | Ingeniero Electrónico',
      pageDescription: 'Desarrollo de sistemas embebidos.',
      heroGreeting: 'Rodrigo Fuentes',
      heroSubtitlePart: 'Desarrollador de Sistemas Embebidos',
      heroIntroduction: 'Ingeniero Electrónico especializado en el diseño de PCBs y la programación de microcontroladores. Mi experiencia en competencias de robótica me ha forjado una sólida capacidad para crear sistemas complejos desde cero y resolver problemas críticos bajo presión',
      heroViewWorkButton: 'Ver mis proyectos',
      heroContactButton: 'Contáctame',
      heroImageAlt:'Fotografía de perfil de Rodrigo Fuentes Pedreros',
      featuredProjectsTitle: 'Últimos Proyectos',
      projectCardViewProject: 'Ver proyecto',
      projectCardViewCode: 'Ver código',
      viewAllProjectsButton: 'Ver todos mis proyectos',
      imageNotAvailable: 'Imagen no disponible por ahora',
      mySkillsTitle: 'Skills',
      contactTitle: 'Contactame',
    },
    blogPage: {
      pageTitle: 'Mi Blog Técnico',
      title: 'Mi Blog Técnico',
      comingSoon:'Los artículos del blog aparecerán aquí pronto. ¡Vuelve más tarde!',
      heroImageAlt: 'Imagen de portada para el artículo: ',
      publishedOn: 'Publicado el: ',
      readMore: 'Leer más',
      readingTimeSuffix: 'min de lectura',
      searchPlaceholder: 'Buscar artículos...',
      filterByTagButtonLabel: 'Filtrar por etiqueta',
      noTagFound: 'No se encontraron etiquetas.',
      selectTagCommandPlaceholder: 'Buscar una etiqueta...',
      allTagsLabel: 'Todas las etiquetas',
      noPostsFound: 'No se encontraron artículos.',
    },
    blogPost: {
      publishedOn: 'Publicado el: ',
      updatedOn: 'Actualizado el: ',
      heroImageAlt: 'Imagen de portada para el artículo: ',
      backToList: 'Volver a la lista de artículos',
      readingTimeSuffix: 'min de lectura',
      relatedPostsTitle: 'También te recomiendo:',
      readMore: 'Leer más',
      editOnGithub: 'Proponer una modificación en GitHub',
    },
    toc: {
      title: 'Tabla de Contenido',
    },
    mediaContent: {
      perfilUDEC2025: {
        title: 'Rodrigo Fuentes: entre cables, ambiciones y sueños',
        description: 'Perfil personal sobre mi trayectoria, desafíos y pasión por la robótica desde la niñez hasta los logros universitarios.',
      },
      grubbJapon2025: {
        title: 'De Chile a Japón: GRUBB en competición internacional',
        description: 'Celebración de la participación del Grupo de Robótica UBB representando al país en la competencia "All Japan Micromouse Contest" en Tokio.',
      },
      tvuRobotracer2025: {
        title: 'Estudiantes UBB participarán en el "All Japan Robotracer Contest"',
        description: 'Anuncio y entrevista sobre la clasificación del Grupo de Robótica UBB a la competencia "All Japan Robotracer Contest" en Tokio.',
      },
      relatoExperienciaUBB2024: {
        title: 'Relato de experiencia en competencias nacionales e internacionales',
        description: 'El Grupo de Robótica UBB y el equipo escolar "Entuercas" relatan sus experiencias en competencias de robótica.',
      },
      exitosMundialUBB2023: {
        title: 'Grupo de Robótica UBB cosecha éxitos y se prepara para mundial',
        description: 'Crónica de los éxitos del Grupo de Robótica UBB y su preparación para clasificar a la competencia mundial en Japón.',
      },
      participacionNacionalUBB2023: {
        title: 'Grupo de Robótica UBB participa en dos importantes competencias',
        description: 'Noticia sobre la participación del Grupo de Robótica de la UBB en el Beauchef Robotics Challenge y el All Chile Robot Contest.',
      },
      reconocimientoNacionalUBB2023: {
        title: 'Reconocimiento por desempeño en competencias nacionales',
        description: 'Felicitación al Grupo de Robótica UBB por su excelente desempeño en dos competencias nacionales.',
      },
      visitaMoneda2019: {
        title: 'Visita de ganadores de robótica a La Moneda',
        description: 'Publicación sobre la visita de estudiantes ganadores de torneos de robótica a La Moneda para reunirse con el Ministro de Ciencias.',
      },
      coelemuJapon2018: {
        title: 'Estudiantes de Coelemu viajan a Japón para competencia de robótica',
        description: 'Artículo sobre el viaje de estudiantes de Coelemu a Japón para competir en el "All Japan Robot-Sumo Tournament".',
      },
    },
    mediaPage: {
      title: 'Presencia en Medios',
      metaTitle: 'Medios | Portafolio de Rodrigo Fuentes',
      metaDescription: 'Recopilación de noticias y publicaciones sobre mis proyectos y logros.',
      noMedia: 'Aún no hay publicaciones en medios para mostrar.',
      noMediaDescription: 'Vuelve más tarde para ver las actualizaciones.',
    },
    notFoundPage: {
      pageTitle: 'Página No Encontrada',
      title: '¡Ups! Página No Encontrada',
      message:
        'Lo sentimos, la página que buscas no parece existir. Revisa la URL o vuelve a la página de inicio.',
      homeLink: 'Volver al Inicio',
    },
    projectDetailPage: {
        backToProjects: 'Volver a Proyectos',
        categoryLabel: 'Categoría:',
        dateLabel: 'Fecha:',
        aboutTitle: 'Sobre este proyecto',
        keyFeaturesTitle: 'Características Clave',
        galleryTitle: 'Galería',
        challengesTitle: 'Desafíos',
        learningsTitle: 'Aprendizajes',
        visitProjectButton: 'Visitar Proyecto',
        viewCodeButton: 'Ver Código',
    },
    projectsPage: {
        title: 'Mis Proyectos',
        metaTitle: 'Proyectos | Portafolio de Rodrigo Fuentes',
        metaDescription: 'Descubre los proyectos de hardware y software desarrollados por Rodrigo Fuentes.',
        noProjects: 'No hay proyectos para mostrar por el momento.',
        noProjectsDescription:'Estoy preparando mis proyectos para mostrarlos aquí. ¡Vuelve pronto!',
    },
    experiencePage: {
      title: 'Mi Trayectoria',
      websiteButton: 'Sitio Web',
      linkedinButton: 'LinkedIn',
    },
  },
  en: {
    uselessButton: {
      initialTooltip: 'What is this?',
      phrases: [
        'Useless Button',
        'Seriously, it does nothing',
        'Are you bored?',
        'Keep trying...',
        'Maybe on the next click...',
        'Nope.',
        'Still here?',
        'Curiosity killed the cat',
        'Almost...',
        'Keep going!',
        'lja#hd%',
        "You're going to break it!",
        'Got a lot of free time?',
        'Go touch grass',
        'Gotcha!',
        'Error 404: Humor not found',
        'Insert coin to continue',
        'undefined',
        'null',
        'My projects are more interesting',
        "This wasn't in the requirements",
        'Achievement Unlocked: Patience',
        'My spidey-sense is tingling...',
        "Don't wear out your mouse",
        'Loading joke...',
        "It's alive!",
        'Just one more click, I promise.',
        'Okay, you win.',
        'I need a flowerpot.',
      ],
    },
    skillsContent: {
      technicalSkills: {
        title: 'Technical Skills',
      },
      programmingLanguages: {
        title: 'Programming Languages',
      },
      toolsAndPrograms: {
        title: 'Tools and Programs',
      },
      frameworksAndPlatforms: {
        title: 'Frameworks and Platforms',
      },
    },
    technologiesContent: {
      embedded: 'Embedded Systems',
      processing: 'Analog/Digital Processing',
      pcb: 'PCB Design',
      smd: 'SMD Soldering',
      printing: '3D Printing',
      plc: 'PLC Control',
      cplusplus: 'C/C++',
      python: 'Python',
      ladder: 'Ladder',
      eagle: 'Autodesk Eagle',
      inventor: 'Autodesk Inventor',
      cubemx: 'STM32CubeMX',
      git: 'Git',
      linuxcli: 'Linux CLI',
      stm32: 'STM32 (HAL)',
      arduino: 'Arduino',
      rpi: 'Raspberry Pi',
      rpipico: 'RPi Pico (SDK)',
    },
    site: {
      title: 'Rodrigo Fuentes | Portfolio',
      description: 'Embedded systems development.',
    },
    nav: {
      home: 'Home',
      blog: 'Blog',
      contact: 'Contact',
      projects: 'Projects',
      media: 'Media',
    },
    footer: {
      rights: 'All rights reserved.',
    },
    homePage: {
      pageTitle: 'Rodrigo Fuentes | Electronics Engineer',
      pageDescription: 'Embedded systems development.',
      heroGreeting: 'Rodrigo Fuentes',
      heroSubtitlePart: 'Embedded Systems Developer',
      heroIntroduction:
        'Electronics Engineer specializing in PCB design and microcontroller programming. My experience in robotics competitions has forged in me a solid ability to create complex systems from scratch and solve critical problems under pressure.',
      heroViewWorkButton: 'View my projects',
      heroContactButton: 'Contact me',
      heroImageAlt: 'Profile picture of Rodrigo Fuentes Pedreros',
      featuredProjectsTitle: 'Latest Projects',
      projectCardViewProject: 'View project',
      projectCardViewCode: 'View code',
      viewAllProjectsButton: 'View all my projects',
      imageNotAvailable: 'Image not available for now',
      mySkillsTitle: 'Skills',
      contactTitle: 'Contact me',
    },
    blogPage: {
      pageTitle: 'My Technical Blog',
      title: 'My Technical Blog',
      comingSoon: 'Blog articles will appear here soon. Check back later!',
      heroImageAlt: 'Cover image for the article: ',
      publishedOn: 'Published on: ',
      readMore: 'Read more',
      readingTimeSuffix: 'min read',
      searchPlaceholder: 'Search articles...',
      filterByTagButtonLabel: 'Filter by tag',
      noTagFound: 'No tags found.',
      selectTagCommandPlaceholder: 'Search for a tag...',
      allTagsLabel: 'All tags',
      noPostsFound: 'No articles found.',
    },
    blogPost: {
      publishedOn: 'Published on: ',
      updatedOn: 'Updated on: ',
      heroImageAlt: 'Cover image for the article: ',
      backToList: 'Back to article list',
      readingTimeSuffix: 'min read',
      relatedPostsTitle: 'You might also like:',
      readMore: 'Read more',
      editOnGithub: 'Suggest a change on GitHub',
    },
    toc: {
      title: 'Table of Contents',
    },
    mediaContent: {
      perfilUDEC2025: {
        title: 'Rodrigo Fuentes: Between Wires, Ambitions, and Dreams',
        description:
          'A personal profile on my journey, challenges, and passion for robotics from childhood to university achievements.',
      },
      grubbJapon2025: {
        title: 'From Chile to Japan: GRUBB in International Competition',
        description:
          'Celebrating the participation of the UBB Robotics Group, representing the country in the "All Japan Micromouse Contest" in Tokyo.',
      },
      tvuRobotracer2025: {
        title: 'UBB Students to Participate in the "All Japan Robotracer Contest"',
        description:
          'Announcement and interview about the UBB Robotics Group qualifying for the "All Japan Robotracer Contest" in Tokyo.',
      },
      relatoExperienciaUBB2024: {
        title: 'Account of Experience in National and International Competitions',
        description:
          'The UBB Robotics Group and the school team "Entuercas" share their experiences in robotics competitions.',
      },
      exitosMundialUBB2023: {
        title: 'UBB Robotics Group Reaps Success and Prepares for World Championship',
        description:
          'A chronicle of the UBB Robotics Group\'s successes and their preparation to qualify for the world competition in Japan.',
      },
      participacionNacionalUBB2023: {
        title: 'UBB Robotics Group Participates in Two Major Competitions',
        description:
          'News about the UBB Robotics Group\'s participation in the Beauchef Robotics Challenge and the All Chile Robot Contest.',
      },
      reconocimientoNacionalUBB2023: {
        title: 'Recognition for Performance in National Competitions',
        description:
          'Congratulations to the UBB Robotics Group for their excellent performance in two national competitions.',
      },
      visitaMoneda2019: {
        title: 'Robotics Winners Visit La Moneda Palace',
        description:
          'Publication about the visit of student robotics tournament winners to La Moneda to meet with the Minister of Science.',
      },
      coelemuJapon2018: {
        title: 'Students from Coelemu Travel to Japan for Robotics Competition',
        description:
          'Article about students from Coelemu traveling to Japan to compete in the "All Japan Robot-Sumo Tournament".',
      },
    },
    mediaPage: {
      title: 'Media Presence',
      metaTitle: 'Media | Rodrigo Fuentes Portfolio',
      metaDescription: 'A collection of news and publications about my projects and achievements.',
      noMedia: 'No media publications to show yet.',
      noMediaDescription: 'Check back later for updates.',
    },
    notFoundPage: {
      pageTitle: 'Page Not Found',
      title: 'Oops! Page Not Found',
      message:
        "Sorry, the page you're looking for doesn't seem to exist. Check the URL or go back to the homepage.",
      homeLink: 'Back to Home',
    },
    projectDetailPage: {
      backToProjects: 'Back to Projects',
      categoryLabel: 'Category:',
      dateLabel: 'Date:',
      aboutTitle: 'About this project',
      keyFeaturesTitle: 'Key Features',
      galleryTitle: 'Gallery',
      challengesTitle: 'Challenges',
      learningsTitle: 'Learnings',
      visitProjectButton: 'Visit Project',
      viewCodeButton: 'View Code',
    },
    projectsPage: {
      title: 'My Projects',
      metaTitle: 'Projects | Rodrigo Fuentes Portfolio',
      metaDescription: 'Discover the hardware and software projects developed by Rodrigo Fuentes.',
      noProjects: 'No projects to show at the moment.',
      noProjectsDescription: "I'm preparing my projects to display here. Come back soon!",
    },
    experiencePage: {
      title: 'Professional Experience',
      websiteButton: 'Website',
      linkedinButton: 'LinkedIn',
    },
  },
} as const;

export const getLanguageName = (lang: LanguageCode) => languages[lang];

export type UISchema = typeof ui;
export type FeatureType = keyof UISchema[typeof defaultLanguage];

export function useTranslations<F extends FeatureType>(
  lang: LanguageCode | undefined,
  feature: F
) {
  const currentLanguage = lang || defaultLanguage;

  // Get the available keys for this feature from the default language
  type AvailableKeys = keyof UISchema[typeof defaultLanguage][F];

  return function t(key: AvailableKeys): string {
    // Safely access the translation, falling back to default language if necessary
    const featureTranslations = ui[currentLanguage]?.[feature];
    if (featureTranslations && key in featureTranslations) {
      return featureTranslations[
        key as keyof typeof featureTranslations
      ] as string;
    }

    // Fallback to default language
    return ui[defaultLanguage][feature][
      key as keyof (typeof ui)[typeof defaultLanguage][F]
    ] as string;
  };
}
