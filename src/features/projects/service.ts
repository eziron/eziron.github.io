// src/features/projects/service.ts

// Import i18n utilities
import { ui, defaultLanguage, type LanguageCode } from '@/i18n/ui';
import type {
  ProjectData,
  SkillData,
  TranslatedProject,
  TranslatedSkill,
} from './type';

// ===================================================================================
//  IMÁGENES DE LOS PROYECTOS
//  Asegúrate de agregar los archivos de imagen correspondientes en la carpeta:
//  /src/assets/projects/
// ===================================================================================

// --- Imágenes FRC 2016 ---
import frcLosAngeles2016Main from '@/assets/projects/frc-los-angeles-2016-main.webp';
import frcLosAngeles2016Gal1 from '@/assets/projects/frc-los-angeles-2016-gal1.webp';
import frcLosAngeles2016Gal2 from '@/assets/projects/frc-los-angeles-2016-gal2.webp';
import frcLosAngeles2016Gal3 from '@/assets/projects/frc-los-angeles-2016-gal3.webp';
import frcLosAngeles2016Gal4 from '@/assets/projects/frc-los-angeles-2016-gal4.webp';
/*
// --- Imágenes Sumo UTFSM 2017 ---
import sumoUtfsm2017Main from '@/assets/projects/sumo-utfsm-2017-main.webp';
import sumoUtfsm2017Gal1 from '@/assets/projects/sumo-utfsm-2017-gal1.webp';
import sumoUtfsm2017Gal2 from '@/assets/projects/sumo-utfsm-2017-gal2.webp';
import sumoUtfsm2017Gal3 from '@/assets/projects/sumo-utfsm-2017-gal3.webp';
*/

// --- Imágenes Sumo UTFSM 2018 ---
import sumoUtfsm2018Main from '@/assets/projects/sumo-utfsm-2018-main.webp';
import sumoUtfsm2018Gal1 from '@/assets/projects/sumo-utfsm-2018-gal1.webp';
import sumoUtfsm2018Gal2 from '@/assets/projects/sumo-utfsm-2018-gal2.webp';
import sumoUtfsm2018Gal3 from '@/assets/projects/sumo-utfsm-2018-gal3.webp';
import sumoUtfsm2018Gal4 from '@/assets/projects/sumo-utfsm-2018-gal4.webp';
import sumoUtfsm2018Gal5 from '@/assets/projects/sumo-utfsm-2018-gal5.webp'; 
/*

// --- Imágenes Robotracer UTFSM 2018 ---
import robotracerUtfsm2018Main from '@/assets/projects/robotracer-utfsm-2018-main.webp';
import robotracerUtfsm2018Gal1 from '@/assets/projects/robotracer-utfsm-2018-gal1.webp';
import robotracerUtfsm2018Gal2 from '@/assets/projects/robotracer-utfsm-2018-gal2.webp';
import robotracerUtfsm2018Gal3 from '@/assets/projects/robotracer-utfsm-2018-gal3.webp';
*/

// --- Imágenes Sumo All Japan 2018 ---
import sumoAllJapan2018Main from '@/assets/projects/sumo-all-japan-2018-main.webp';
import sumoAllJapan2018Gal1 from '@/assets/projects/sumo-all-japan-2018-gal1.webp';
import sumoAllJapan2018Gal2 from '@/assets/projects/sumo-all-japan-2018-gal2.webp';
import sumoAllJapan2018Gal3 from '@/assets/projects/sumo-all-japan-2018-gal3.webp';
import sumoAllJapan2018Gal4 from '@/assets/projects/sumo-all-japan-2018-gal4.webp';
import sumoAllJapan2018Gal5 from '@/assets/projects/sumo-all-japan-2018-gal5.webp';

// --- Imágenes Hexapod 2021 ---
import hexapod2021Main from '@/assets/projects/hexapod-2021-main.webp';
import hexapod2021Gal1 from '@/assets/projects/hexapod-2021-gal1.webp';
import hexapod2021Gal2 from '@/assets/projects/hexapod-2021-gal2.webp';
import hexapod2021Gal3 from '@/assets/projects/hexapod-2021-gal3.webp';
import hexapod2021Gal4 from '@/assets/projects/hexapod-2021-gal4.webp';

