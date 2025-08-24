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
      description:'Portafolio de Rodrigo Fuentes Pedreros, Ingeniero de Ejecución en Electrónica especializado en el desarrollo de sistemas embebidos y robótica.',
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
      pageDescription: 'Bienvenido al portafolio de Rodrigo Fuentes, un Ingeniero Electrónico apasionado por la robótica, el diseño de PCBs y la programación de microcontroladores.',
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
        noProjectsDescription:'Estoy preparando mis proyectos para mostrarlos aquí. ¡Vuelve pronto!',
    }, 
    projectsContent: {
      freelanceBobinadora2025: {
        title: 'Controlador de Precisión para Bobinadora de Filamento',
        description: 'Desarrollo de un controlador a medida para una máquina bobinadora de cobre, destacando por su firmware con control de movimiento trapezoidal y una innovadora metodología de desarrollo remoto.',
        imageAltText: 'Portada del proyecto de la bobinadora',
        categoryText: 'Freelance',
        dateText: 'Abril 2025',
        detailedDescription: [
          'Este proyecto freelance consistió en el diseño de una PCB y el desarrollo de un firmware a medida para automatizar una bobinadora de filamento de cobre. El sistema debía sincronizar con precisión el giro del carrete y el desplazamiento de un vástago guía, además de medir la longitud del filamento bobinado mediante un odómetro.',
          'El núcleo de la solución es un microcontrolador STM32. La principal complejidad residió en el software: programé desde cero un algoritmo de control de movimiento con perfil trapezoidal para los motores paso a paso, asegurando arranques y paradas suaves. Adicionalmente, desarrollé una librería no bloqueante para el display TM1637, ya que las soluciones existentes interferían con el control en tiempo real de los motores.',
        ],
        tags: ['STM32 HAL', 'Firmware', 'Diseño de PCB', 'Sistemas Embebidos'],
        keyFeatures: {
          key1: {
            title: 'Control de Movimiento Trapezoidal',
            description: 'Implementación de un algoritmo de control para motores paso a paso con rampas de aceleración y desaceleración, programado desde cero usando los timers del STM32 para un movimiento preciso y sincronizado.',
          },
          key2: {
            title: 'Librería de Display No Bloqueante',
            description: 'Desarrollo de una librería de comunicación a medida para el integrado TM1637, utilizando interrupciones para evitar el bloqueo del bucle principal y garantizar el rendimiento del sistema en tiempo real.',
          },
          key3: {
            title: 'Metodología de Desarrollo Remoto',
            description: 'Todo el firmware fue desarrollado y depurado sin acceso físico al hardware final. Utilicé un entorno de pruebas con un analizador lógico y una estructura de proyectos "gemelos" en WSL con enlaces simbólicos para compilar el mismo código para dos microcontroladores diferentes.',
          },
        },
        galleryImages: {
          gal1: { alt: '', caption: '' },
          gal2: { alt: '', caption: '' },
          gal3: { alt: '', caption: '' },
        },
        challenges: 'El mayor reto fue desarrollar y depurar el firmware completamente a ciegas, sin acceso a la máquina ni al hardware final. Esto exigió crear un entorno de simulación y validación de señales con un analizador lógico, además de una estructura de compilación dual para asegurar la compatibilidad del código entre mi plataforma de pruebas y la del cliente.',
        learnings: 'Este proyecto consolidó mis habilidades en programación de bajo nivel con STM32 HAL y me enseñó a crear soluciones robustas bajo restricciones extremas. La necesidad de un desarrollo remoto me impulsó a diseñar un flujo de trabajo de software altamente estructurado y verificable, una habilidad invaluable para cualquier proyecto de sistemas embebidos.',
      },
      freelanceMesas2025: {
        title: 'Controlador para Mesones Levadizos en CoWork',
        description: 'Desarrollo de un sistema de control a medida para dos mesones levadizos, implementado en un espacio de cowork en la Torre Costanera, Santiago.',
        imageAltText: 'Portada del proyecto de control de mesones',
        categoryText: 'Freelance',
        dateText: 'Enero 2025',
        detailedDescription: [
          'Este proyecto consistió en el desarrollo de la unidad de control electrónico para un sistema mecánico de gran envergadura: dos mesones de 800 kg cada uno, accionados por un conjunto de tres huinches de carga por mesa. La principal exigencia era garantizar un control preciso y completamente seguro para su operación en un concurrido espacio de cowork.',
          'Mi responsabilidad abarcó el ciclo completo de desarrollo, desde el diseño del hardware y la PCB hasta la programación del firmware. La solución centraliza la operación de 6 motores de alta carga, 6 servomotores para los pestillos de seguridad y 12 sensores inductivos de posicionamiento. El control se realiza a través de una interfaz de usuario física con selectores y botoneras, proporcionando retroalimentación visual del estado del sistema.',
        ],
        tags: ['STM32 HAL', 'Diseño de PCB', 'Firmware', 'Sistemas Embebidos'],
        keyFeatures: {
          key1: {
            title: 'Control Centralizado de Alta Carga',
            description: 'Gestión de 6 motores bidireccionales, 12 sensores de posición NPN y 6 servos, todo desde una única placa controladora basada en un microcontrolador STM32.',
          },
          key2: {
            title: 'Aislamiento Eléctrico y Seguridad',
            description: 'Todas las señales de entrada y salida fueron optoacopladas para proteger el microcontrolador. Se utilizaron fuentes de poder aisladas para separar el circuito de control del de potencia, garantizando máxima fiabilidad.',
          },
          key3: {
            title: 'Fabricación y Montaje Profesional',
            description: 'La placa fue fabricada y ensamblada utilizando los servicios de PCBA de JLCPCB. Posteriormente realicé el montaje en gabinete y la conexión final en terreno.',
          },
          key4: {
            title: 'Firmware con Lógica de Seguridad',
            description: 'El firmware, programado en C++ con librerías HAL, incluye múltiples capas de seguridad y validaciones para prevenir malos usos y proteger la integridad del sistema mecánico y de los usuarios.',
          },
        },
        galleryImages: {
          gal1: { alt: '', caption: '' },
          gal2: { alt: '', caption: '' },
          gal3: { alt: '', caption: '' },
          gal4: { alt: '', caption: '' },
          galM: { alt: '', caption: '' },
        },
        challenges: 'El principal desafío técnico fue garantizar la máxima robustez y fiabilidad del sistema. La criticidad de la aplicación, manejando cargas de 800 kg en un entorno público, exigió un diseño electrónico con aislamiento galvánico a toda prueba y un firmware con una lógica de control redundante para mitigar cualquier riesgo.',
        learnings: 'Este proyecto me proporcionó una valiosa experiencia en el diseño de sistemas de control para aplicaciones industriales de alta responsabilidad, reforzando la importancia del aislamiento galvánico y la gestión de un proyecto freelance de principio a fin, desde el diseño conceptual hasta la implementación en terreno.',
      },
      hexapod2021: {
        title: 'Robot Hexapod',
        description: 'Un proyecto personal de 8 meses que integra diseño mecánico 3D, desarrollo de PCBs personalizadas y la programación de cinemática inversa en Python para controlar un avanzado robot de 18 servos.',
        imageAltText: 'Portada del proyecto Robot Hexapod',
        categoryText: 'Innovación y Desarrollo',
        dateText: 'Agosto 2021',
        detailedDescription: [
          'Concebido desde cero durante la pandemia, este robot Hexapod representa uno de mis proyectos más integrales. A lo largo de 8 meses, diseñé y fabriqué toda su estructura mediante impresión 3D, creando las complejas piezas mecánicas que dan vida a sus 6 patas, cada una con 3 grados de libertad.',
          'Su arquitectura electrónica es un sistema de control distribuido: una Raspberry Pi 4 ejecuta los cálculos de cinemática inversa en Python, mientras que una Raspberry Pi Pico se dedica a la gestión en tiempo real de las señales PWM para los 18 servomotores. Este proyecto fue mi puerta de entrada al diseño de PCBs, impulsado por un patrocinio de JLCPCB que obtuve gracias a la visibilidad del proyecto.',
          'El control del robot es flexible, soportando operación remota vía terminal SSH o de forma inalámbrica con un joystick. El software fue diseñado con un enfoque multiproceso, utilizando sockets para desacoplar la lógica de control del motor de cinemática, garantizando un rendimiento fluido y una arquitectura modular.',
        ],
        tags: ['Python', 'Cinemática Inversa', 'Diseño de PCB', 'Diseño 3D'],
        keyFeatures: {
          key1: {
            title: 'Diseño Evolutivo en 3D',
            description: 'El robot evolucionó a través de 3 versiones principales, mejorando la robustez estructural, optimizando el ruteo de cables y adaptando el chasis para servomotores progresivamente más potentes (desde 8 kg·cm hasta 60 kg·cm).',
          },
          key2: {
            title: 'Sistema de Control Dual (Pi 4 + Pico)',
            description: 'Una arquitectura de control distribuida donde la RPi 4 actúa como el cerebro de alto nivel (cinemática) y la RPi Pico funciona como un controlador de bajo nivel dedicado a la gestión precisa de los servos.',
          },
          key3: {
            title: 'PCB de Control Personalizada',
            description: 'Se diseñó y fabricó una PCB a medida que integra la RPi Pico, el controlador de servos PCA9685, y sistemas de medición de corriente por pata, centralizando toda la electrónica de control.',
          },
          key4: {
            title: 'Librería de Cinemática Inversa',
            description: 'Desarrollo de una librería de software en Python que traduce comandos de movimiento de alto nivel (ej. "avanzar", "rotar") en los ángulos precisos para cada uno de los 18 ejes del robot.',
          },
        },
        galleryImages: {
          gal1: { alt: '', caption: '' },
          gal2: { alt: '', caption: '' },
          gal3: { alt: '', caption: '' },
          gal4: { alt: '', caption: '' },
          galM: { alt: '', caption: '' },
        },
        challenges: 'El principal desafío fue la gestión de la carga mecánica. La primera iteración sufría de oscilaciones por falta de torque, mientras que la segunda quemaba los servos de mayor esfuerzo. Esto exigió un rediseño completo de la estructura para integrar servomotores de alto rendimiento, validando la importancia del diseño iterativo.',
        learnings: 'Este proyecto consolidó mis habilidades en diseño mecánico para fabricación aditiva, diseño de PCBs y la implementación práctica de algoritmos complejos. La lección fundamental fue la importancia de la iteración para resolver problemas imprevistos y la necesidad de sobredimensionar componentes críticos para garantizar la fiabilidad del sistema.',
      },
      frcLosAngeles2016: {
        title: 'FIRST Robotics Competition 2016',
        description: 'Mi debut en la robótica competitiva internacional con el equipo "Corazón de Chile". Como miembro de la división de electrónica',
        imageAltText: 'Portada del proyecto FIRST Robotics Competition 2016', 
        categoryText: 'Robótica Competitiva',
        dateText: 'Abril 2016',
        detailedDescription: [
          'Mi primera incursión en la robótica a gran escala fue una experiencia inmersiva en la FRC de Los Ángeles. Formé parte del equipo "Corazón de Chile", una organización de más de 20 personas dividida en áreas como diseño, mecánica y programación. Integrado en la división de electrónica, mi principal responsabilidad fue el montaje y la gestión del cableado interno del robot, una tarea crítica para asegurar la comunicación y alimentación de todos los sistemas en un entorno de alta exigencia.',
        ],
        tags: ['CDCH ❤️', 'Internacional', 'Trabajo en Equipo'],
        keyFeatures: {
          key1: {
            title: 'Cableado Robusto a Prueba de Fallos',
            description: 'Nuestro método de validación era tan práctico como efectivo: el robot, de más de 50 kg, era volteado por completo para asegurar que ningún componente o cable se soltara bajo estrés.',
          },
          key2: {
            title: 'Inmersión en una Organización de Desarrollo',
            description: 'Observar de primera mano la dinámica de un equipo grande, con líderes y divisiones especializadas, fue una revelación. Aunque mi rol fue de ejecución, entender esta estructura me inspiró y sentó las bases de mi interés por el liderazgo de proyectos.',
          },
        },
        galleryImages: {
          gal1: { alt: '', caption: '' },
          gal2: { alt: '', caption: '' },
          gal3: { alt: '', caption: '' },
          gal4: { alt: '', caption: '' },
          galM: { alt: '', caption: '' },
        },
        challenges: 'El mayor desafío fue logístico y de tiempo. Debido al estricto plazo de 6 semanas, no completamos el ensamblaje del robot antes de enviarlo. Esto nos obligó a realizar casi todo el cableado eléctrico directamente en el recinto de la competencia, trabajando bajo una inmensa presión para tener el robot operativo para las primeras rondas.',
        learnings: 'Más allá de la técnica, el aprendizaje más profundo fue entender cómo funciona un equipo de desarrollo a gran escala. Ver la organización y el liderazgo en acción me motivó a no solo continuar en la robótica, sino a aspirar a crear y liderar mis propios equipos, una semilla que germinó al año siguiente al fundar el grupo de robótica de mi liceo.',
      },

      //Saga Driver FOC
      proyectoTituloFoc2024: {
        title: 'Proyecto de Título: Driver FOC',
        description: 'Diseño e implementación de un controlador de tipo FOC para motores brushless como proyecto de título, materializando el objetivo personal que me impulsó a estudiar Ingeniería en Electrónica.',
        imageAltText: 'Portada del documento del proyecto de título sobre el controlador FOC.',
        categoryText: 'Innovación y Desarrollo',
        dateText: 'Marzo 2025',
        detailedDescription: [
          'Este proyecto representa la culminación de mi carrera y la razón por la que la comencé. Fue la materialización formal del objetivo que me propuse en 2018: crear un controlador de motores brushless superior a los ESC comerciales, basado en la técnica de Control Orientado a Campo (FOC).',
          'Aprovechando toda la experiencia previa, el trabajo se estructuró con una metodología clara bajo la guía de mi profesor co-guía, Pedro Melin. El desarrollo abarcó cuatro meses de programación intensiva del firmware, un mes para el diseño de la PCB final y dos meses adicionales para pruebas, validación y pulido de detalles.',
          'El resultado es un driver FOC funcional y validado que no solo cumple con los requisitos técnicos, sino que también demuestra un ciclo completo de investigación y desarrollo. El 31 de marzo de 2025 defendí este trabajo, obteniendo la calificación máxima y cerrando un ciclo que definió mi trayectoria profesional.',
        ],
        tags: ['Control FOC', 'Electrónica de Potencia', 'Diseño de PCB', 'STM32 HAL'],
        keyFeatures: {
          key1: {
            title: 'Algoritmo FOC Optimizado',
            description: 'Implementación completa del algoritmo FOC en un microcontrolador STM32, logrando un control preciso de torque y velocidad para un rendimiento superior del motor.',
          },
          key2: {
            title: 'Diseño de Etapa de Potencia Robusta',
            description: 'Creación de un inversor trifásico con MOSFETs capaz de manejar altas corrientes, incorporando gate drivers y un layout de PCB optimizado para la integridad de la señal.',
          },
          key3: {
            title: 'Firmware en Tiempo Real',
            description: 'Programación del STM32 con librerías HAL para ejecutar el lazo de control FOC a 48 kHz, gestionando la lectura de sensores y la generación de PWM de forma sincronizada.',
          },
          key4: {
            title: 'Metodología y Validación Académica',
            description: 'Aplicación de un proceso formal de I+D, desde el estudio teórico hasta la validación experimental de los resultados, documentando cada etapa del proceso.',
          },
        },
        galleryImages: {
          gal1: { alt: '', caption: '' },
          gal2: { alt: '', caption: '' },
          gal3: { alt: '', caption: '' },
          gal4: { alt: '', caption: '' },
          galM: { alt: '', caption: '' },
        },
        challenges: 'El desafío principal fue la traducción de la compleja teoría matemática del control FOC a un firmware optimizado y en tiempo real. El diseño de la etapa de potencia fue igualmente crítico, requiriendo un layout de PCB cuidadoso para manejar altas corrientes y minimizar el ruido.',
        learnings: 'Este proyecto consolidó mi formación en sistemas embebidos, electrónica de potencia y control avanzado. Aprendí a estructurar un proyecto complejo en un marco académico, a documentar rigurosamente el proceso y a validar los resultados de forma metódica, confirmando el valor de la perseverancia.',
      },
      focExperimental: {
        title: 'Prototipos y Desarrollo de Driver FOC',
        description: 'Crónica del desarrollo autodidacta de un controlador FOC, desde las primeras PCBs caseras hasta prototipos funcionales que sentaron las bases para mi proyecto de título.',
        imageAltText: 'Prototipo de la placa controladora FOC en un banco de pruebas.',
        categoryText: 'Innovación y Desarrollo',
        dateText: 'Marzo 2024',
        detailedDescription: [
          'Todo comenzó en 2018, tras competir en la ALL JAPAN ROBOT SUMO TOURNAMENT y darme cuenta de que los controladores ESC comerciales eran un cuello de botella significativo. No ofrecían el torque de arranque ni la respuesta que necesitaba para aprovechar al máximo las cualidades de los motores brushless. Esta frustración se convirtió en un objetivo: construir mi propio controlador FOC, una meta que me llevó a estudiar electrónica.',
          'Durante varios años, me dediqué a investigar y experimentar de forma independiente. El proceso fue iterativo y práctico: diseñé cuatro versiones de PCBs, empecé fabricando con ácido en casa y luego profesionalicé el proceso con JLCPCB. En el camino, quemé incontables MOSFETs y microcontroladores, e incluso exploré el uso de FPGAs, aprendiendo de cada error.',
          'Esta fase culminó con un prototipo funcional y, lo más importante, con una comprensión profunda y práctica del control de motores y la electrónica de potencia. Fue un viaje de prueba y error que me preparó con una base sólida para formalizar todo este conocimiento en mi proyecto de título.',
        ],
        tags: ['Diseño de PCB', 'Electrónica de Potencia', 'Firmware', 'STM32'],
        keyFeatures: {
          key1: {
            title: 'Diseño Iterativo de Hardware',
            description: 'Evolución del diseño a través de múltiples prototipos de PCB, mejorando el layout, la gestión térmica y la selección de componentes en cada versión.',
          },
          key2: {
            title: 'Investigación Autodidacta',
            description: 'Proceso de aprendizaje auto-guiado sobre la teoría del control FOC, el funcionamiento de puentes MOSFET y la programación de bajo nivel para aplicarlos en la práctica.',
          },
          key3: {
            title: 'Creación de Prototipos y Pruebas',
            description: 'Fabricación y ensamblaje de placas funcionales, enfrentando y solucionando problemas reales de hardware como el ruido eléctrico y las fallas de componentes de potencia.',
          },
        },
        galleryImages: {
          gal1: { alt: '', caption: '' },
          gal2: { alt: '', caption: '' },
          gal3: { alt: '', caption: '' },
          gal4: { alt: '', caption: '' },
          galM: { alt: '', caption: '' },
        },
        challenges: 'El principal reto fue la curva de aprendizaje autodidacta: traducir conceptos teóricos complejos a hardware funcional sin una guía formal. Esto implicó un largo proceso de prueba, error y diagnóstico, especialmente al trabajar con altas corrientes y voltajes.',
        learnings: 'Aprendí que la mejor forma de entender la teoría es aplicándola, incluso si eso significa fallar repetidamente. Este proceso me enseñó a ser resiliente, a diagnosticar fallas en hardware de potencia y a sentar una base práctica invaluable antes de abordar el proyecto formalmente.',
      },

      //Saga de Mega sumo
      sumoAsuraKabuto2023: {
        title: 'Mega Sumo "Asura Kabuto"',
        description: 'Diseño y fabricación de un robot Mega Sumo de alto rendimiento con chasis de aluminio CNC y control FOC, representando a Chile en la "All Japan Robot-Sumo Tournament" de 2023.',
        imageAltText: 'Robot Asura Kabuto en la arena de competencia.',
        categoryText: 'Robótica Competitiva',
        dateText: 'Diciembre 2023',
        detailedDescription: [
          '"Asura Kabuto" representa la culminación de años de investigación y desarrollo en la robótica de sumo. Fue concebido como mi creación definitiva, aplicando todo el conocimiento adquirido sobre control de motores brushless con ODrive y diseño mecánico avanzado.',
          'El proyecto dio un salto cualitativo gracias al patrocinio de PCBWAY, que permitió pasar de prototipos impresos en 3D a un chasis final fabricado en aluminio 7075 mediante CNC, otorgándole una robustez excepcional. El apoyo de Synopsys y la Facultad de Ingeniería de la UBB fue fundamental para financiar el viaje y competir en Japón.',
          'En combate, el robot se comportó como un verdadero "tanque", con una fuerza de empuje frontal insuperable gracias a sus motores Sunnysky y una alta relación de engranajes. Sin embargo, su velocidad punta, inferior a la de los competidores de élite, se convirtió en una desventaja táctica crucial que resultó en una derrota por flanqueo en la primera ronda.',
        ],
        tags: ['Internacional', 'Diseño CNC', 'Control FOC', 'I+D'],
        keyFeatures: {
          key1: {
            title: 'Chasis de Aluminio 7075 CNC',
            description: 'Estructura principal fabricada en aluminio de grado aeroespacial para maximizar la rigidez y durabilidad, soportando los violentos impactos del sumo de alto nivel.',
          },
          key2: {
            title: 'Control FOC de Alta Potencia',
            description: 'Uso de dos motores brushless de 1600W controlados por una ODrive 3.6, modificada para gestionar picos de alta corriente y entregar un torque masivo e instantáneo.',
          },
          key3: {
            title: 'Estrategia de "Tanque"',
            description: 'Diseño enfocado en la fuerza bruta y la resistencia, utilizando una matriz de imanes de neodimio para maximizar la adherencia a la pista metálica y anular el empuje rival.',
          },
        },
        galleryImages: {
          gal1: { alt: '', caption: '' },
          gal2: { alt: '', caption: '' },
          gal3: { alt: '', caption: '' },
          gal4: { alt: '', caption: '' },
          galM: { alt: '', caption: '' },
        },
        challenges: 'El principal desafío técnico fue adaptar la Odrive 3.6 para soportar los brutales picos de corriente de los motores sin sobrecalentarse. En competencia, el reto fue puramente táctico: la baja velocidad hacía al robot vulnerable a ser flanqueado por oponentes más ágiles.',
        learnings: 'Esta experiencia demostró que en el sumo de élite, el equilibrio entre torque y velocidad es fundamental. Un robot puramente "tanque" puede ser neutralizado por la agilidad. Fue un aprendizaje clave sobre la importancia de la estrategia y la versatilidad por encima de la fuerza bruta.',
      },
      battlebotBrc2022: {
        title: 'BattleBot para BRC 2022',
        description: 'Desarrollo de un robot de combate para la BRC 2022, aplicando por primera vez el control FOC en un entorno destructivo con una estructura mixta de aluminio y piezas 3D.',
        imageAltText: 'Robot de combate en la arena de la BRC 2022.',
        categoryText: 'Robótica Competitiva',
        dateText: 'Octubre 2022',
        detailedDescription: [
          'Este robot fue una evolución directa del prototipo experimental FOC, diseñado para llevar esa tecnología a un nuevo nivel de exigencia en la categoría BattleBot de la BRC. El objetivo era validar su rendimiento en un entorno de combate real.',
          'La estructura era un híbrido que combinaba la resistencia del aluminio para el chasis principal con la versatilidad de la impresión 3D para geometrías complejas y soportes internos. Se utilizó una Odrive para el control de tracción y un ESC tradicional para el arma giratoria.',
          'Para este proyecto diseñé una nueva PCB más compacta y robusta, que integraba el microcontrolador y la Odrive de forma eficiente, optimizando la distribución del espacio y la protección de los componentes electrónicos.',
        ],
        tags: ['Nacional', 'Control FOC', 'Diseño 3D', 'Diseño PCB'],
        keyFeatures: {
          key1: {
            title: 'Tracción Precisa con Control FOC',
            description: 'Implementación de una Odrive para gobernar los motores brushless de tracción, permitiendo una maniobrabilidad ágil y un torque instantáneo, cruciales para el combate.',
          },
          key2: {
            title: 'Arma Rotativa de Alto Impacto',
            description: 'Uso de un potente motor brushless, controlado por un ESC, para maximizar la energía cinética del arma y el daño infligido al oponente.',
          },
          key3: {
            title: 'Diseño Híbrido para Supervivencia',
            description: 'Combinación de aluminio y piezas impresas en 3D para lograr un equilibrio óptimo entre peso, resistencia estructural y capacidad para absorber impactos.',
          },
        },
        galleryImages: {
          gal1: { alt: '', caption: '' },
          gal2: { alt: '', caption: '' },
          gal3: { alt: '', caption: '' },
          gal4: { alt: '', caption: '' },
          galM: { alt: '', caption: '' },
        },
        challenges: 'El reto principal fue diseñar una estructura que protegiera eficazmente la electrónica, especialmente la Odrive, de los violentos impactos del combate. Además, gestionar la distribución de energía entre un sistema de tracción FOC y un arma de alta demanda fue complejo.',
        learnings: 'Este proyecto fue la validación definitiva del control FOC en una aplicación de alta exigencia. Aprendí a diseñar sistemas mecánicos para resistir fallos catastróficos y la importancia de aislar y proteger los componentes electrónicos en un entorno extremadamente hostil.',
      },
      rodeorobotica2022: {
        title: 'Prototipo Experimental con Control FOC',
        description: 'Desarrollo de un robot experimental para el "Rodeo de Robótica", siendo mi primera plataforma para probar y entender la tecnología de control de motores FOC con una Odrive 3.6.',
        imageAltText: 'Robot experimental con Odrive y estructura impresa en 3D.',
        categoryText: 'Robótica Competitiva',
        dateText: 'Agosto 2022',
        detailedDescription: [
          'Este robot fue concebido como un proyecto puramente experimental para participar en una actividad recreativa. Su principal objetivo era servir como plataforma de aprendizaje para la tecnología de control FOC (Field-Oriented Control), que hasta entonces solo conocía en teoría.',
          'Utilizando el patrocinio de JLCPCB, diseñé una PCB a medida que permitía integrar de forma limpia un microcontrolador con la Odrive 3.6. Toda la estructura del robot se fabricó mediante impresión 3D, lo que facilitó la iteración rápida del diseño.',
          'La participación en el "Rodeo de Robótica" proporcionó un entorno de baja presión ideal para realizar las primeras pruebas, entender el proceso de configuración de la Odrive y observar el comportamiento de los motores brushless bajo este tipo de control avanzado.',
        ],
        tags: ['Control FOC', 'I+D', 'Diseño PCB', 'Impresión 3D'],
        keyFeatures: {
          key1: {
            title: 'Plataforma de Aprendizaje FOC',
            description: 'Primer robot funcional en el que implementé y configuré una Odrive 3.6, sentando las bases para todos mis proyectos futuros con control de motores brushless.',
          },
          key2: {
            title: 'PCB de Integración Personalizada',
            description: 'Diseño de una placa de circuito impreso para conectar directamente el microcontrolador de control principal con la placa Odrive, simplificando el cableado y mejorando la fiabilidad.',
          },
          key3: {
            title: 'Prototipado Rápido con Impresión 3D',
            description: 'Uso intensivo de la impresión 3D para fabricar todo el chasis y los soportes, permitiendo un desarrollo ágil y a bajo costo.',
          },
        },
        galleryImages: {
          gal1: { alt: '', caption: '' },
          gal2: { alt: '', caption: '' },
          gal3: { alt: '', caption: '' },
          gal4: { alt: '', caption: '' },
          galM: { alt: '', caption: '' },
        },
        challenges: 'El principal desafío fue la pronunciada curva de aprendizaje del ecosistema Odrive, incluyendo su configuración, calibración y la programación de la comunicación con el microcontrolador principal. Fue un proceso de mucha prueba y error.',
        learnings: 'Este proyecto fue fundamental. Me permitió comprender en la práctica los beneficios del control FOC, como el alto torque a cero RPM y la respuesta instantánea. La experiencia adquirida aquí fue la base sobre la que se construyeron robots de competencia mucho más complejos, como el BattleBot y "Asura Kabuto".',
      },
      sumoAllJapan2018: {
        title: 'Debut en el Mundial de Sumo de Japón 2018',
        description: 'Primera participación en la "All Japan Robot-Sumo Tournament" en Tokio, una experiencia transformadora tras ganar la competencia nacional de la UTFSM como estudiante de liceo.',
        imageAltText: 'Robot de sumo compitiendo en el mundial de Japón 2018.',
        categoryText: 'Robótica Competitiva',
        dateText: 'Diciembre 2018',
        detailedDescription: [
          'Tras la victoria en la competencia nacional de la UTFSM, obtuve la acreditación para el mundial de sumo de Fujisoft en Tokio. Esta fue mi primera inmersión en una competencia de robótica de élite a nivel global, siendo aún estudiante de enseñanza media.',
          'Para el evento, se mejoró el robot campeón con sensores de mayor precisión y una lógica de control reprogramada. Sin embargo, la brecha tecnológica y estratégica fue evidente, resultando en una derrota en la primera ronda. La experiencia fue un choque con la realidad del más alto nivel competitivo.',
        ],
        tags: ['Internacional', 'Liderazgo', 'Arduino', 'Superación'],
        keyFeatures: {
          key1: {
            title: 'Experiencia Competitiva Mundial',
            description: 'Enfrentar a los mejores equipos de sumo robótico del planeta, obteniendo una perspectiva invaluable sobre el estado del arte de la disciplina.',
          },
          key2: {
            title: 'Actualización de Hardware y Software',
            description: 'Implementación de mejoras en los sistemas de detección y en el algoritmo de control para intentar competir en un escenario mucho más exigente.',
          },
          key3: {
            title: 'Representación Nacional',
            description: 'Tener el honor de representar a Chile en una de las competencias de robótica más prestigiosas del mundo.',
          },
        },
        galleryImages: {
          gal1: { alt: '', caption: '' },
          gal2: { alt: '', caption: '' },
          gal3: { alt: '', caption: '' },
          gal4: { alt: '', caption: '' },
          gal5: { alt: '', caption: '' },
          galM: { alt: '', caption: '' },
        },
        challenges: 'El principal desafío fue el abrumador salto de nivel. Los robots en Japón eran órdenes de magnitud más rápidos y potentes. Adaptarse a un entorno tan profesional con recursos limitados y en tan poco tiempo fue una tarea inmensa.',
        learnings: 'Esta experiencia fue una fuente de motivación crucial. Me reveló las técnicas de construcción, las tecnologías y las estrategias que definían la élite mundial. Me marcó el camino a seguir, encendiendo la chispa para investigar y desarrollar mi propio controlador de motores y volver a competir a ese nivel.',
      },
      sumoUtfsm2018: {
        title: 'Campeón Nacional de Mega Sumo 2018',
        description: 'Obtención del primer lugar en la categoría Mega Sumo Autónomo de la UTFSM, logrando la clasificación al mundial de Japón con un innovador chasis de aluminio y motores brushless.',
        imageAltText: 'Robot campeón nacional de Mega Sumo 2018.',
        categoryText: 'Robótica Competitiva',
        dateText: 'Octubre 2018',
        detailedDescription: [
          'Este proyecto fue mi revancha personal tras la experiencia del año anterior. Con una mayor inversión de tiempo y recursos propios, se diseñó un robot completamente nuevo, abandonando la impresión 3D para el chasis en favor de una estructura de aluminio mucho más robusta.',
          'Fue mi primera incursión en el mundo de los motores brushless para tracción, una decisión que, aunque desafiante, resultó clave para el rendimiento superior del robot. La electrónica, aún basada en Arduino, fue optimizada para un control más eficaz.',
          'El esfuerzo culminó con la obtención del primer lugar en la competencia nacional, un logro que no solo validó el nuevo enfoque de diseño, sino que también me otorgó la anhelada acreditación para el mundial de Japón.',
        ],
        tags: ['Nacional', 'Diseño CNC', 'Arduino', 'Innovación'],
        keyFeatures: {
          key1: {
            title: 'Chasis de Aluminio',
            description: 'Migración a un chasis metálico que proporcionó una rigidez y resistencia a impactos muy superior, una ventaja competitiva decisiva.',
          },
          key2: {
            title: 'Incursión en Motores Brushless',
            description: 'Primera implementación de motores brushless para la tracción, un paso fundamental que abrió la puerta a un nuevo nivel de potencia y velocidad.',
          },
          key3: {
            title: 'Campeonato y Clasificación al Mundial',
            description: 'El rendimiento dominante del robot aseguró la victoria nacional y un cupo para la All Japan Robot-Sumo Tournament en Tokio.',
          },
        },
        galleryImages: {
          gal1: { alt: '', caption: '' },
          gal2: { alt: '', caption: '' },
          gal3: { alt: '', caption: '' },
          gal4: { alt: '', caption: '' },
          gal5: { alt: '', caption: '' },
          galM: { alt: '', caption: '' },
        },
        challenges: 'El mayor desafío técnico fue controlar los motores brushless con ESCs convencionales, que demostraron tener serias limitaciones en torque de arranque y tiempo de respuesta. Fue una lucha constante para hacerlos funcionar de manera efectiva para el sumo.',
        learnings: 'Esta victoria consolidó la importancia de la calidad en el diseño mecánico. Pero, sobre todo, la frustración con los ESCs me dejó una lección imborrable: para explotar el verdadero potencial de los motores brushless, necesitaba un controlador superior. Esa necesidad se convirtió en el objetivo que definiría mi carrera.',
      },
      
      //Saga de robotracer
      robotracerAllJapan2025: {
        title: 'Robotracer V6 en Japón',
        description: 'Culminación de años de desarrollo al competir en la "All Japan Micromouse Contest", llevando nuestro diseño de seguidor de línea con turbina al más alto nivel internacional en Tokio.',
        imageAltText: 'Portada del proyecto Robotracer V6 en Japón',
        categoryText: 'Robótica Competitiva',
        dateText: 'Febrero 2025',
        detailedDescription: [
            'Como resultado de la acreditación obtenida en la competencia nacional, participamos en la prestigiosa "All Japan Micromouse Contest". Este evento representó la prueba definitiva para nuestro diseño, enfrentándonos a los mejores equipos en un escenario de clase mundial.',
            'Las mejoras finales para esta competencia se centraron en la precisión y la fiabilidad. Se integraron encoders magnéticos en las ruedas para implementar un control de velocidad de lazo cerrado, permitiendo fijar velocidades constantes en m/s. Además, se fabricaron nuevas hélices para la turbina en materiales de alta resistencia para maximizar el efecto suelo de forma segura.',
        ],
        tags: ['Internacional', 'STM32 HAL', 'Diseño 3D', 'Control de Motores'],
        keyFeatures: {
            key1: {
                title: 'Control de Velocidad con Encoders',
                description: 'Se implementó un control de velocidad en bucle cerrado utilizando encoders magnéticos, lo que permitió al robot mantener una velocidad constante y precisa, independientemente de la carga o el nivel de la batería.',
            },
            key2: {
                title: 'Optimización de Turbina para Alto Rendimiento',
                description: 'Las hélices de la turbina se fabricaron en resina de alta tenacidad, permitiendo que operara a mayores RPM de forma segura para generar una fuerza descendente superior y mejorar el agarre en curvas.',
            },
            key3: {
                title: 'Puesta a Punto para Pista Internacional',
                description: 'Se realizaron calibraciones finas de los sensores y ajustes en los algoritmos de control para adaptar el comportamiento del robot a las condiciones específicas de la pista oficial en Japón.',
            },
        },
        galleryImages: {
            gal1: { alt: '', caption: '' },
            gal2: { alt: '', caption: '' },
            gal3: { alt: '', caption: '' },
            galM: { alt: '', caption: '' },
        },
        challenges: 'El mayor contratiempo fue la rotura de la turbina y el motor durante las pruebas, lo que exigió una reparación de emergencia con piezas de un dron adquirido en Akihabara. Posteriormente, el uso de un nuevo material de alta adherencia en las ruedas expuso una desalineación mínima en los ejes (producto del desgaste), provocando que el exceso de agarre frenara al robot en las curvas de la pista oficial.',
        learnings: 'La lección fundamental fue que la optimización de un componente puede exponer debilidades ocultas en otros. Aprendimos la importancia crítica de probar cada cambio en condiciones idénticas a las de la competencia y la necesidad de llevar repuestos clave para cada sistema del robot, especialmente en eventos internacionales.',
      },
      robotcontest2025: {
        title: 'Robotracer V5 - Optimización Coreless',
        description: 'Obtención del segundo lugar en la All Chile Robot Contest con una versión más ligera y ágil del robot, optimizada con dos motores coreless de alto rendimiento.',
        imageAltText: 'Portada del proyecto Robotracer V5',
        categoryText: 'Robótica Competitiva',
        dateText: 'Enero 2025',
        detailedDescription: [
            'Para la edición 2024 de la Robot Contest (celebrada en enero 2025), consolidamos nuestro diseño con una versión refinada que se enfrentó a un excelente nivel competitivo, incluyendo un equipo de México. El resultado fue un sólido segundo lugar que validó las mejoras implementadas.',
            'La innovación clave fue la transición de cuatro motores a solo dos motores coreless de alto rendimiento. Este cambio redujo drásticamente el peso y la inercia del robot, mejorando notablemente su agilidad y tiempo de respuesta. A nivel de software, se finalizó la implementación de rutinas de control avanzadas en STM32 HAL, exprimiendo al máximo el nuevo hardware.',
        ],
        tags: ['Nacional', 'STM32 HAL', 'Diseño 3D', 'Optimización'],
        keyFeatures: {
            key1: {
                title: 'Agilidad Mejorada con Motores Coreless',
                description: 'Se reemplazó la configuración de 4 motores por 2 motores coreless, lo que disminuyó significativamente el peso total y mejoró la capacidad de respuesta y la aceleración en curvas.',
            },
            key2: {
                title: 'Optimización de Firmware',
                description: 'Se completó la migración a un código más robusto y optimizado en STM32 HAL, ajustando los parámetros de control para la nueva dinámica del robot y logrando un rendimiento más estable.',
            },
            key3: {
                title: 'Validación de Diseño Competitivo',
                description: 'El robot demostró ser una plataforma fiable y altamente competitiva, confirmando que las decisiones de diseño en torno a la aerodinámica y la electrónica integrada eran las correctas.',
            },
        },
        galleryImages: {
            gal1: { alt: '', caption: '' },
            gal2: { alt: '', caption: '' },
            gal3: { alt: '', caption: '' },
            galM: { alt: '', caption: '' },
        },
        challenges: 'El principal reto técnico fue reajustar por completo los parámetros del controlador PD para un robot mucho más ligero y reactivo. La presencia de competidores internacionales de alto nivel nos obligó a llevar el rendimiento del robot al límite absoluto.',
        learnings: 'Esta competencia reforzó el principio de que, a menudo, "menos es más". La simplificación del tren motriz no solo redujo la complejidad, sino que resultó en una mejora directa del rendimiento. Fue una valiosa experiencia para medir nuestro nivel técnico frente a equipos internacionales.',
      },
      seguidorV5Brc2024: {
        title: 'Robotracer V4 - Rediseño Total y Dominio',
        description: 'Doble primer lugar en la BRC 2024 (categorías Estudiantes y Open) gracias a un rediseño radical que incluyó un microcontrolador STM32H7 y un sensor personalizado de 12 canales.',
        imageAltText: 'Portada del proyecto Robotracer V4',
        categoryText: 'Robótica Competitiva',
        dateText: 'Octubre 2024',
        detailedDescription: [
            'Con la experiencia ganada, y con el apoyo de un equipo español que compartió sus conocimientos, realizamos un rediseño completo del robot para maximizar la eficiencia. La nueva arquitectura separó el chasis de la electrónica, creando una PCB de control mucho más compacta y potente.',
            'El salto tecnológico fue inmenso: migramos a un microcontrolador STM32H7 de alto rendimiento y diseñamos nuestro propio sensor infrarrojo de 12 canales para una lectura de la pista con una resolución sin precedentes en la escena nacional. Además, en un esfuerzo intensivo, migré todo el firmware a las librerías HAL de STM32 en solo tres días antes del evento.',
            'El resultado fue un dominio absoluto en la competencia, logrando un triple podio para el equipo y obteniendo el primer lugar en las dos categorías principales.',
        ],
        tags: ['Nacional', 'STM32 HAL', 'Diseño de PCB', 'Firmware'],
        keyFeatures: {
            key1: {
                title: 'PCB de Control con STM32H7',
                description: 'Se diseñó una nueva PCB de 4 capas con un potente microcontrolador STM32H7, permitiendo un procesamiento de datos mucho más rápido y un control más sofisticado.',
            },
            key2: {
                title: 'Sensor Infrarrojo Personalizado de 12 Canales',
                description: 'Diseñamos y ensamblamos nuestro propio sensor con 12 canales, lo que nos proporcionó una detección de la línea con mayor resolución y precisión que los sensores comerciales de 8 canales.',
            },
            key3: {
                title: 'Migración a Firmware HAL',
                description: 'Se reescribió el código base para utilizar las librerías HAL de STM32, lo que nos dio un control de bajo nivel sobre el hardware, optimizando tiempos de interrupción y eficiencia.',
            },
        },
        galleryImages: {
            gal1: { alt: '', caption: '' },
            gal2: { alt: '', caption: '' },
            gal3: { alt: '', caption: '' },
            galM: { alt: '', caption: '' },
        },
        challenges: 'El desafío más grande fue migrar y depurar todo el firmware a STM32 HAL en un plazo extremadamente ajustado de 3 días. Esto requirió un conocimiento profundo de la arquitectura del microcontrolador y una depuración intensiva para garantizar la estabilidad.',
        learnings: 'Esta experiencia demostró el enorme salto de rendimiento que se obtiene al pasar a un entorno de programación de bajo nivel (HAL vs. Arduino). Consolidó mis habilidades en diseño de PCBs complejas y en el desarrollo de firmware de alto rendimiento bajo presión.',
      },
      robotcontestVerstappen2024: {
        title: 'Robotracer V3 - La Innovación de la Turbina',
        description: 'Primer lugar en la All Chile Robot Contest y clasificación a Japón con "Verstappen", el primer robot en Chile con una turbina de succión para generar efecto suelo.',
        imageAltText: 'Portada del proyecto Robotracer V3 Verstappen',
        categoryText: 'Robótica Competitiva',
        dateText: 'Enero 2024',
        detailedDescription: [
            'Este proyecto marcó un antes y un después en la escena nacional de seguidores de línea. Introdujimos "Verstappen", el primer robot de competencia en Chile en implementar exitosamente una turbina de succión para generar "efecto suelo", una técnica avanzada inspirada en las competencias japonesas.',
            'Sobre la base de la electrónica con STM32, se diseñó un chasis impreso en 3D para integrar una configuración de 4 ruedas motrices y la turbina en el centro. Aunque el diseño era robusto, la ventaja aerodinámica fue decisiva, permitiéndonos tomar curvas a una velocidad muy superior a la de nuestros competidores.',
            'Este hito tecnológico nos aseguró el primer lugar y la acreditación para representar a Chile en la "All Japan Micromouse Contest".',
        ],
        tags: ['Nacional', 'Innovación', 'STM32', 'Diseño 3D'],
        keyFeatures: {
            key1: {
                title: 'Pioneros en Turbina de Succión',
                description: 'Implementamos por primera vez en Chile una turbina para generar efecto suelo, aumentando drásticamente la tracción del robot al crear una zona de baja presión bajo el chasis.',
            },
            key2: {
                title: 'Chasis 4WD Optimizado para Aerodinámica',
                description: 'Se diseñó un cuerpo impreso en 3D que no solo albergaba los 4 motores y la turbina, sino que también gestionaba el flujo de aire para maximizar la fuerza descendente.',
            },
            key3: {
                title: 'Clasificación a Competencia Internacional',
                description: 'El rendimiento superior, producto de la innovación, nos otorgó el primer lugar y el pase para competir en el prestigioso evento de Robotracer en Japón.',
            },
        },
        galleryImages: {
            gal1: { alt: '', caption: '' },
            gal2: { alt: '', caption: '' },
            gal3: { alt: '', caption: '' },
            galM: { alt: '', caption: '' },
        },
        challenges: 'El principal reto fue diseñar un sistema de turbina funcional desde cero, balanceando el consumo energético, el peso adicional y la fuerza de succión generada. La integración de esta nueva tecnología en un chasis impreso en 3D fue un desafío de diseño mecánico complejo.',
        learnings: 'Este proyecto demostró que la innovación disruptiva, inspirada en tecnologías de otras regiones, puede ofrecer una ventaja competitiva abrumadora. Fue un profundo aprendizaje en la aplicación de principios de aerodinámica en la robótica móvil.',
      },
      seguidorStm32Brc2023: {
        title: 'Robotracer V2 - El Salto a STM32',
        description: 'Desarrollo del primer seguidor de línea del equipo con un microcontrolador STM32 y electrónica integrada, sentando las bases técnicas para futuros éxitos.',
        imageAltText: 'Portada del proyecto Robotracer V2 con STM32',
        categoryText: 'Robótica Competitiva',
        dateText: 'Octubre 2023',
        detailedDescription: [
            'En 2023, realizamos un salto cualitativo fundamental en nuestra plataforma de seguidor de línea. Este fue el primer robot en el que diseñé una PCB personalizada que integraba el microcontrolador (STM32) y el driver de motores directamente soldados (SMD), abandonando los módulos de Arduino.',
            'El hardware se potenció con componentes de alto rendimiento, como motores JSumo y ruedas de silicona de alta adherencia, lo que nos dio una clara ventaja mecánica. El robot era visiblemente más rápido que sus competidores en las pruebas.',
            'Lamentablemente, la competencia se vio empañada por un fallo técnico de la organización: la pista de aluminio generaba descargas electrostáticas que dañaron nuestro robot. A pesar de no poder completar la carrera, el diseño demostró su enorme potencial y sentó las bases para el futuro.',
        ],
        tags: ['Nacional', 'STM32', 'Diseño de PCB', 'I+D'],
        keyFeatures: {
            key1: {
                title: 'Migración a Arquitectura STM32',
                description: 'Se abandonó la plataforma Arduino para utilizar un microcontrolador STM32, lo que permitió un procesamiento de datos más rápido, interrupciones más precisas y un control más avanzado.',
            },
            key2: {
                title: 'PCB de Control con Componentes Integrados',
                description: 'Se diseñó la primera PCB personalizada con componentes SMD, integrando el microcontrolador y los drivers de motor para lograr un sistema más compacto, robusto y fiable.',
            },
            key3: {
                title: 'Uso de Componentes de Alto Rendimiento',
                description: 'La incorporación de motores JSumo y ruedas de silicona de alta adherencia proporcionó una tracción y velocidad muy superiores a los componentes estándar utilizados hasta entonces.',
            },
        },
        galleryImages: {
            gal1: { alt: '', caption: '' },
            gal2: { alt: '', caption: '' },
            gal3: { alt: '', caption: '' },
            galM: { alt: '', caption: '' },
        },
        challenges: 'El mayor y más inesperado desafío fue la pista de aluminio de la competencia, que estaba fuera de reglamento y causaba descargas electrostáticas (ESD). Esto provocó reinicios y finalmente quemó los microcontroladores, un problema imposible de solucionar sin herramientas de soldadura SMD.',
        learnings: 'Esta amarga experiencia nos enseñó de primera mano la importancia crítica de incluir protecciones contra ESD en el diseño de PCBs. Además, aprendimos que debemos estar preparados para imprevistos que van más allá del robot, incluyendo fallos en la infraestructura del evento.',
      },
      robotcontest2022: {
        title: 'Robotracer V1 - Debut y Resiliencia',
        description: 'Obtención del segundo lugar en la All Chile Robot Contest tras una intensa jornada de trabajo en equipo que culminó con la reconstrucción del robot en 10 minutos.',
        imageAltText: 'Portada del proyecto Robotracer V1',
        categoryText: 'Robótica Competitiva',
        dateText: 'Noviembre 2022',
        detailedDescription: [
            'Este proyecto marcó nuestro debut como equipo en la categoría de seguidores de línea post-pandemia. Me uní para apoyar a mis compañeros de GRUBB un día antes del evento, utilizando PCBs del proyecto de código abierto "Open Lamborghino" que habíamos fabricado.',
            'Tras una noche de trabajo intensivo para la puesta a punto, nos enfrentamos a la máxima adversidad durante la competencia: el robot principal se quemó. Con el tiempo en contra, tuvimos que ensamblar uno nuevo desde cero en solo 10 minutos con las piezas de repuesto.',
            'A pesar de todo, esta increíble muestra de resiliencia y trabajo en equipo nos permitió asegurar un meritorio segundo lugar, sentando las bases de nuestra trayectoria en la categoría.',
        ],
        tags: ['Nacional', 'Open source', 'Liderazgo', 'Trabajo en Equipo'],
        keyFeatures: {
            key1: {
                title: 'Base en el Proyecto Open Lamborghino',
                description: 'Utilizamos como punto de partida el proyecto de código abierto "Open Lamborghino", lo que nos permitió acelerar el desarrollo y aprender sobre una plataforma ya probada por la comunidad.',
            },
            key2: {
                title: 'Resolución de Problemas Bajo Presión Extrema',
                description: 'El equipo demostró una capacidad excepcional para resolver problemas al ensamblar un robot funcional desde cero en solo 10 minutos durante una competencia en vivo.',
            },
            key3: {
                title: 'Fundamentos del Trabajo en Equipo',
                description: 'El éxito de este proyecto no se basó en la tecnología, sino en la colaboración, la comunicación y la capacidad de apoyarnos mutuamente en los momentos más críticos.',
            },
        },
        galleryImages: {
            gal1: { alt: '', caption: '' },
            gal2: { alt: '', caption: '' },
            gal3: { alt: '', caption: '' },
            gal4: { alt: '', caption: '' },
            galM: { alt: '', caption: '' },
        },
        challenges: 'El desafío principal fue doble: primero, la falta de tiempo para la preparación inicial, y segundo, la crisis de tener que reconstruir el robot en 10 minutos. Fue una prueba extrema de nuestras habilidades técnicas y, sobre todo, de nuestra capacidad para mantener la calma bajo presión.',
        learnings: 'Esta competencia me enseñó el valor incalculable del trabajo en equipo y la importancia de la preparación, no solo del robot principal, sino también de tener repuestos y un plan de contingencia. Fue la base sobre la que construimos todos los desarrollos futuros.',
      },
    },
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
