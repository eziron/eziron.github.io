# Portafolio Personal de Rodrigo Fuentes (eziron.github.io)

¡Bienvenido! Este es el código fuente de mi portafolio personal, donde documento mi trayectoria, proyectos y conocimientos como Ingeniero de Ejecución en Electrónica, especializado en el desarrollo de sistemas embebidos y la robótica competitiva.

[![Deploy to GitHub Pages](https://github.com/eziron/eziron.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/eziron/eziron.github.io/actions/workflows/deploy.yml)

### [➡️ Ver el sitio en vivo ⬅️](https://eziron.github.io)

---

## ✨ Características Principales

Este sitio está diseñado para ser no solo una vitrina de mi trabajo, sino también un recurso técnico.

-   **Portafolio Detallado:** Una sección completa para mostrar mis proyectos más importantes, desde competencias de robótica internacionales hasta trabajos freelance de sistemas de control. Cada proyecto incluye descripciones, galerías de imágenes, desafíos y aprendizajes.
-   **Blog Bilingüe (Español/Inglés):** Artículos técnicos y relatos personales sobre mi camino en la electrónica, la robótica y el desarrollo de software.
-   **Prensa y Medios:** Una recopilación de mis apariciones en medios de comunicación, destacando logros y participaciones en eventos.
-   **Diseño Moderno y Adaptable:** Interfaz limpia y profesional creada con Tailwind CSS y componentes de shadcn/ui, garantizando una excelente experiencia en cualquier dispositivo.
-   **Construido con Astro:** Rendimiento óptimo gracias a la generación de un sitio estático ultrarrápido.
-   **Internacionalización (i18n):** Todo el contenido de la interfaz y los proyectos está disponible en español e inglés.
-   **Despliegue Automático:** Configurado con GitHub Actions para un despliegue continuo en GitHub Pages cada vez que se actualiza la rama `main`.

## 🛠️ Stack Tecnológico

Este proyecto combina tecnologías modernas para lograr un rendimiento y una experiencia de desarrollo de primer nivel:

-   **Framework Principal:** [Astro](https://astro.build/)
-   **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
-   **Componentes Interactivos:** [React](https://react.dev/)
-   **Estilos:** [Tailwind CSS](https://tailwindcss.com/) y [shadcn/ui](https://ui.shadcn.com/)
-   **Contenido del Blog:** [MDX](https://mdxjs.com/) para escribir artículos con componentes interactivos.
-   **Gestión de Estado (Cliente):** [Nanostores](https://nanostores.github.io/) para la lógica de filtrado del blog.
-   **Gestor de Paquetes:** [Bun](https://bun.sh/)

## 🚀 Primeros Pasos

Si deseas clonar y ejecutar este proyecto de forma local, sigue estos pasos:

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/eziron/eziron.github.io.git
    cd eziron.github.io
    ```

2.  **Instala las dependencias:**
    (El proyecto usa Bun por defecto)
    ```bash
    bun install
    ```
    _Si prefieres usar otro gestor de paquetes:_
    ```bash
    # npm install
    # yarn install
    # pnpm install
    ```

3.  **Inicia el servidor de desarrollo:**
    ```bash
    bun dev
    ```
    El sitio estará disponible en `http://localhost:4321`.

## 📁 Estructura del Proyecto

La estructura está organizada por funcionalidades para facilitar la mantenibilidad y escalabilidad.

```text
/
├── public/                   # Activos estáticos (favicons, logos, etc.)
├── src/
│   ├── assets/               # Imágenes optimizadas por Astro (proyectos, blog, etc.)
│   ├── components/           # Componentes reutilizables (UI, Layouts)
│   ├── features/             # Módulos principales del sitio
│   │   ├── blog/             # Lógica y contenido del blog
│   │   ├── media/            # Lógica y contenido de la sección de medios
│   │   └── projects/         # Lógica y contenido de los proyectos del portafolio
│   │
│   ├── i18n/                 # Configuración de internacionalización
│   │   └── ui.ts             # Todas las cadenas de texto de la UI en ES y EN
│   │
│   ├── layouts/              # Plantillas base para las páginas
│   ├── lib/                  # Utilidades y scripts (formateo de fechas, etc.)
│   ├── pages/                # Rutas y páginas del sitio generadas por Astro
│   └── styles/               # Estilos globales
│
├── astro.config.mjs          # Configuración de Astro e integraciones
├── package.json              # Dependencias y scripts del proyecto
└── tsconfig.json             # Configuración de TypeScript
```

## 🧞 Comandos Disponibles

Todos los comandos se ejecutan desde la raíz del proyecto.

| Comando         | Acción                                                          |
| :-------------- | :-------------------------------------------------------------- |
| `bun install`   | Instala las dependencias del proyecto.                          |
| `bun dev`       | Inicia el servidor de desarrollo local con recarga en caliente. |
| `bun build`     | Compila el sitio para producción en la carpeta `./dist/`.       |
| `bun preview`   | Permite previsualizar la compilación de producción localmente.  |
| `bun astro ...` | Ejecuta comandos del CLI de Astro (ej. `astro add`).            |

## 🙏 Créditos y Agradecimientos

Este proyecto fue desarrollado a partir de la plantilla `Astro Portfolio & Bilingual Blog Template` creada por **Bakate**. Agradezco enormemente su trabajo, que sirvió como una excelente base para construir mi portafolio.

-   **Autor Original:** Bakate
-   **Portafolio Original:** [https://www.bakateba.eu/](https://www.bakateba.eu/)