// --- Imágenes FOC Experimental 2022 ---
import focExperimental2022Main from '@/assets/projects/foc-experimental-2022-main.webp';
import focExperimental2022Gal1 from '@/assets/projects/foc-experimental-2022-gal1.webp';
import focExperimental2022Gal2 from '@/assets/projects/foc-experimental-2022-gal2.webp';
import focExperimental2022Gal3 from '@/assets/projects/foc-experimental-2022-gal3.webp';
import focExperimental2022Gal4 from '@/assets/projects/foc-experimental-2022-gal4.webp';

// --- Imágenes Battlebot BRC 2022 ---
import battlebotBrc2022Main from '@/assets/projects/battlebot-brc-2022-main.webp';
import battlebotBrc2022Gal1 from '@/assets/projects/battlebot-brc-2022-gal1.webp';
import battlebotBrc2022Gal2 from '@/assets/projects/battlebot-brc-2022-gal2.webp';
import battlebotBrc2022Gal3 from '@/assets/projects/battlebot-brc-2022-gal3.webp'; 
import battlebotBrc2022Gal4 from '@/assets/projects/battlebot-brc-2022-gal4.webp';


// --- Imágenes Robot Contest 2022 ---
import robotcontest2022Main from '@/assets/projects/robotcontest-2022-main.webp';
import robotcontest2022Gal1 from '@/assets/projects/robotcontest-2022-gal1.webp';
import robotcontest2022Gal2 from '@/assets/projects/robotcontest-2022-gal2.webp';
import robotcontest2022Gal3 from '@/assets/projects/robotcontest-2022-gal3.webp';
import robotcontest2022Gal4 from '@/assets/projects/robotcontest-2022-gal4.webp';

// --- Imágenes Seguidor STM32 BRC 2023 ---
import seguidorStm32Brc2023Main from '@/assets/projects/seguidor-stm32-brc-2023-main.webp';
import seguidorStm32Brc2023Gal1 from '@/assets/projects/seguidor-stm32-brc-2023-gal1.webp';
import seguidorStm32Brc2023Gal2 from '@/assets/projects/seguidor-stm32-brc-2023-gal2.webp';
import seguidorStm32Brc2023Gal3 from '@/assets/projects/seguidor-stm32-brc-2023-gal3.webp';

// --- Imágenes Sumo Asura Kabuto 2023 ---
import sumoAsuraKabuto2023Main from '@/assets/projects/sumo-asura-kabuto-2023-main.webp';
import sumoAsuraKabuto2023Gal1 from '@/assets/projects/sumo-asura-kabuto-2023-gal1.webp';
import sumoAsuraKabuto2023Gal2 from '@/assets/projects/sumo-asura-kabuto-2023-gal2.webp';
import sumoAsuraKabuto2023Gal3 from '@/assets/projects/sumo-asura-kabuto-2023-gal3.webp';
import sumoAsuraKabuto2023Gal4 from '@/assets/projects/sumo-asura-kabuto-2023-gal4.webp';

// --- Imágenes Robot Contest Verstappen 2024 ---
import robotcontestVerstappen2024Main from '@/assets/projects/robotcontest-verstappen-2024-main.webp';
import robotcontestVerstappen2024Gal1 from '@/assets/projects/robotcontest-verstappen-2024-gal1.webp';
import robotcontestVerstappen2024Gal2 from '@/assets/projects/robotcontest-verstappen-2024-gal2.webp';
import robotcontestVerstappen2024Gal3 from '@/assets/projects/robotcontest-verstappen-2024-gal3.webp';

// --- Imágenes Seguidor v5 BRC 2024 ---
import seguidorV5Brc2024Main from '@/assets/projects/seguidor-v5-brc-2024-main.webp';
import seguidorV5Brc2024Gal1 from '@/assets/projects/seguidor-v5-brc-2024-gal1.webp';
import seguidorV5Brc2024Gal2 from '@/assets/projects/seguidor-v5-brc-2024-gal2.webp';
import seguidorV5Brc2024Gal3 from '@/assets/projects/seguidor-v5-brc-2024-gal3.webp';

// --- Imágenes Proyecto de Título FOC 2024 ---
import proyectoTituloFoc2024Main from '@/assets/projects/proyecto-titulo-foc-2024-main.webp';
import proyectoTituloFoc2024Gal1 from '@/assets/projects/proyecto-titulo-foc-2024-gal1.webp';
import proyectoTituloFoc2024Gal2 from '@/assets/projects/proyecto-titulo-foc-2024-gal2.webp';
import proyectoTituloFoc2024Gal3 from '@/assets/projects/proyecto-titulo-foc-2024-gal3.webp';
import proyectoTituloFoc2024Gal4 from '@/assets/projects/proyecto-titulo-foc-2024-gal4.webp';

