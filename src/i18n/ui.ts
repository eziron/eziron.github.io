export const languages: Record<'es' , { name: string; flag: string }> = {
  es: { name: 'Español', flag: 'cl' },
  //en: { name: 'English', flag: 'us' }, | 'en'
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
      description:
        'Portafolio de Rodrigo Fuentes Pedreros, Ingeniero de Ejecución en Electrónica especializado en el desarrollo de sistemas embebidos y robótica.',
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
      pageTitle: 'Rodrigo Fuentes | Ingeniero Electrónico y Desarrollador de Sistemas Embebidos',
      pageDescription:
        'Bienvenido al portafolio de Rodrigo Fuentes, un Ingeniero Electrónico apasionado por la robótica, el diseño de PCBs y la programación de microcontroladores.',
      heroGreeting: 'Rodrigo Fuentes',
      heroSubtitlePart: 'Desarrollador de Sistemas Embebidos',
      heroIntroduction: 'Ingeniero Electrónico especializado en robótica, diseño de PCBs y programación de microcontroladores. Mi experiencia en competencias me ha dado una sólida capacidad para el diseño y creación de robots desde cero y la resolución de problemas bajo presión.',
      heroViewWorkButton: 'Ver mis proyectos',
      heroContactButton: 'Contáctame',
      heroImageAlt:
        'Fotografía de perfil de Rodrigo Fuentes Pedreros',
      featuredProjectsTitle: 'Últimos Proyectos',

      projectCardViewProject: 'Ver proyecto',
      projectCardViewCode: 'Ver código',
      imageNotAvailable: 'Imagen no disponible por ahora',
      mySkillsTitle: 'Skills',
      mySkillsDescription:
        'Estas son las tecnologías y herramientas que utilizo para dar vida a mis proyectos, desde el diseño de hardware hasta la programación de bajo nivel.',
      contactTitle: 'Contactame',
    },
    blogPage: {
      pageTitle: 'Mi Blog Técnico',
      pageDescription:
        'Artículos y reflexiones sobre sistemas embebidos, robótica, diseño electrónico y nuevas tecnologías.',
      title: 'Mi Blog Técnico',
      description:
        'Artículos y reflexiones sobre sistemas embebidos, robótica, diseño electrónico y nuevas tecnologías.',
      comingSoon:
        'Los artículos del blog aparecerán aquí pronto. ¡Vuelve más tarde!',
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
        noProjectsDescription:
          'Estoy preparando mis proyectos para mostrarlos aquí. ¡Vuelve pronto!',
    }, 

    projectsContent: {
      freelanceBobinadora2025: {
        title: 'Controlador para Bobinadora de Filamento de Cobre',
        description: 'Desarrollo de hardware y firmware a medida para una máquina industrial, incluyendo un algoritmo de control trapezoidal y una librería no bloqueante.',
        imageAltText: 'PCB del controlador para la bobinadora de cobre',
        categoryText: 'Desarrollo Freelance',
        dateText: 'Abril 2025',
        detailedDescription:
          'Este proyecto consistió en el desarrollo de un controlador a medida para una máquina bobinadora de filamento de cobre. El sistema requería el control sincronizado de dos motores paso a paso, la lectura de un odómetro para medir la longitud y la visualización de datos en un display de 7 segmentos. El principal desafío fue que el desarrollo se realizó completamente en remoto, sin acceso físico a la máquina, lo que exigió un robusto flujo de trabajo de pruebas y compilación cruzada. Para ello, implementé un sistema con WSL y enlaces simbólicos que me permitía desarrollar y validar el código en un microcontrolador local, para luego compilarlo para el hardware final del cliente.',
        keyFeatures: {
          algoritmoTrapezoidal: {
            title: 'Control de Movimiento Trapezoidal',
            description: 'Programé desde cero un algoritmo para rampas de aceleración y desaceleración suaves y sincronizadas para los motores paso a paso, utilizando interrupciones de timer para un control preciso.',
          },
          libreriaNoBloqueante: {
            title: 'Librería de Display No Bloqueante',
            description: 'Desarrollé una librería personalizada para el display TM1637 usando interrupciones de timer, evitando el bloqueo del bucle principal del firmware, a diferencia de las librerías existentes.',
          },
          desarrolloRemotoAvanzado: {
            title: 'Flujo de Desarrollo y Testeo Remoto',
            description: 'Implementé un sistema de compilación con WSL y enlaces simbólicos para testear en hardware local y desplegar en un microcontrolador diferente de forma remota, validando señales con un analizador lógico.',
          },
        },
        galleryImages: {
          gal1: { alt: 'Esquemático del controlador de la bobinadora', caption: 'Diseño en Autodesk Eagle' },
          gal2: { alt: 'Pruebas del firmware con analizador lógico', caption: 'Validación de señales de control' },
          gal3: { alt: 'PCB final ensamblada para la bobinadora', caption: 'Placa fabricada por JLCPCB' },
        },
        challenges:
          'El mayor reto fue desarrollar y depurar el firmware sin tener acceso físico al hardware final. Esto me obligó a crear un entorno de pruebas muy fiable y un flujo de compilación cruzada para garantizar la compatibilidad y el correcto funcionamiento de forma remota.',
        learnings:
          'Aprendí a desarrollar librerías de bajo nivel no bloqueantes, a implementar flujos de trabajo de desarrollo remoto complejos y a gestionar las iteraciones con un cliente para afinar un producto a distancia.',
      },
      robotracerAllJapan2025: {
        title: 'Mundial de Robotracer en Japón (2025)',
        description: 'Participación en el All Japan Robotracer Contest, una experiencia marcada por la gestión de crisis, reparaciones de emergencia y lecciones críticas sobre ingeniería de fallos.',
        imageAltText: 'El robot seguidor de línea v7 en la pista del mundial de Japón',
        categoryText: 'Robótica Competitiva',
        dateText: 'Febrero 2025',
        detailedDescription:
          'Nuestra participación en el mundial de Japón fue una montaña rusa de desafíos. El primer día, la turbina de succión explotó durante una prueba, cortando los cables del motor. Esto nos obligó a una búsqueda de emergencia en Akihabara para encontrar un repuesto. Tras repararlo, un compañero recibió una "lámina de silicona" para las ruedas, un material con una tracción muy superior. La implementamos sin prever las consecuencias: la adherencia extrema reveló una falla de diseño latente en los soportes de PLA de los rodamientos, que se habían deformado con el uso. Esto causó una desalineación crítica que trababa las ruedas en las curvas de la pista oficial, impidiéndonos completar una vuelta válida. Fue una dura lección sobre cómo en la alta competición, cada detalle y material cuenta.',
        keyFeatures: {
          integracionEncoders: {
            title: 'Integración de Encoders para Control de Velocidad',
            description: 'Se implementaron encoders en las ruedas para establecer un control de velocidad base en m/s y registrar con precisión la distancia recorrida por el robot.',
          },
          gestionCrisis: {
            title: 'Gestión de Crisis y Reparación de Emergencia',
            description: 'Tras la explosión de la turbina, se localizó y adaptó un motor de repuesto de un dron en menos de 24 horas, permitiendo al robot estar operativo para la competencia.',
          },
          aprendizajeCritico: {
            title: 'Análisis de Fallos en Escenario Mundial',
            description: 'Una invaluable lección sobre cómo un cambio de componente (ruedas de alta tracción) puede revelar fallas de diseño latentes bajo condiciones extremas de operación.',
          },
        },
        galleryImages: {
          gal1: { alt: 'El robot seguidor de línea en la pista de pruebas de Japón', caption: 'Puesta a punto antes de la competencia' },
          gal2: { alt: 'Buscando repuestos de motor en Akihabara', caption: 'La reparación de emergencia' },
          gal3: { alt: 'La lámina de silicona aplicada a las ruedas del robot', caption: 'El componente que cambió todo' },
        },
        challenges:
          'El principal desafío fue la cadena de fallos catastróficos: la explosión de la turbina y la posterior falla mecánica inducida por el cambio a ruedas de mayor adherencia, todo bajo la presión de una competencia mundial.',
        learnings:
          'La importancia crítica de las tolerancias mecánicas, la selección de materiales (PLA vs. otros más resistentes) y la necesidad de probar el sistema en condiciones idénticas a las de la competencia final.',
      },
      freelanceMesas2025: {
        title: 'Controlador para Mesas Flotantes Motorizadas',
        description: 'Diseño y programación de una placa de control robusta para un sistema industrial de mesas motorizadas de 800 kg en la Torre Costanera, con aislamiento galvánico completo.',
        imageAltText: 'Placa controladora con relés y optoacopladores para las mesas',
        categoryText: 'Desarrollo Freelance',
        dateText: 'Enero 2025',
        detailedDescription:
          'Para un cowork en la Torre Costanera, se me encargó el diseño y la programación de una placa controladora para un sistema de dos mesones motorizados de 800 kg cada uno. Mi trabajo abarcó todo el ciclo de desarrollo: diseñé el esquemático y la PCB para controlar 6 motores, leer 12 sensores y operar 6 servos de seguridad. La placa fue diseñada con un enfoque en la robustez y la seguridad, implementando aislamiento galvánico completo mediante optoacopladores y fuentes de poder separadas para la lógica y la potencia. Gestioné la fabricación con servicios de PCBA y realicé el montaje final en su gabinete y la puesta en marcha en terreno.',
        keyFeatures: {
          disenoRobusto: {
            title: 'Diseño de Hardware Robusto para Entorno Industrial',
            description: 'La placa cuenta con 12 salidas de relé, 12 entradas para sensores NPN y 6 salidas PWM para servos, diseñada para soportar las exigencias de un entorno industrial.',
          },
          aislamientoGalvanico: {
            title: 'Aislamiento Galvánico Completo',
            description: 'Todas las señales fueron optoacopladas y se utilizaron fuentes de poder separadas para proteger el microcontrolador de interferencias y descargas eléctricas.',
          },
          gestionProyectoIntegral: {
            title: 'Gestión Integral del Proyecto',
            description: 'Desde el diseño inicial y la programación del firmware en C++ (STM32 HAL), hasta la gestión de fabricación, montaje y puesta en marcha en las instalaciones del cliente.',
          },
        },
        galleryImages: {
          gal1: { alt: 'Vista 3D del diseño de la PCB en Autodesk Eagle', caption: 'Diseño del controlador' },
          gal2: { alt: 'Controlador montado en su gabinete industrial', caption: 'Montaje y cableado final' },
          gal3: { alt: 'Mesas motorizadas funcionando en el cowork', caption: 'Sistema en operación' },
        },
        challenges:
          'El reto principal fue diseñar un sistema electrónico extremadamente fiable y seguro, capaz de manejar cargas inductivas pesadas y operar en un entorno con potencial de ruido eléctrico, garantizando la protección tanto del sistema como de los usuarios.',
        learnings:
          'Adquirí una valiosa experiencia en el diseño de electrónica de potencia para aplicaciones industriales, la implementación de medidas de seguridad como el aislamiento galvánico y la gestión de un proyecto freelance de principio a fin.',
      },
      robotcontest2025: {
        title: '2º Lugar en All Chile Robot Contest (2025)',
        description: 'Obtuvimos el segundo lugar en una competencia de alto nivel con competidores de México. El robot fue refinado cambiando a motores coreless para mejorar la agilidad y el tiempo de respuesta.',
        imageAltText: 'El seguidor de línea v6 compitiendo en la Robot Contest 2025',
        categoryText: 'Robótica Competitiva',
        dateText: 'Enero 2025',
        detailedDescription:
          'Para la edición 2024 de la Robot Contest (celebrada en enero de 2025), enfrentamos un nuevo nivel de competencia con la llegada de equipos de México. Para estar a la altura, realizamos una optimización clave en nuestro robot: reemplazamos los 4 motores JSumo por 2 motores coreless. Este cambio aligeró significativamente el robot y, lo más importante, mejoró drásticamente sus tiempos de respuesta y agilidad en la pista. Aunque yo no pude participar directamente por una regla del evento, mis compañeros utilizaron mi robot, demostrando la solidez del diseño y asegurando un meritorio segundo lugar, consolidando nuestra posición en la escena nacional.',
        keyFeatures: {
          segundoLugarInternacional: {
            title: 'Segundo Lugar en Competencia Internacional',
            description: 'Logramos el podio en una de las competencias más reñidas del país, validando nuestro diseño contra equipos de alto nivel de México.',
          },
          transicionMotoresCoreless: {
            title: 'Transición a Motores Coreless',
            description: 'El cambio a motores coreless redujo el peso y la inercia del robot, permitiendo una respuesta más rápida y un control más preciso en curvas cerradas.',
          },
          mejoraTiempoRespuesta: {
            title: 'Optimización de la Agilidad y Respuesta',
            description: 'El nuevo hardware, combinado con optimizaciones en el código, nos permitió mejorar los tiempos por vuelta y competir al más alto nivel.',
          },
        },
        galleryImages: {
          gal1: { alt: 'Robot con los nuevos motores coreless instalados', caption: 'Evolución del hardware' },
          gal2: { alt: 'El equipo GRUBB en el podio de la Robot Contest', caption: 'Reconocimiento al trabajo en equipo' },
          gal3: { alt: 'Análisis de telemetría del robot en la pista', caption: 'Optimizando el rendimiento' },
        },
        challenges:
          'El principal desafío fue adaptar el firmware y los parámetros del controlador PID al nuevo comportamiento dinámico del robot con motores coreless, que tienen una respuesta mucho más rápida que los motores anteriores.',
        learnings:
          'Aprendí sobre las ventajas y desafíos de los motores coreless en aplicaciones de alta velocidad y cómo la optimización del peso y la distribución de masa son cruciales para el rendimiento en seguidores de línea.',
      },
      proyectoTituloFoc2024: {
        title: 'Proyecto de Título: Controlador de Motores FOC',
        description: 'Diseño e implementación de un driver de motor FOC desde cero, cumpliendo el objetivo que me propuse al iniciar mi carrera. Defendido con nota máxima en marzo de 2025.',
        imageAltText: 'PCB del controlador de motores FOC diseñado para el proyecto de título',
        categoryText: 'Investigación y Desarrollo',
        dateText: 'Marzo 2025 (Defensa)',
        detailedDescription:
          'Este proyecto fue la culminación de un objetivo que me tracé desde mis inicios en la robótica: construir mi propio controlador de motores brushless para superar las limitaciones de los ESC comerciales. El trabajo abarcó desde la investigación profunda de la teoría del Control Orientado de Campo (FOC), hasta el diseño de una PCB de 4 capas en Autodesk Eagle, la selección de componentes de potencia y la programación del firmware en C utilizando las librerías HAL de STM32. Implementé el lazo de control completo, incluyendo las transformadas de Clarke/Park y la modulación SVM, y desarrollé un sistema de adquisición de datos para validar su rendimiento. Fue un viaje de un año que sintetizó todo mi aprendizaje, defendido exitosamente con la calificación máxima.',
        keyFeatures: {
          disenoDriverFoc: {
            title: 'Diseño de Driver FOC desde Cero',
            description: 'Desarrollo completo de un controlador de campo orientado, desde la base teórica hasta el prototipo funcional validado.',
          },
          pcb4Capas: {
            title: 'Diseño de PCB de 4 Capas para Alta Potencia',
            description: 'Creación de una PCB optimizada para manejar altas corrientes, con especial atención a la disipación térmica y la integridad de la señal.',
          },
          notaMaxima: {
            title: 'Defensa con Calificación Máxima',
            description: 'El proyecto fue reconocido con la máxima calificación, validando el rigor técnico y la calidad de la implementación.',
          },
        },
        galleryImages: {
          gal1: { alt: 'Esquemático del circuito del controlador FOC', caption: 'Diseño lógico en Eagle' },
          gal2: { alt: 'Gráficos de validación de las corrientes del motor', caption: 'Adquisición de datos con Python' },
          gal3: { alt: 'Prototipo final del controlador FOC ensamblado', caption: 'Hardware funcional' },
        },
        challenges:
          'El desafío más grande fue traducir la compleja teoría del control FOC a un firmware funcional y eficiente en un microcontrolador, gestionando la sincronización precisa de los timers, ADC y DMA para un control en tiempo real.',
        learnings:
          'Gané una maestría en el control avanzado de motores, la programación de periféricos de bajo nivel en STM32 y el ciclo de vida completo del desarrollo de un producto electrónico, desde la idea hasta la validación.',
      },
      seguidorV5Brc2024: {
        title: 'BRC 2024: Doble Primer Lugar y Dominio Técnico',
        description: 'Logramos un triple podio para GRUBB, obteniendo el doble primer lugar en las categorías Estudiante y Open, gracias a una refactorización completa del hardware y firmware del robot.',
        imageAltText: 'El robot seguidor de línea v5 con su sensor de 12 canales',
        categoryText: 'Robótica Competitiva',
        dateText: 'Octubre 2024',
        detailedDescription:
          'El 2024 fue el año de la consolidación técnica. Con la experiencia de la turbina, refactorizamos completamente el robot. Diseñé una nueva placa de control mucho más compacta y potente, migrando a un microcontrolador STM32H7 de alto rendimiento. Esto nos permitió diseñar y ensamblar nuestro propio sensor infrarrojo de 12 canales. El mayor desafío fue personal: en solo 3 días antes de la competencia, reescribí todo el firmware para migrarlo del entorno Arduino a las librerías nativas HAL de STM32, desbloqueando el verdadero potencial del hardware. El resultado fue un dominio absoluto en la BRC, logrando un triple podio para el equipo y, personalmente, el doble primer lugar.',
        keyFeatures: {
          doblePrimerLugar: {
            title: 'Doble Primer Lugar (Categorías Estudiante y Open)',
            description: 'Dominio total en la competencia, demostrando la superioridad técnica del nuevo diseño.',
          },
          migracionHal: {
            title: 'Refactorización de Firmware a STM32 HAL',
            description: 'En un esfuerzo de 3 días, migré todo el código a las librerías HAL de STM32, optimizando el rendimiento y el control de bajo nivel.',
          },
          disenoSensor12Canales: {
            title: 'Diseño de Sensor Infrarrojo de 12 Canales',
            description: 'Creamos nuestro propio sensor con más canales que los comerciales, permitiendo una lectura más precisa de la pista.',
          },
        },
        galleryImages: {
          gal1: { alt: 'La nueva PCB compacta con el microcontrolador STM32H7', caption: 'Hardware refactorizado' },
          gal2: { alt: 'El sensor infrarrojo de 12 canales diseñado a medida', caption: 'Innovación en sensórica' },
          gal3: { alt: 'El equipo GRUBB celebrando el triple podio en la BRC', caption: 'Dominio en la competencia' },
        },
        challenges:
          'El principal desafío fue la migración completa del firmware a un nuevo entorno de bajo nivel (STM32 HAL) en un tiempo extremadamente limitado (3 días), lo que requirió un profundo conocimiento del microcontrolador y una depuración intensiva.',
        learnings:
          'Esta experiencia consolidó mis habilidades en programación de sistemas embebidos de bajo nivel, diseño de sensores personalizados y gestión de proyectos de alta presión con plazos ajustados.',
      },
      robotcontestVerstappen2024: {
        title: '1er Lugar en Robot Contest con "Verstappen" y su Turbina',
        description: 'Logramos el primer lugar y fuimos el primer equipo en Chile en integrar exitosamente una turbina de succión (efecto suelo) en un robot seguidor de línea.',
        imageAltText: 'El robot "Verstappen" con su turbina de succión central',
        categoryText: 'Robótica Competitiva',
        dateText: 'Enero 2024',
        detailedDescription:
          'Este proyecto marcó un hito en la robótica de seguidores de línea en Chile. Inspirados en las técnicas usadas en Japón, fuimos el primer equipo en diseñar, implementar y hacer funcionar exitosamente una turbina de succión. El robot, apodado "Verstappen", utilizaba el efecto suelo para generar una baja presión bajo su chasis, pegándolo a la pista y permitiéndole tomar curvas a velocidades mucho mayores. Diseñé un cuerpo impreso en 3D para albergar la turbina y cuatro motores. Esta innovación nos diferenció del resto y nos llevó a ganar la segunda edición de la Robot Contest, otorgándonos la acreditación para el mundial de Japón.',
        keyFeatures: {
          primerLugarNacional: {
            title: 'Primer Lugar en All Chile Robot Contest',
            description: 'La innovación de la turbina nos dio una ventaja decisiva para ganar la competencia.',
          },
          innovacionTurbinaSuccion: {
            title: 'Pioneros en Turbina de Succión en Chile',
            description: 'Fuimos el primer equipo en implementar con éxito el efecto suelo en un seguidor de línea a nivel nacional.',
          },
          acreditacionMundial: {
            title: 'Acreditación para el Mundial de Japón',
            description: 'La victoria nos clasificó para representar a Chile en la All Japan Robotracer Contest.',
          },
        },
        galleryImages: {
          gal1: { alt: 'Diseño 3D del robot "Verstappen" mostrando la turbina', caption: 'Concepto y diseño' },
          gal2: { alt: 'El robot en la pista, demostrando el efecto suelo', caption: 'Innovación en acción' },
          gal3: { alt: 'El equipo con el trofeo de primer lugar', caption: 'Victoria en la Robot Contest' },
        },
        challenges:
          'El mayor desafío fue el diseño aerodinámico del chasis y los conductos de la turbina para maximizar el efecto suelo, además de balancear el consumo de energía adicional de la turbina sin comprometer el rendimiento de los motores de tracción.',
        learnings:
          'Aprendí los principios de la aerodinámica aplicada a la robótica (efecto suelo), y cómo una innovación disruptiva puede cambiar por completo el paradigma de una competencia.',
      },
      sumoAsuraKabuto2023: {
        title: 'Robot Mega Sumo "Asura Kabuto" (Mundial de Japón 2023)',
        description: 'Mi robot Mega Sumo más avanzado, con un chasis de aluminio 7075 fabricado con CNC y una estrategia de "tanque" para dominar en empuje en el mundial de Japón.',
        imageAltText: 'El robot "Asura Kabuto" con su chasis de aluminio CNC',
        categoryText: 'Robótica Competitiva',
        dateText: 'Diciembre 2023',
        detailedDescription:
          'Fruto de años de iteración, "Asura Kabuto" representa la culminación de mi trabajo en la categoría de sumo. Con el patrocinio de PCBWAY, pude pasar de prototipos impresos en 3D a un chasis final de aluminio 7075 de grado aeroespacial, fabricado con CNC. El robot fue diseñado como un "tanque", con una enorme cantidad de imanes de neodimio y una alta relación de reducción para maximizar la fuerza de empuje. Utilicé una ODrive para el control FOC de dos potentes motores brushless. Aunque mi estrategia de fuerza bruta me hacía casi inamovible en choques frontales, mi menor velocidad punta me dejó vulnerable a ser flanqueado, lo que finalmente causó mi derrota en la primera ronda del mundial de Japón.',
        keyFeatures: {
          chasisAluminio7075: {
            title: 'Chasis de Aluminio 7075 Fabricado con CNC',
            description: 'Un diseño robusto y preciso que pasó del prototipado en 3D a la fabricación en metal de grado aeroespacial.',
          },
          estrategiaTanque: {
            title: 'Estrategia de Combate "Tanque"',
            description: 'Diseño enfocado en maximizar la fuerza de empuje y la adherencia magnética para dominar en enfrentamientos directos.',
          },
          gestionPatrocinios: {
            title: 'Gestión de Múltiples Patrocinios',
            description: 'Financié el proyecto gracias a los patrocinios de PCBWAY y Synopsys, gestionando la fabricación de componentes a nivel internacional.',
          },
        },
        galleryImages: {
          gal1: { alt: 'Prototipo impreso en 3D del robot sumo', caption: 'Iteración y diseño' },
          gal2: { alt: 'El chasis de aluminio 7075 recién fabricado', caption: 'Fabricación CNC' },
          gal3: { alt: 'Asura Kabuto en el dohyo de la competencia en Japón', caption: 'Compitiendo en el mundial' },
        },
        challenges:
          'El principal desafío fue balancear la estrategia de "tanque" (máximo torque) con la necesidad de agilidad y velocidad. La optimización de la relación de engranajes fue un compromiso crítico que, en retrospectiva, podría haberse ajustado mejor.',
        learnings:
          'Aprendí sobre diseño para manufactura (CNC), la gestión de la electrónica de alta potencia en un espacio compacto y la importancia de una estrategia de combate balanceada en la robótica de sumo.',
      },
      seguidorStm32Brc2023: {
        title: 'Seguidor de Línea con STM32 (BRC 2023)',
        description: 'Mi primer seguidor de línea con un microcontrolador STM32 y componentes SMD. Mostró un rendimiento superior, pero fue puesto fuera de combate por una descarga electrostática (ESD) de la pista.',
        imageAltText: 'La PCB del seguidor de línea con el STM32 soldado',
        categoryText: 'Robótica Competitiva',
        dateText: 'Octubre 2023',
        detailedDescription:
          'Para la BRC 2023, decidimos evolucionar nuestro diseño de seguidor de línea, dejando atrás Arduino para adoptar un microcontrolador STM32. Este proyecto fue mi primera experiencia diseñando una PCB que integraba el MCU y los drivers de motor directamente soldados (SMD), en lugar de usar módulos. El robot, equipado con motores y ruedas de alto rendimiento de JSumo, mostró una velocidad y control muy superiores al resto. Sin embargo, en la competencia enfrentamos un problema inesperado: la pista, hecha de aluminio anodizado, generaba descargas electrostáticas que reiniciaban y finalmente quemaron mi robot y el de un compañero, una dura lección sobre la importancia de la protección contra ESD.',
        keyFeatures: {
          primeraPcbStm32: {
            title: 'Primera PCB con STM32 y Componentes SMD',
            description: 'Migración de la plataforma de Arduino a un diseño más profesional y compacto con un microcontrolador STM32 y drivers SMD.',
          },
          rendimientoSuperior: {
            title: 'Rendimiento y Control Superiores',
            description: 'Gracias al nuevo hardware y a un mejor entendimiento del algoritmo de control, el robot era notablemente más rápido que sus competidores.',
          },
          diagnosticoFalloEsd: {
            title: 'Diagnóstico de Fallo por ESD',
            description: 'Una experiencia de aprendizaje forzosa sobre la importancia de la protección contra descargas electrostáticas en entornos de competencia.',
          },
        },
        galleryImages: {
          gal1: { alt: 'Diseño de la PCB del seguidor en Autodesk Eagle', caption: 'Diseño con STM32' },
          gal2: { alt: 'El robot quemado después de la descarga electrostática', caption: 'Análisis del fallo' },
          gal3: { alt: 'El tercer robot del equipo con aislante aplicado a los sensores', caption: 'Solución de emergencia' },
        },
        challenges:
          'El principal desafío fue un factor externo imprevisto: la pista de la competencia no cumplía con el reglamento, lo que provocó fallos catastróficos por ESD. Esto nos enseñó a prepararnos para lo inesperado.',
        learnings:
          'Aprendí sobre el diseño de PCBs con componentes SMD, la migración a una plataforma de microcontroladores más potente y, de la manera más difícil, la importancia crítica de diseñar sistemas electrónicos con protección contra ESD.',
      },
      robotcontest2022: {
        title: '2º Lugar en Robot Contest (2022)',
        description: 'Obtuvimos el segundo lugar en la All Chile Robot Contest. Me uní al equipo un día antes y logramos el podio tras quemar un robot y reensamblar otro en 10 minutos.',
        imageAltText: 'El equipo de GRUBB reparando el robot seguidor de línea en la competencia',
        categoryText: 'Robótica Competitiva',
        dateText: 'Noviembre 2022',
        detailedDescription:
          'Mi participación en esta competencia no estaba planeada. Me uní al equipo de seguidor de línea de GRUBB un día antes del evento para ayudarles a poner en marcha el robot, basado en el proyecto open source Open Lamborghino. La noche anterior fue una maratón de trabajo para dejarlo funcional. Durante la competencia, enfrentamos un desastre: quemamos el robot. Con una increíble muestra de trabajo en equipo y bajo una presión extrema, logramos desarmar, reensamblar y calibrar un robot nuevo en solo 10 minutos, lo que nos permitió seguir compitiendo y finalmente asegurar el segundo lugar. Fue una lección inolvidable sobre resiliencia.',
        keyFeatures: {
          segundoLugarNacional: {
            title: 'Segundo Lugar en All Chile Robot Contest',
            description: 'Un podio logrado gracias a la rápida resolución de problemas y el trabajo en equipo.',
          },
          reparacionEmergencia: {
            title: 'Reensamblaje de Emergencia en 10 Minutos',
            description: 'Tras un fallo catastrófico, el equipo logró construir un robot funcional en un tiempo récord durante la competencia.',
          },
          trabajoBajoPresion: {
            title: 'Trabajo en Equipo Bajo Presión Extrema',
            description: 'La capacidad de colaborar eficazmente en una situación de crisis fue clave para el éxito.',
          },
        },
        galleryImages: {
          gal1: { alt: 'El robot Open Lamborghino en la pista', caption: 'Robot base de la competencia' },
          gal2: { alt: 'El equipo trabajando frenéticamente en la reparación', caption: '10 minutos para un nuevo robot' },
          gal3: { alt: 'El equipo GRUBB en el podio con el trofeo de segundo lugar', caption: 'Un resultado ganado con esfuerzo' },
        },
        challenges:
          'El mayor reto fue diagnosticar y solucionar problemas de hardware y software en un robot con el que no estaba familiarizado, culminando en la necesidad de reconstruirlo por completo en medio de la competencia.',
        learnings:
          'Aprendí la importancia de la documentación en proyectos open source, a trabajar eficazmente bajo una presión inmensa y que un equipo coordinado puede superar casi cualquier obstáculo técnico.',
      },
      battlebotBrc2022: {
        title: 'BattleBot para la BRC (2022)',
        description: 'Como parte de GRUBB, desarrollé un robot de combate que aplicaba mis conocimientos de control FOC, con una estructura mixta de aluminio y 3D, y un arma brushless.',
        imageAltText: 'El BattleBot con su arma giratoria y chasis de aluminio',
        categoryText: 'Robótica Competitiva',
        dateText: 'Octubre 2022',
        detailedDescription:
          'Para la Beauchef Robotics Challenge (BRC), participé en la categoría de combate (BattleBot). Este robot fue una evolución directa de mi prototipo experimental con FOC. Diseñé una estructura robusta que combinaba la rigidez del aluminio con la flexibilidad del diseño 3D. El sistema de tracción utilizaba dos motores brushless controlados con una ODrive para una maniobrabilidad precisa, mientras que el arma giratoria era impulsada por un potente motor brushless con un ESC. Para este robot, diseñé una nueva PCB más compacta para integrar el microcontrolador de control con la ODrive de manera más eficiente.',
        keyFeatures: {
          aplicacionFocCombate: {
            title: 'Aplicación de Control FOC en Combate',
            description: 'Se utilizó una ODrive para el control preciso de la tracción, permitiendo maniobras complejas en la arena de combate.',
          },
          estructuraMixta: {
            title: 'Estructura Mixta de Aluminio y Piezas 3D',
            description: 'Un diseño que combinaba la resistencia del metal en puntos críticos con la versatilidad de las piezas impresas en 3D.',
          },
          pcbCompacta: {
            title: 'PCB de Integración Compacta',
            description: 'Diseño de una placa personalizada para conectar el microcontrolador principal con la ODrive, optimizando el espacio interno.',
          },
        },
        galleryImages: {
          gal1: { alt: 'Diseño CAD del BattleBot en Autodesk Inventor', caption: 'Planificación y diseño' },
          gal2: { alt: 'El robot en la arena de combate de la BRC', caption: 'Compitiendo en el evento' },
          gal3: { alt: 'Detalle de la electrónica interna con la ODrive y la PCB', caption: 'Integración de sistemas' },
        },
        challenges:
          'El principal desafío fue diseñar un sistema mecánico y electrónico que pudiera soportar los violentos impactos de una batalla de robots, protegiendo los componentes críticos como la batería y el controlador.',
        learnings:
          'Aprendí sobre diseño mecánico para alta resistencia, la gestión de la energía para sistemas de alta demanda (tracción y arma) y cómo aplicar los principios de control de motores en un entorno tan caótico como el combate de robots.',
      },
      focExperimental2022: {
        title: 'Prototipo Experimental con Control FOC',
        description: 'Construí este robot puramente para investigar y dominar la tecnología de control FOC usando una ODrive 3.6, sentando las bases para futuros proyectos.',
        imageAltText: 'El robot experimental con la ODrive 3.6 visible en su chasis impreso en 3D',
        categoryText: 'Investigación y Desarrollo',
        dateText: 'Septiembre 2022',
        detailedDescription:
          'Tras mis primeras experiencias con motores brushless, me di cuenta de que necesitaba entender una forma de control más avanzada. Este proyecto, desarrollado para una actividad recreativa, fue mi campo de pruebas personal para el Control Orientado de Campo (FOC). Utilicé una ODrive 3.6, un popular controlador open source, para experimentar con el control preciso de motores brushless. Diseñé una estructura completamente modular impresa en 3D para poder intercambiar componentes fácilmente, y una PCB "shield" que facilitaba la conexión entre mi microcontrolador y la ODrive. Este robot no fue hecho para ganar, sino para aprender.',
        keyFeatures: {
          primeraImplementacionFoc: {
            title: 'Primera Implementación Práctica de FOC',
            description: 'El objetivo principal fue aprender a configurar y operar un sistema de control FOC en un entorno real.',
          },
          disenoPcbShield: {
            title: 'Diseño de PCB "Shield" de Integración',
            description: 'Creé una placa para facilitar la conexión y comunicación entre el microcontrolador principal y la ODrive.',
          },
          plataformaModular: {
            title: 'Plataforma de Pruebas Modular Impresa en 3D',
            description: 'El chasis fue diseñado para ser fácilmente modificable, permitiendo un prototipado y experimentación rápidos.',
          },
        },
        galleryImages: {
          gal1: { alt: 'El chasis modular impreso en 3D del robot', caption: 'Diseño para la experimentación' },
          gal2: { alt: 'Detalle de la ODrive 3.6 y la PCB shield conectadas', caption: 'El núcleo del control' },
          gal3: { alt: 'El robot realizando pruebas de maniobrabilidad', caption: 'Validando el control FOC' },
        },
        challenges:
          'El mayor desafío fue la curva de aprendizaje de la ODrive y los conceptos de FOC, como la calibración de los motores, el ajuste de los controladores PI y la interpretación de los datos de telemetría.',
        learnings:
          'Este proyecto fue fundamental. Me proporcionó una base práctica sólida en control FOC que luego aplicaría en casi todos mis robots de competencia posteriores, incluyendo el de sumo y el de batalla.',
      },
      hexapod2021: {
        title: 'Robot Hexápodo Autónomo',
        description: 'Desarrollo completo de un robot de 6 patas desde cero, con estructura impresa en 3D, PCB personalizada y un algoritmo de cinemática inversa en Python.',
        imageAltText: 'El robot hexápodo con sus seis patas impresas en 3D',
        categoryText: 'Proyectos Personales',
        dateText: 'Agosto 2021',
        detailedDescription:
          'En plena pandemia y motivado por mi creciente presencia en TikTok, me embarqué en mi proyecto más ambicioso hasta la fecha: un robot hexápodo. Lo desarrollé completamente desde cero. Diseñé y fabriqué toda la estructura con mi primera impresora 3D, una Ender 3 V2. El proyecto fue un gran salto en mis habilidades de diseño CAD. Poco después, obtuve mi primer patrocinio internacional con JLCPCB, lo que me permitió diseñar mi primera PCB profesional para la electrónica del robot. El "cerebro" era una Raspberry Pi, donde programé en Python un algoritmo de control con cinemática inversa para coordinar el movimiento de las 18 articulaciones del robot. El proyecto duró 8 meses y fue una increíble experiencia de integración de software y hardware.',
        keyFeatures: {
          desarrolloDesdeCero: {
            title: 'Desarrollo Integral desde Cero',
            description: 'Todo el robot, desde el diseño mecánico y electrónico hasta el software de control, fue creado desde cero.',
          },
          primerPatrocinioInternacional: {
            title: 'Primer Patrocinio Internacional (JLCPCB)',
            description: 'Gracias a mi contenido en TikTok, obtuve el patrocinio de JLCPCB, lo que me permitió fabricar PCBs de calidad profesional.',
          },
          integracionTotal: {
            title: 'Integración de Mecánica, Electrónica y Software',
            description: 'El proyecto combinó diseño 3D, diseño de PCB y programación de alto nivel (Python con cinemática inversa).',
          },
        },
        galleryImages: {
          gal1: { alt: 'Vista explosionada del diseño CAD del hexápodo', caption: 'Diseño 3D en Autodesk Inventor' },
          gal2: { alt: 'La PCB personalizada para el control de los servos', caption: 'Diseño electrónico con JLCPCB' },
          gal3: { alt: 'El robot hexápodo caminando de forma autónoma', caption: 'Cinemática inversa en acción' },
        },
        challenges:
          'El desafío más complejo fue la implementación del algoritmo de cinemática inversa para lograr un caminar estable y coordinado, además de la gestión del cableado de los 18 servomotores en un espacio reducido.',
        learnings:
          'Este proyecto me enseñó a gestionar proyectos a largo plazo, a integrar múltiples disciplinas de la ingeniería (mecánica, electrónica, software) y a programar algoritmos de control complejos.',
      },
      sumoAllJapan2018: {
        title: 'Mundial de Sumo en Japón (2018)',
        description: 'Tras la victoria nacional, representé a Chile en el ALL JAPAN ROBOT SUMO TOURNAMENT en Tokio, mi primera experiencia en la élite de la robótica de sumo.',
        imageAltText: 'Mi robot sumo en el dohyo de la competencia en Tokio',
        categoryText: 'Robótica Competitiva',
        dateText: 'Diciembre 2018',
        detailedDescription:
          'La victoria en la competencia de Valparaíso me otorgó la increíble oportunidad de viajar a Tokio para competir en el mundial de sumo robótico, organizado por Fujisoft. Para este evento, realicé varias mejoras en el robot, principalmente en los sensores y en la lógica de programación para adaptarme a las condiciones de la competencia. Aunque fui derrotado en la primera ronda, la experiencia fue invaluable. Pude ver de cerca el nivel técnico de los mejores equipos del mundo, entender sus estrategias y diseños, y me dio una perspectiva completamente nueva sobre lo que era posible en esta categoría. Fue un baño de humildad que alimentó mi ambición para los años venideros.',
        keyFeatures: {
          representacionNacional: {
            title: 'Representante de Chile en el Mundial',
            description: 'Tuve el honor de representar a mi país en la competencia de sumo robótico más prestigiosa del mundo.',
          },
          experienciaInternacional: {
            title: 'Primera Experiencia Competitiva Internacional',
            description: 'Competir contra los mejores equipos del mundo proporcionó un aprendizaje y una perspectiva invaluables.',
          },
          mejoraContinua: {
            title: 'Mejora y Adaptación del Robot',
            description: 'El robot fue actualizado con nuevos sensores y una lógica de control refinada para el desafío internacional.',
          },
        },
        galleryImages: {
          gal1: { alt: 'El robot sumo siendo inspeccionado antes de la competencia', caption: 'Regulaciones técnicas en Japón' },
          gal2: { alt: 'Vista del ambiente de la competencia en Tokio', caption: 'El escenario mundial' },
          gal3: { alt: 'Analizando a los robots de los competidores japoneses', caption: 'Aprendiendo de los mejores' },
        },
        challenges:
          'El mayor desafío fue adaptarme a un nivel de competencia radicalmente superior, donde la velocidad, la potencia y la estrategia de los oponentes estaban a otro nivel. La barrera del idioma y la logística del viaje también fueron parte de la experiencia.',
        learnings:
          'Aprendí que para competir a nivel mundial se requiere un nivel de optimización y especialización mucho mayor. Esta experiencia fue clave para definir mis objetivos a largo plazo, incluyendo la necesidad de diseñar mi propio controlador de motores.',
      },
      robotracerUtfsm2018: {
        title: 'Primer Intento en Seguidor de Línea (2018)',
        description: 'Mi primera aproximación a la categoría de seguidor de línea. Aunque el robot no completó una vuelta, fue un punto de partida fundamental para entender los desafíos de la categoría.',
        imageAltText: 'El primer robot seguidor de línea construido con Arduino',
        categoryText: 'Robótica Competitiva',
        dateText: 'Octubre 2018',
        detailedDescription:
          'En la misma competencia donde gané en la categoría de sumo, decidí probar suerte en la categoría de seguidor de línea. Fue una experiencia de aprendizaje desde cero. Construí un robot simple basado en Arduino, pero sin tener un conocimiento profundo de los algoritmos de control (como el control PD) ni de las técnicas de sensado que se usaban. Como resultado, el robot fue bastante deficiente y no logró completar ni una sola vuelta válida. A pesar del resultado, este primer fracaso fue crucial, ya que me mostró la complejidad que había detrás de una tarea aparentemente simple y despertó mi interés por entender y dominar los sistemas de control.',
        keyFeatures: {
          primeraAproximacionSeguidor: {
            title: 'Primera Aproximación a la Categoría',
            description: 'Fue mi primer contacto práctico con los desafíos de la robótica de seguidores de línea.',
          },
          aprendizajeDesafios: {
            title: 'Aprendizaje de los Desafíos de Control',
            description: 'La experiencia me enseñó la importancia de un buen algoritmo de control y una sensórica fiable.',
          },
        },
        galleryImages: {
          gal1: { alt: 'El chasis simple del primer seguidor de línea', caption: 'Construcción inicial' },
          gal2: { alt: 'El arreglo de sensores infrarrojos del robot', caption: 'Primeros intentos de sensado' },
          gal3: { alt: 'El robot en la pista de la competencia de la UTFSM', caption: 'Un comienzo difícil' },
        },
        challenges:
          'El principal desafío fue la falta de conocimiento sobre los algoritmos de control y las técnicas de sensado. Intenté resolver el problema con una lógica muy básica que no fue suficiente para la complejidad de la pista.',
        learnings:
          'Esta experiencia me enseñó que la robótica de seguidores de línea es una disciplina profunda que requiere un sólido entendimiento de la teoría de control y el procesamiento de señales de sensores. Fue el primer paso en un largo camino de aprendizaje.',
      },
      sumoUtfsm2018: {
        title: 'Campeón Nacional de Mega Sumo (2018)',
        description: 'Obtuve el Primer Lugar en la competencia de la UTFSM. Este robot, con chasis de aluminio, fue mi primera incursión en motores brushless y me clasificó para el mundial de Japón.',
        imageAltText: 'El robot campeón de Mega Sumo con su chasis de aluminio',
        categoryText: 'Robótica Competitiva',
        dateText: 'Octubre 2018',
        detailedDescription:
          'Después del aprendizaje del año anterior, volví a la competencia de la UTFSM con un robot completamente rediseñado. Invertí tiempo y presupuesto propio para fabricar un chasis de aluminio, lo que le dio una robustez muy superior. Lo más importante fue que este robot marcó mi primera incursión en el mundo de los motores brushless, buscando una ventaja en potencia. Aunque la electrónica seguía basada en Arduino y módulos comerciales (ESC), el rendimiento fue suficiente para dominar la competencia y obtener el primer lugar. Esta victoria no solo fue una gran revancha personal, sino que me enseñó las limitaciones de los ESC y me abrió las puertas al mundial de Japón.',
        keyFeatures: {
          primerLugarNacional: {
            title: 'Primer Lugar en la Competencia Nacional',
            description: 'La victoria validó el nuevo diseño y el esfuerzo invertido.',
          },
          incursionBrushless: {
            title: 'Primera Incursión en Motores Brushless',
            description: 'Experimenté por primera vez con la potencia de los motores brushless, lo que me llevó a investigar formas de control más avanzadas.',
          },
          chasisAluminio: {
            title: 'Diseño con Chasis de Aluminio',
            description: 'El cambio a un chasis de metal mejoró drásticamente la durabilidad y el rendimiento del robot en combate.',
          },
        },
        galleryImages: {
          gal1: { alt: 'El robot en el taller durante su construcción', caption: 'Fabricación y ensamblaje' },
          gal2: { alt: 'El robot en el dohyo de la competencia', caption: 'Dominando la arena' },
          gal3: { alt: 'Recibiendo el trofeo de primer lugar', caption: 'Campeón Nacional' },
        },
        challenges:
          'El mayor desafío fue trabajar con nuevos materiales (aluminio) y una nueva tecnología de motores (brushless) con un presupuesto limitado, lo que requirió mucho ingenio y aprendizaje autodidacta.',
        learnings:
          'Aprendí sobre diseño mecánico básico, las ventajas de los motores brushless y, fundamentalmente, las deficiencias de los ESC para aplicaciones de alto torque, lo que se convirtió en la motivación principal para mi futuro proyecto de título.',
      },
      sumoUtfsm2017: {
        title: 'Fundación de Grupo de Robótica y Primer Robot Sumo',
        description: 'Lideré la fundación del primer grupo de robótica en el liceo público de Coelemu y desarrollé nuestro primer robot Mega Sumo, diseñando piezas 3D e implementando la electrónica con Arduino.',
        imageAltText: 'El primer robot Mega Sumo con su estructura impresa en 3D',
        categoryText: 'Iniciativas de Liderazgo',
        dateText: 'Octubre 2017',
        detailedDescription:
          'Estando en segundo medio, fundé el primer grupo de robótica en el Liceo Domingo Ortiz de Rozas de Coelemu. Nuestro objetivo fue participar en la competencia de Mega Sumo de la UTFSM. Esta fue una experiencia fundacional en todos los sentidos: gestioné la compra de nuestra primera impresora 3D, diseñé mis primeras piezas en Autodesk Inventor y construí un robot desde cero con una plataforma Arduino y módulos. Aunque el resultado en la competencia fue decepcionante (el robot se rompió en el primer combate), el aprendizaje fue inmenso. Fue mi primera experiencia liderando un equipo, gestionando un proyecto técnico y enfrentando el ciclo completo de diseño y fabricación.',
        keyFeatures: {
          fundacionGrupo: {
            title: 'Fundación del Grupo de Robótica del Liceo',
            description: 'Tomé la iniciativa de crear y liderar el primer equipo de robótica de mi liceo, fomentando el interés por la tecnología.',
          },
          primerDiseno3d: {
            title: 'Primeros Diseños e Impresiones en 3D',
            description: 'Utilicé Autodesk Inventor para diseñar las piezas del robot, adquiriendo experiencia práctica en CAD y fabricación aditiva.',
          },
          aprendizajeResiliencia: {
            title: 'Aprendizaje a través del Fracaso',
            description: 'La rotura del robot en la competencia fue una dura pero valiosa lección sobre la importancia de la robustez en el diseño mecánico.',
          },
        },
        galleryImages: {
          gal1: { alt: 'El equipo del liceo trabajando en el robot', caption: 'Los inicios del grupo de robótica' },
          gal2: { alt: 'Las primeras piezas impresas en 3D para el robot', caption: 'Del diseño a la realidad' },
          gal3: { alt: 'El robot antes de su primer y único combate', caption: 'Listo para la competencia' },
        },
        challenges:
          'El principal desafío fue empezar desde cero, sin experiencia previa, sin presupuesto y sin mentores. Tuvimos que aprender todo de forma autodidacta, desde el diseño 3D hasta la programación en Arduino.',
        learnings:
          'Esta experiencia me enseñó el valor del liderazgo, la importancia de la perseverancia a pesar de los fracasos, y me dio mis primeras habilidades prácticas en diseño 3D, impresión 3D y electrónica básica.',
      },
      frcLosAngeles2016: {
        title: 'FIRST Robotics Competition (2016)',
        description: 'Mi primera experiencia en robótica de alta competición, participando en la división de electrónica y encargándome del cableado estructurado del robot del equipo "Corazón de Chile".',
        imageAltText: 'El robot del equipo "Corazón de Chile" en la competencia FRC',
        categoryText: 'Robótica Competitiva',
        dateText: 'Abril 2016',
        detailedDescription:
          'Mi viaje en la robótica comenzó con mi participación en la FIRST Robotics Competition en Los Ángeles, EE. UU. Como parte del equipo "Corazón de Chile", me integré en la división de electrónica. Mi rol principal fue realizar todo el cableado interno del robot, una tarea meticulosa que requería organización, precisión y fiabilidad para asegurar que todos los sistemas (motores, sensores, controladores) funcionaran sin fallos. Fue una introducción intensa al trabajo en equipo en un proyecto de ingeniería a gran escala y bajo la presión de una competencia de nivel mundial. Esta experiencia fue la chispa que encendió mi pasión por la robótica y la electrónica.',
        keyFeatures: {
          primeraExperienciaCompetitiva: {
            title: 'Primera Experiencia en Competencia de Alto Nivel',
            description: 'Una inmersión en el mundo de la robótica competitiva a gran escala, entendiendo la dinámica de un equipo y la presión de un evento internacional.',
          },
          cableadoEstructurado: {
            title: 'Responsable del Cableado Estructurado',
            description: 'Adquirí experiencia práctica en la integración de sistemas electrónicos, asegurando la fiabilidad de las conexiones eléctricas del robot.',
          },
          trabajoEquipo: {
            title: 'Trabajo en un Equipo Multidisciplinario',
            description: 'Colaboré con las divisiones de mecánica y programación para lograr un robot funcional y competitivo.',
          },
        },
        galleryImages: {
          gal1: { alt: 'Detalle del cableado interno del robot FRC', caption: 'Mi trabajo en la división de electrónica' },
          gal2: { alt: 'El equipo "Corazón de Chile" en el área de pits', caption: 'Preparando el robot para la acción' },
          gal3: { alt: 'El robot compitiendo en la arena de la FRC', caption: 'Viendo el resultado del trabajo en equipo' },
        },
        challenges:
          'El mayor desafío fue aprender rápidamente a trabajar bajo los estándares de una competencia tan exigente, donde la fiabilidad del sistema eléctrico es crucial y un solo cable mal conectado puede significar la derrota.',
        learnings:
          'Aprendí la importancia fundamental de un trabajo metódico y organizado en la electrónica, a colaborar eficazmente en un equipo grande y, lo más importante, confirmé que quería dedicar mi futuro a la ingeniería y la robótica.',
      },
    }
  },
  en: {
    projectsContent: {
      sampleProject: {
        title: 'Sample Project',
        description: 'This is a sample project for the template.',
        imageAltText: 'Placeholder image for the sample project',
        categoryText: 'Web Application',
        dateText: 'January 2025',
        detailedDescription:
          'A more detailed description of this sample project, showing how to structure content for the project detail page.',
        keyFeatures: {
          responsiveDesign: {
            title: 'Responsive Design',
            description: 'The project adapts to all screen sizes.',
          },
          contentManagement: {
            title: 'Easy Content Management',
            description:
              'Allows for easy content management via Markdown files or a CMS.',
          },
        },
        galleryImages: {
          // sampleGalleryImage1: { // If you enable gallery for the example
          //   alt: 'Alt text for gallery image 1',
          //   caption: 'Caption for gallery image 1',
          // },
        },
        challenges:
          'Description of challenges encountered while creating this sample project.',
        learnings: 'Description of learnings from this sample project.',
      },
    },
    uselessButton: {
      initialTooltip: 'What is this?',
      phrases: [
        'Useless Button',
        'Seriously, it does nothing',
        'Are you bored?',
        'Keep trying...',
        'Maybe the next click...',
        'Nope.',
        'Still here?',
        'Curiosity killed the cat',
        'Almost...',
        'Keep going!',
        'c@#r&pT3d!',
        "You're gonna break it!",
        'Got a lot of free time?',
        'Go touch grass',
        'Sapeee!',
        'Error 404: Joke not found',
        'Insert coin to continue',
        'undefined',
        'null',
        'My projects are more interesting',
        "This wasn't in the requirements",
        'Achievement Unlocked: Patience',
        'With great clicking comes...',
        "Don't wear out your mouse",
        'Loading joke...',
        "It's a trap!", 
        "All your base are belong to us", 
        "Son of a bitch!", 
        "They did surgery on a grape",
      ],
    },
    skillsContent: {
      technicalSkills: {
        title: 'technicalSkills', // <-- CAMBIO
        description: '',
      },
      programmingLanguages: {
        title: 'programmingLanguages', // <-- CAMBIO
        description: '',
      },
      toolsAndFrameworks: {
        title: 'toolsAndFrameworks', // <-- CAMBIO
        description: '',
      },
    },
    site: {
      title: 'My Awesome Template',
      description:
        'A modern and performant Astro template to kickstart your project.',
    },
    nav: {
      home: 'Home',
      blog: 'Blog',
      contact: 'Contact',
      projects: 'Projects',
    },
    footer: {
      rights: 'All rights reserved.',
    },
    homePage: {
      pageTitle: 'Home | YOUR_NAME - FullStack Developer',
      pageDescription:
        'Welcome to the portfolio of YOUR_NAME, a FullStack developer passionate about creating innovative web experiences.',
      heroGreeting: "Hi, I'm YOUR_NAME",
      heroSubtitlePart: 'Full Stack Developer',
      heroIntroduction: 'Add an introduction here.',
      heroViewWorkButton: 'View My Work',
      heroContactButton: 'Get In Touch',
      heroImageAlt:
        'Illustration representing YOUR_NAME or a development concept',
      featuredProjectsTitle: '3 latest projects',
      projectCardViewProject: 'View Project',
      projectCardViewCode: 'View Code',
      imageNotAvailable: 'Image not available for now',
      mySkillsTitle: 'My Skills',
      mySkillsDescription:
        'Explore the expertise and abilities that define my work and passion.',
    },
    blogPage: {
      pageTitle: 'My Technical Blog',
      pageDescription:
        'Articles and thoughts on web development, software architecture, and new technologies.',
      title: 'My Technical Blog',
      description:
        'Articles and thoughts on web development, software architecture, and new technologies.',
      comingSoon: 'Blog posts will appear here soon. Check back later!',
      heroImageAlt: 'Hero image for article: ',
      publishedOn: 'Published on: ',
      readMore: 'Read more',
      readingTimeSuffix: 'min read',
      searchPlaceholder: 'Search articles...',
      filterByTagButtonLabel: 'Filter by tag',
      noTagFound: 'No tag found.',
      selectTagCommandPlaceholder: 'Search tag...',
      allTagsLabel: 'All tags',
      noPostsFound: 'No posts found.',
    },
    blogPost: {
      publishedOn: 'Published on: ',
      updatedOn: 'Updated on: ',
      heroImageAlt: 'Hero image for article: ',
      backToList: 'Back to blog list',
      readingTimeSuffix: 'min read',
      relatedPostsTitle: 'Continue Reading',
      readMore: 'Read more',
    },
    toc: {
      title: 'Table of Contents',
    },
    contactPage: {
      pageTitle: 'Contact Me',
      pageDescription:
        "Let's discuss your project, a potential collaboration, or just chat about tech!",

      title: 'Contact Me',
      description:
        "Let's discuss your project, a potential collaboration, or just chat about tech!",
      formTitle: 'Send a message',
      firstNameLabel: 'First Name',
      lastNameLabel: 'Last Name',
      emailLabel: 'Email',
      messageLabel: 'Message',
      sendButtonLabel: 'Send',
      firstNamePlaceholder: 'Your first name',
      lastNamePlaceholder: 'Your last name',
      emailPlaceholder: 'Your email address',
      messagePlaceholder: 'Your message here...',
      calendarTitle: 'Schedule a Meeting',
      calendarDescription:
        'Prefer to talk live? Book a slot directly in my calendar.',
      calendarButtonLabel: 'See my availability',
      calendarLinkLabel: 'See my calendar',
      calendarPlaceHolder:
        'The integration with Google Calendar will be soon...',
      orSeparatorText: 'OR',
      toastSuccessMessageSent: 'Message sent successfully!',
      toastErrorFailedToSend: 'Failed to send message.',
      toastErrorUnexpected: 'An unexpected error occurred.',
      toastErrorDetails: 'Error details:',
      toastErrorValidationFailed: 'Form validation failed.',
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
      metaTitle: "My Projects | YOUR_NAME's Portfolio",
      metaDescription: "Discover all of YOUR_NAME's projects.",
      noProjects: 'No projects to display at the moment.',
      noProjectsDescription:
        "It seems that you don't have any projects to display at the moment.",
    },
    notFoundPage: {
      pageTitle: 'Page Not Found',
      title: 'Oops! Page Not Found',
      message:
        'Sorry, the page you are looking for does not seem to exist. Check the URL or return to the homepage.',
      homeLink: 'Return to Homepage',
    },

    zodErrors: {
      // Common errors
      invalid_type: 'Invalid type.',
      invalid_type_received_undefined: 'This field is required.', // For required fields (fallback)
      required_field_custom: 'The {fieldName} field is required.',
      // String errors
      too_small_string_minimum: 'Must be at least {minimum} characters long.',
      too_big_string_maximum: 'Must be no more than {maximum} characters long.',
      invalid_string_email: 'Invalid email address.',
      invalid_string_url: 'Invalid URL.',
      invalid_string_uuid: 'Invalid UUID.',
      // You can add more specific messages as needed
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