// --- Imágenes Robot Contest 2025 ---
import robotcontest2025Main from '@/assets/projects/robotcontest-2025-main.webp';
import robotcontest2025Gal1 from '@/assets/projects/robotcontest-2025-gal1.webp';
import robotcontest2025Gal2 from '@/assets/projects/robotcontest-2025-gal2.webp';
import robotcontest2025Gal3 from '@/assets/projects/robotcontest-2025-gal3.webp';

// --- Imágenes Freelance Mesas 2025 ---
import freelanceMesas2025Main from '@/assets/projects/freelance-mesas-2025-main.webp';
import freelanceMesas2025Gal1 from '@/assets/projects/freelance-mesas-2025-gal1.webp';
import freelanceMesas2025Gal2 from '@/assets/projects/freelance-mesas-2025-gal2.webp';
import freelanceMesas2025Gal3 from '@/assets/projects/freelance-mesas-2025-gal3.webp';
import freelanceMesas2025Gal4 from '@/assets/projects/freelance-mesas-2025-gal4.webp'; 

// --- Imágenes Robotracer All Japan 2025 ---
import robotracerAllJapan2025Main from '@/assets/projects/robotracer-all-japan-2025-main.webp';
import robotracerAllJapan2025Gal1 from '@/assets/projects/robotracer-all-japan-2025-gal1.webp';
import robotracerAllJapan2025Gal2 from '@/assets/projects/robotracer-all-japan-2025-gal2.webp';
import robotracerAllJapan2025Gal3 from '@/assets/projects/robotracer-all-japan-2025-gal3.webp';

/*

// --- Imágenes Freelance Bobinadora 2025 ---
import freelanceBobinadora2025Main from '@/assets/projects/freelance-bobinadora-2025-main.webp';
import freelanceBobinadora2025Gal1 from '@/assets/projects/freelance-bobinadora-2025-gal1.webp';
import freelanceBobinadora2025Gal2 from '@/assets/projects/freelance-bobinadora-2025-gal2.webp';
import freelanceBobinadora2025Gal3 from '@/assets/projects/freelance-bobinadora-2025-gal3.webp';
*/
// ===================================================================================
//  LISTA DE PROYECTOS
// ===================================================================================

const projectsListUnsorted: Array<ProjectData> = [
  /*
  {
    id: 'freelanceBobinadora2025',
    slug: 'controlador-bobinadora-cobre',
    imageUrl: freelanceBobinadora2025Main,
    codeUrl: '',
    tags: ['Freelance', 'STM32 HAL', 'Firmware', 'Control de Motores'],
    category: 'Desarrollo para Cliente',
    date: '2025-04-01',
    keyFeatures: [
      { id: 'algoritmoTrapezoidal' },
      { id: 'libreriaNoBloqueante' },
      { id: 'desarrolloRemotoAvanzado' },
    ],
    technologiesUsed: [
      { id: 'cplusplus', name: 'C++' },
      { id: 'stm32', name: 'STM32 HAL' },
      { id: 'motoresPasoAPaso', name: 'Motores PaP' },
    ],
    galleryImages: [
      { id: 'gal1', src: freelanceBobinadora2025Gal1 },
      { id: 'gal2', src: freelanceBobinadora2025Gal2 },
      { id: 'gal3', src: freelanceBobinadora2025Gal3 },
    ],
  },
  */
  {
    id: 'robotracerAllJapan2025',
    slug: 'mundial-robotracer-japon-2025',
    imageUrl: robotracerAllJapan2025Main,
    codeUrl: '',
    tags: ['Mundial', 'Japón', 'Análisis de Fallos', 'Ingeniería'],
    category: 'Robótica Competitiva',
    date: '2025-02-15',
    keyFeatures: [
      { id: 'integracionEncoders' },
      { id: 'gestionCrisis' },
      { id: 'aprendizajeCritico' },
    ],
    technologiesUsed: [
      { id: 'stm32', name: 'STM32 HAL' },
      { id: 'encoders', name: 'Encoders' },
      { id: 'analisisCausaRaiz', name: 'Análisis Causa-Raíz' },
    ],
    galleryImages: [
      { id: 'gal1', src: robotracerAllJapan2025Gal1 },
      { id: 'gal2', src: robotracerAllJapan2025Gal2 },
      { id: 'gal3', src: robotracerAllJapan2025Gal3 },
      { id: 'galM', src: robotracerAllJapan2025Main },
    ],
  },
  
  {
    id: 'freelanceMesas2025',
    slug: 'controlador-mesas-flotantes',
    imageUrl: freelanceMesas2025Main,
    codeUrl: '',
    tags: ['Freelance', 'Diseño de PCB', 'Electrónica Industrial', 'Seguridad'],
    category: 'Desarrollo para Cliente',
    date: '2025-01-30',
    keyFeatures: [
      { id: 'disenoRobusto' },
      { id: 'aislamientoGalvanico' },
      { id: 'gestionProyectoIntegral' },
    ],
    technologiesUsed: [
      { id: 'stm32', name: 'STM32 HAL' },
      { id: 'eagle', name: 'Autodesk Eagle' },
      { id: 'reles', name: 'Relés de Potencia' },
      { id: 'optoacopladores', name: 'Optoacopladores' },
    ],
    galleryImages: [
      { id: 'gal1', src: freelanceMesas2025Gal1 },
      { id: 'gal2', src: freelanceMesas2025Gal2 },
      { id: 'gal3', src: freelanceMesas2025Gal3 },
      { id: 'gal4', src: freelanceMesas2025Gal4 },
      { id: 'galM', src: freelanceMesas2025Main },
    ],
  },
  {
    id: 'robotcontest2025',
    slug: 'robot-contest-2025-segundo-lugar',
    imageUrl: robotcontest2025Main,
    codeUrl: '',
    tags: ['2º Lugar', 'Internacional', 'Optimización', 'Motores Coreless'],
    category: 'Robótica Competitiva',
    date: '2025-01-15',
    keyFeatures: [
      { id: 'segundoLugarInternacional' },
      { id: 'transicionMotoresCoreless' },
      { id: 'mejoraTiempoRespuesta' },
    ],
    technologiesUsed: [
      { id: 'motoresCoreless', name: 'Motores Coreless' },
      { id: 'stm32', name: 'STM32 HAL' },
      { id: 'optimizacionMecatronica', name: 'Optimización Mecatrónica' },
    ],
    galleryImages: [
      { id: 'gal1', src: robotcontest2025Gal1 },
      { id: 'gal2', src: robotcontest2025Gal2 },
      { id: 'gal3', src: robotcontest2025Gal3 },
      { id: 'galM', src: robotcontest2025Main },
    ],
  },
  
  {
    id: 'proyectoTituloFoc2024',
    slug: 'proyecto-titulo-controlador-foc',
    imageUrl: proyectoTituloFoc2024Main,
    codeUrl: '',
    tags: ['Proyecto de Título', 'Control FOC', 'STM32', 'Electrónica de Potencia'],
    category: 'Investigación y Desarrollo',
    date: '2025-03-31',
    keyFeatures: [
      { id: 'disenoDriverFoc' },
      { id: 'pcb4Capas' },
      { id: 'notaMaxima' },
    ],
    technologiesUsed: [
      { id: 'controlFoc', name: 'Control FOC' },
      { id: 'c', name: 'Lenguaje C' },
      { id: 'stm32', name: 'STM32' },
      { id: 'eagle', name: 'Autodesk Eagle' },
    ],
    galleryImages: [
      { id: 'gal1', src: proyectoTituloFoc2024Gal1 },
      { id: 'gal2', src: proyectoTituloFoc2024Gal2 },
      { id: 'gal3', src: proyectoTituloFoc2024Gal3 },
      { id: 'gal4', src: proyectoTituloFoc2024Gal4 },
      { id: 'galM', src: proyectoTituloFoc2024Main },
    ],
  },
  {
    id: 'seguidorV5Brc2024',
    slug: 'brc-2024-doble-primer-lugar',
    imageUrl: seguidorV5Brc2024Main,
    codeUrl: '',
    tags: ['Campeón', '1er Lugar', 'STM32 HAL', 'Firmware', 'Innovación'],
    category: 'Robótica Competitiva',
    date: '2024-10-01',
    keyFeatures: [
      { id: 'doblePrimerLugar' },
      { id: 'migracionHal' },
      { id: 'disenoSensor12Canales' },
    ],
    technologiesUsed: [
      { id: 'stm32', name: 'STM32H7 (HAL)' },
      { id: 'cplusplus', name: 'C++' },
      { id: 'disenoSensores', name: 'Diseño de Sensores IR' },
    ],
    galleryImages: [
      { id: 'gal1', src: seguidorV5Brc2024Gal1 },
      { id: 'gal2', src: seguidorV5Brc2024Gal2 },
      { id: 'gal3', src: seguidorV5Brc2024Gal3 },
      { id: 'galM', src: seguidorV5Brc2024Main },
    ],
  },
  {
    id: 'robotcontestVerstappen2024',
    slug: 'robot-contest-2024-verstappen-turbina',
    imageUrl: robotcontestVerstappen2024Main,
    codeUrl: '',
    tags: ['Campeón', '1er Lugar', 'Innovación', 'Aerodinámica'],
    category: 'Robótica Competitiva',
    date: '2024-01-15',
    keyFeatures: [
      { id: 'primerLugarNacional' },
      { id: 'innovacionTurbinaSuccion' },
      { id: 'acreditacionMundial' },
    ],
    technologiesUsed: [
      { id: 'efectoSuelo', name: 'Efecto Suelo' },
      { id: 'stm32', name: 'STM32' },
      { id: 'impresion3d', name: 'Diseño 3D Avanzado' },
    ],
    galleryImages: [
      { id: 'gal1', src: robotcontestVerstappen2024Gal1 },
      { id: 'gal2', src: robotcontestVerstappen2024Gal2 },
      { id: 'gal3', src: robotcontestVerstappen2024Gal3 },
      { id: 'galM', src: robotcontestVerstappen2024Main },
    ],
  },
  
  {
    id: 'sumoAsuraKabuto2023',
    slug: 'mega-sumo-asura-kabuto-2023',
    imageUrl: sumoAsuraKabuto2023Main,
    codeUrl: '',
    tags: ['Mundial', 'Japón', 'Diseño CNC', 'Electrónica de Potencia'],
    category: 'Robótica Competitiva',
    date: '2023-12-01',
    keyFeatures: [
      { id: 'chasisAluminio7075' },
      { id: 'estrategiaTanque' },
      { id: 'gestionPatrocinios' },
    ],
    technologiesUsed: [
      { id: 'controlFoc', name: 'Control FOC (Odrive)' },
      { id: 'disenoCnc', name: 'Diseño CNC' },
      { id: 'motoresBrushless', name: 'Motores Brushless de Alta Potencia' },
    ],
    galleryImages: [
      { id: 'gal1', src: sumoAsuraKabuto2023Gal1 },
      { id: 'gal2', src: sumoAsuraKabuto2023Gal2 },
      { id: 'gal3', src: sumoAsuraKabuto2023Gal3 },
      { id: 'gal4', src: sumoAsuraKabuto2023Gal4 },
      { id: 'galM', src: sumoAsuraKabuto2023Main },
    ],
  },
  {
    id: 'seguidorStm32Brc2023',
    slug: 'brc-2023-seguidor-stm32',
    imageUrl: seguidorStm32Brc2023Main,
    codeUrl: '',
    tags: ['STM32', 'Diseño de PCB', 'SMD', 'Análisis de Fallos'],
    category: 'Robótica Competitiva',
    date: '2023-10-01',
    keyFeatures: [
      { id: 'primeraPcbStm32' },
      { id: 'rendimientoSuperior' },
      { id: 'diagnosticoFalloEsd' },
    ],
    technologiesUsed: [
      { id: 'stm32', name: 'STM32' },
      { id: 'electronicaSmd', name: 'Electrónica SMD' },
      { id: 'eagle', name: 'Autodesk Eagle' },
    ],
    galleryImages: [
      { id: 'gal1', src: seguidorStm32Brc2023Gal1 },
      { id: 'gal2', src: seguidorStm32Brc2023Gal2 },
      { id: 'gal3', src: seguidorStm32Brc2023Gal3 },
      { id: 'galM', src: seguidorStm32Brc2023Main },
    ],
  },
  {
    id: 'robotcontest2022',
    slug: 'robot-contest-2022-segundo-lugar',
    imageUrl: robotcontest2022Main,
    codeUrl: '',
    tags: ['2º Lugar', 'Open Source', 'Resolución de Problemas'],
    category: 'Robótica Competitiva',
    date: '2022-11-01',
    keyFeatures: [
      { id: 'segundoLugarNacional' },
      { id: 'reparacionEmergencia' },
      { id: 'trabajoBajoPresion' },
    ],
    technologiesUsed: [
      { id: 'arduino', name: 'Arduino Nano' },
      { id: 'openLamborghino', name: 'Open Lamborghino' },
    ],
    galleryImages: [
      { id: 'gal1', src: robotcontest2022Gal1 },
      { id: 'gal2', src: robotcontest2022Gal2 },
      { id: 'gal3', src: robotcontest2022Gal3 },
      { id: 'gal4', src: robotcontest2022Gal4 },
      { id: 'galM', src: robotcontest2022Main },
    ],
  },
  
  {
    id: 'battlebotBrc2022',
    slug: 'brc-2022-battlebot',
    imageUrl: battlebotBrc2022Main,
    codeUrl: '',
    tags: ['BattleBot', 'Control FOC', 'Odrive', 'Diseño Mecatrónico'],
    category: 'Robótica Competitiva',
    date: '2022-10-30',
    keyFeatures: [
      { id: 'aplicacionFocCombate' },
      { id: 'estructuraMixta' },
      { id: 'pcbCompacta' },
    ],
    technologiesUsed: [
      { id: 'controlFoc', name: 'Control FOC (Odrive)' },
      { id: 'motoresBrushless', name: 'Motores Brushless' },
      { id: 'disenoMecatronico', name: 'Diseño Mecatrónico' },
    ],
    galleryImages: [
      { id: 'gal1', src: battlebotBrc2022Gal1 },
      { id: 'gal2', src: battlebotBrc2022Gal2 },
      { id: 'gal3', src: battlebotBrc2022Gal3 },
      { id: 'gal4', src: battlebotBrc2022Gal4 },
      { id: 'galM', src: battlebotBrc2022Main },
    ],
  },
  {
    id: 'focExperimental2022',
    slug: 'prototipo-experimental-foc-2022',
    imageUrl: focExperimental2022Main,
    codeUrl: '',
    tags: ['Control FOC', 'Odrive', 'Experimentación', 'Prototipado'],
    category: 'Investigación y Desarrollo',
    date: '2022-09-01',
    keyFeatures: [
      { id: 'primeraImplementacionFoc' },
      { id: 'disenoPcbShield' },
      { id: 'plataformaModular' },
    ],
    technologiesUsed: [
      { id: 'controlFoc', name: 'Control FOC (Odrive 3.6)' },
      { id: 'motoresBrushless', name: 'Motores Brushless' },
      { id: 'impresion3d', name: 'Impresión 3D' },
    ],
    galleryImages: [
      { id: 'gal1', src: focExperimental2022Gal1 },
      { id: 'gal2', src: focExperimental2022Gal2 },
      { id: 'gal3', src: focExperimental2022Gal3 },
      { id: 'gal4', src: focExperimental2022Gal4 },
      { id: 'galM', src: focExperimental2022Main },
    ],
  },
  
  {
    id: 'hexapod2021',
    slug: 'robot-hexapodo-autonomo-2021',
    imageUrl: hexapod2021Main,
    codeUrl: '',
    tags: ['Python', 'Cinemática Inversa', 'Raspberry Pi', 'Diseño de PCB'],
    category: 'Proyectos Personales',
    date: '2021-08-01',
    keyFeatures: [
      { id: 'desarrolloDesdeCero' },
      { id: 'primerPatrocinioInternacional' },
      { id: 'integracionTotal' },
    ],
    technologiesUsed: [
      { id: 'python', name: 'Python' },
      { id: 'cinematicaInversa', name: 'Cinemática Inversa' },
      { id: 'raspberryPi', name: 'Raspberry Pi' },
      { id: 'eagle', name: 'Autodesk Eagle' },
    ],
    galleryImages: [
      { id: 'gal1', src: hexapod2021Gal1 },
      { id: 'gal2', src: hexapod2021Gal2 },
      { id: 'gal3', src: hexapod2021Gal3 },
      { id: 'gal4', src: hexapod2021Gal4 },
      { id: 'galM', src: hexapod2021Main },
    ],
  },
  
  {
    id: 'sumoAllJapan2018',
    slug: 'mundial-sumo-japon-2018',
    imageUrl: sumoAllJapan2018Main,
    codeUrl: '',
    tags: ['Mundial', 'Japón', 'Competencia Internacional'],
    category: 'Robótica Competitiva',
    date: '2018-12-01',
    keyFeatures: [
      { id: 'representacionNacional' },
      { id: 'experienciaInternacional' },
      { id: 'mejoraContinua' },
    ],
    technologiesUsed: [
      { id: 'arduino', name: 'Arduino' },
      { id: 'motoresBrushless', name: 'Motores Brushless' },
    ],
    galleryImages: [
      { id: 'gal1', src: sumoAllJapan2018Gal1 },
      { id: 'gal2', src: sumoAllJapan2018Gal2 },
      { id: 'gal3', src: sumoAllJapan2018Gal3 },
      { id: 'gal4', src: sumoAllJapan2018Gal4 },
      { id: 'gal5', src: sumoAllJapan2018Gal5 },
      { id: 'galM', src: sumoAllJapan2018Main },
    ],
  },
  /*
  {
    id: 'robotracerUtfsm2018',
    slug: 'robotracer-utfsm-2018',
    imageUrl: robotracerUtfsm2018Main,
    codeUrl: '',
    tags: ['Seguidor de Línea', 'Experimentación', 'Arduino'],
    category: 'Robótica Competitiva',
    date: '2018-10-02',
    keyFeatures: [
      { id: 'primeraAproximacionSeguidor' },
      { id: 'aprendizajeDesafios' },
    ],
    technologiesUsed: [
      { id: 'arduino', name: 'Arduino' },
      { id: 'sensoresIr', name: 'Sensores Infrarrojos' },
    ],
    galleryImages: [
      { id: 'gal1', src: robotracerUtfsm2018Gal1 },
      { id: 'gal2', src: robotracerUtfsm2018Gal2 },
      { id: 'gal3', src: robotracerUtfsm2018Gal3 },
    ],
  },
  */
  {
    id: 'sumoUtfsm2018',
    slug: 'campeon-nacional-mega-sumo-2018',
    imageUrl: sumoUtfsm2018Main,
    codeUrl: '',
    tags: ['Campeón', '1er Lugar', 'Motores Brushless', 'Diseño Mecánico'],
    category: 'Robótica Competitiva',
    date: '2018-10-01',
    keyFeatures: [
      { id: 'primerLugarNacional' },
      { id: 'incursionBrushless' },
      { id: 'chasisAluminio' },
    ],
    technologiesUsed: [
      { id: 'motoresBrushless', name: 'Motores Brushless' },
      { id: 'arduino', name: 'Arduino' },
      { id: 'disenoMecanico', name: 'Diseño en Aluminio' },
    ],
    galleryImages: [
      { id: 'gal1', src: sumoUtfsm2018Gal1 },
      { id: 'gal2', src: sumoUtfsm2018Gal2 },
      { id: 'gal3', src: sumoUtfsm2018Gal3 },
      { id: 'gal4', src: sumoUtfsm2018Gal4 },
      { id: 'gal5', src: sumoUtfsm2018Gal5 },
      { id: 'galM', src: sumoUtfsm2018Main },
    ],
  },
  
  /*
  {
    id: 'sumoUtfsm2017',
    slug: 'fundacion-grupo-robotica-liceo-2017',
    imageUrl: sumoUtfsm2017Main,
    codeUrl: '',
    tags: ['Liderazgo', 'Sumo Robótico', 'Diseño 3D', 'Arduino'],
    category: 'Iniciativas de Liderazgo',
    date: '2017-10-01',
    keyFeatures: [
      { id: 'fundacionGrupo' },
      { id: 'primerDiseno3d' },
      { id: 'aprendizajeResiliencia' },
    ],
    technologiesUsed: [
      { id: 'arduino', name: 'Arduino' },
      { id: 'inventor', name: 'Autodesk Inventor' },
      { id: 'impresion3d', name: 'Impresión 3D' },
    ],
    galleryImages: [
      { id: 'gal1', src: sumoUtfsm2017Gal1 },
      { id: 'gal2', src: sumoUtfsm2017Gal2 },
      { id: 'gal3', src: sumoUtfsm2017Gal3 },
    ],
  },
  */
  {
    id: 'frcLosAngeles2016',
    slug: 'first-robotics-competition-2016',
    imageUrl: frcLosAngeles2016Main,
    codeUrl: '',
    tags: ['FIRST Robotics', 'Electrónica', 'Competencia Internacional'],
    category: 'Robótica Competitiva',
    date: '2016-04-01',
    keyFeatures: [
      { id: 'primeraExperienciaCompetitiva' },
      { id: 'cableadoEstructurado' },
      { id: 'trabajoEquipo' },
    ],
    technologiesUsed: [
      { id: 'integracionSistemas', name: 'Integración de Sistemas' },
      { id: 'cableado', name: 'Cableado Estructurado' },
    ],
    galleryImages: [
      { id: 'gal1', src: frcLosAngeles2016Gal1 },
      { id: 'gal2', src: frcLosAngeles2016Gal2 },
      { id: 'gal3', src: frcLosAngeles2016Gal3 },
      { id: 'gal4', src: frcLosAngeles2016Gal4 },
      { id: 'galM', src: frcLosAngeles2016Main },
    ],
  },
];


// ===================================================================================
//  FUNCIONES DEL SERVICIO (NO MODIFICAR)
// ===================================================================================

export const projectsList = [...projectsListUnsorted].sort((a, b) => {
  // Sort by date, most recent first. Ensure 'date' is a valid date string.
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  return dateB.getTime() - dateA.getTime();
});

// Helper function to translate a single project
function translateProject(
  project: ProjectData,
  lang: LanguageCode
): TranslatedProject {
  type ProjectIdKey =
    keyof (typeof ui)[typeof defaultLanguage]['projectsContent'];
  const currentProjectId = project.id as ProjectIdKey;

  const projectContentSource = ui[lang]?.projectsContent?.[currentProjectId]
    ? ui[lang].projectsContent
    : ui[defaultLanguage].projectsContent;

  const i18nData = projectContentSource[currentProjectId];

  if (!i18nData) {
    // Fallback if translation for the project ID is missing
    // This might happen if i18n/ui.ts is not updated after adding a new project
    console.warn(
      `Translation missing for project ID: ${project.id} in language: ${lang}. Using default values.`
    );
    return {
      ...project,
      title: project.id, // Fallback title
      description: 'Description missing for this project.', // Fallback description
      imageAltText: 'Placeholder image', // Fallback alt text
      categoryText: project.category,
      dateText: project.date,
      detailedDescription: 'Detailed description missing.',
      keyFeaturesTranslated:
        project.keyFeatures?.map((kf) => ({
          ...kf,
          title: kf.id,
          description: 'N/A',
        })) ?? [],
      galleryImagesTranslated:
        project.galleryImages?.map((gi) => ({
          ...gi,
          alt: 'N/A',
          caption: 'N/A',
        })) ?? [],
      challenges: 'Challenges information missing.',
      learnings: 'Learnings information missing.',
    };
  }

  const keyFeaturesTranslated =
    project.keyFeatures?.map((kf) => {
      const typedKeyFeatures = i18nData?.keyFeatures as Record<
        string,
        { title: string; description: string } | undefined
      >;
      const featureTranslations = typedKeyFeatures?.[kf.id] ?? {
        title: kf.id,
        description: 'Description missing',
      };
      return {
        ...kf,
        title: featureTranslations.title,
        description: featureTranslations.description,
      };
    }) ?? [];

  const galleryImagesTranslated =
    project.galleryImages?.map((gi) => {
      const typedGalleryImages = i18nData?.galleryImages as Record<
        string,
        { alt: string; caption: string } | undefined
      >;
      const imageTranslations = typedGalleryImages?.[gi.id] ?? {
        alt: `Alt text for ${gi.id} missing`,
        caption: '',
      };
      return {
        ...gi, // This includes src and id
        alt: imageTranslations.alt,
        caption: imageTranslations.caption,
      };
    }) ?? [];

  return {
    ...project,
    title: i18nData.title,
    description: i18nData.description,
    imageAltText: i18nData.imageAltText,
    categoryText: i18nData.categoryText ?? project.category,
    dateText: i18nData.dateText ?? project.date,
    detailedDescription:
      i18nData?.detailedDescription ?? 'Detailed description missing',
    keyFeaturesTranslated,
    galleryImagesTranslated,
    challenges: i18nData?.challenges ?? 'Challenges information missing',
    learnings: i18nData?.learnings ?? 'Learnings information missing',
  };
}

// Function to get projects with translated content
export function getTranslatedProjects(
  lang: LanguageCode | undefined
): Array<TranslatedProject> {
  const currentLang = lang || defaultLanguage;
  return projectsList.map((project) => translateProject(project, currentLang));
}

// Function to get a single project by its slug (untranslated)
export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projectsList.find((project) => project.slug === slug);
}

// Function to get a single translated project by its slug
export function getTranslatedProjectBySlug(
  slug: string,
  lang: LanguageCode | undefined
): TranslatedProject | undefined {
  const project = getProjectBySlug(slug);
  if (!project) {
    return undefined;
  }
  const currentLang = lang || defaultLanguage;
  return translateProject(project, currentLang);
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
