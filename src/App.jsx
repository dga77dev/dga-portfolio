/*

  Portfolio. Creado por David Godoy Ávila
  Footer: Creado en React - Eres libre de descargarlo, modificarlo y utilizarlo.
*/



// import { useState, useEffect } from "react";
// import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";
import './App.css'
import Header from './components/Header.jsx';
import NavBar from './components/NavBar.jsx';
import ScrollTopButton from './components/ScrollToplButton.jsx';
import Apartado from './components/Apartado.jsx';
import ApartadoAcordeones from './components/ApartadoAcordeones.jsx';
import Footer from './components/Footer.jsx';

export default function App() {

  // Variables

  const job = (
  <>
    💻 Full Stack Developer Jr. <br />
    🎓 Docente en Informática
  </>
  );

  const urllinkedin = "https://www.linkedin.com/in/dga77dev";
  const urlgithub = "https://github.com/dga77dev";
  const miMail = "dga77dev@gmail.com";
  const miTfno = "656270671";
  const sobremi= "<p><b>Apasionado de la informática, la programación y el desarrollo</b> desde una edad temprana. Disfruto creando soluciones funcionales, <b>aportando un enfoque innovador y diferente en cada proyecto</b>.<br/>Me motiva <b>aprender de forma continua</b>, tanto a través de formación reglada como de manera autodidacta, y la aplicación práctica de esos conocimientos en retos reales. Además, tengo gran <b>interés por el marketing digital</b>, especialmente en el <b>posicionamiento SEO y la analítica web</b>, áreas que estudio y desarrollo en proyectos.<br/>Me considero una <b>persona responsable, colaborativa y resolutiva, con vocación por compartir lo aprendido y ayudar a los demás</b>, buscando siempre mejorar, aportar valor y seguir creciendo dentro del ámbito del desarrollo, la tecnología y la docencia.</p>";
  const objetivo = "Mi objetivo es seguir creciendo como profesional del desarrollo, contribuir en proyectos que supongan un reto y mantener siempre una actitud abierta, curiosa y orientada a la mejora constante.";
  const capacidades1 = [
    "Desarrollo web fullstack: Lenguajes: HTML, CSS, JS, React, PHP, Node, ExpressJS.",
    "Crear y consumir Apis en Node y uso de PostMan.",
    "Gestión de bases de datos relacionales: MySQL, MariaDB.",
    "Control de versiones: Git, GitHub, GitHub Desktop o en VSC.",
    "Levantar entorno de trabajo en servidor local: Xampp, Wamp, Mamp, NodeJS.",
    "Administración y gestión en Wordpress.",
    "Administración y gestión de plataformas Moodle.",
    "Uso de entornos Windows, Linux o Mac."
  ];
  const capacidades2 = [
    "Planificar y diseño de clases.",
    "Administración, gestión de plataformas Moodle.",
    "Elaboración de contenido formativo.",
    "Creación y gestión scorm con Exelearning.",
    "Seguimiento a alumnado online."
  ];

  const capacidades3 = [
    "Posicionamiento orgánico SEO.",
    "Posicionamiento pago SEM en Google Ads.",
    "Gestión de Google Search Console.",
    "Gestión de Google Analytics.",
    "Creación de contenido digital."
  ];

    const capacidades4 = [
    "Instalación y configuración de Sistemas Operativos Windows, Linux o Mac.",
    "Uso de terminal Dos.",
    "Instalación y reparación de equipos de sobremesa."
  ];

  const habilidades = ["html", "css", "javascript", "react", "node", "express", "mysql", "php", "bootstrap", "wordpress", "moodle", "powerapps", "git", "github"];

  const formacion = [
    {
      anio: 1997,
      titulo: "FP2 - Técnico Especialista en Informática de Gestión",
      centro: "IES AlBaytar (Benalmádena)",
      descripFormacion: "Metodología de la programación, MSDos, Basic, Clipper, Cobol, Pascal, Ficheros, Dbase III..."
    },

    {
      anio: 2006,
      titulo: "Diseño Web y Multimedia",
      centro: "Ingenia (PTA)",
      descripFormacion: "HTML, CSS, Javascript, Flash."
    },

    {
      anio: 2006,
      titulo: "Técnico en Sistemas Microinformáticos",
      centro: "Autesel (PTA)",
      descripFormacion: "Montaje y reparación de equipos de sobremesa, Instalación de S.O. Windows y Linux, redes y soldadura SMD."
    },

    {
      anio: 2024,
      titulo: "Certificado de Profesionalidad IFCD0210 - Desarrollo de Aplicaciones con Tecnología Web 590 horas.",
      centro: "Mainjobs (Málaga)",
      descripFormacion: (
        <>
            HTML, CSS, JS, Java, BBDD (Diagramas de entidad-relación, normalización, DDL, DDM...), Mysql Workbench, especificación de requisitos.
            Con prácticas en empresa en un desguace del Grupo Redia, donde desarrollamos una aplicación para el control de vehículos que entraban al desguace, usando la tecnología de Microsoft Powerapps.
        </>
      )
    },

    {
      anio: 2025,
      titulo: "Certificado de Profesionalidad SSCE0110 - Habilitación para la docencia FPE Grados A, B y C. 340 horas",
      centro: "Enterprise Formación (Málaga)",
      descripFormacion: (
        <>
          Programar aciones formativas, seleccionar, elaborar, adaptar y utilizar materiales, medios y recursos didácticos para el desarrollo de conenidos formativos, Impartir y tutorizar acciones formativas, Evaluar el proceso de enseñanza-aprendizaje.<br/>
          Con prácticas en SIPADAN, donde realizamos la creación de curso en su propia plataforma de formación realizando el diseño instruccional, la maquetación y la evaluación. Seguimiento y atención telefónica a alumnado que estaban realizando un curo en tele-formación. Creación y curación de contenido, videos con croma.
        </>
      )
    },

    {
      anio: 2026,
      titulo: "IFCD0022 Fullstack developer jr con Javascript. 260 horas",
      centro: "Core Networks (Málaga)",
      descripFormacion: "HTML, CSS, JS, React, Node, Express, Apis, PostMan. Seminarios de Wordpress y Woocommerce, empleo en las TIC."
    }
  ];

  const cursos = [
    {
      anio: 2025,
      titulo: "Google Adwords y sus aplicaciones publicitarias",
      centro: "EAC Formación",
      descripFormacion: "Google Adwords, configuración de anuncios y campañas publicitarias, URL destino y mostrada, análisis de las palabras clave, temas y subtemas, organización de la cueta, coste y ranking de anuncios."
    },
    {
      anio: 2025,
      titulo: "Marketing en buscadores: SEO, SEM y Analítica Web",
      centro: "Smartmind",
      descripFormacion: "Funcionamiento de los buscadores, principios SEO, implementación y explotación de campañas PPC, desarrollo de landing page y testing y análisis de sitios web. "
    },    
    
    {
      anio: 2025,
      titulo: "Administración avanzada de Wordpress",
      centro: "Bilib",
      descripFormacion: "Instalación, primeros pasos, uso de plantilla, instalación plugins y widgets, posicionamiento, monitorización y análisis, matenimiento, seguridad y migración, como crear un plugin."
    },    
    
    {
      anio: 2025,
      titulo: "Google Search Console: Optimiza tu presencia online",
      centro: "MKformación",
      descripFormacion: "Alta en GSC, interfaz y recorrido, permisos, informe de rendimiento, rastreo e indexación, Sitemaps, Core Web Vitals y análisis de los enlaces."
    },    
    
    {
      anio: 2025,
      titulo: "Introducción a la IA Generativa para Formadores de Formadores",
      centro: "Fundación Esplai",
      descripFormacion: "Métodos y herramientas para la enseñanza con IA, Copilot y ChatGPT en el aula, innovación y ética con IA generativa, creación de actividades y planes formativos con IA generativa."
    },    
    
    {
      anio: 2025,
      titulo: "SSCE002PO Acreditación docente para la teleformación: Formador/a ON LINE",
      centro: "REAT",
      descripFormacion: "Características de la formación y el aprendizaje online, funciones, habilidades y competencias del tutor-formador, métodos, estrategias y herramientas tutoriales, la plataforma de teleformación, programas y herramientas informáticas para tutorización del alumnado, comunicación y evaluación en línea y las RR.SS. como elemento de búsqueda de recursos para el aprendizaje."
    },    
    
    {
      anio: 2025,
      titulo: "Gestión de contenidos Web",
      centro: "Inercia Digital",
      descripFormacion: "Tendencias y desarrollo del marketing en la web, la imagen de la empresa en Internet, técnicas de marketing digital, posicionamiento de las web  a través del SEO, Internet móvil y gestión y mantenimiento de páginas web."
    },   
    
    {
      anio: 2025,
      titulo: "Prevención de riesgos laborales básico",
      centro: "Enterprise Formación",
      descripFormacion: "Conceptos básicos de seguridad y salud en el trabajo, riesgos generales y específicos, prevención y protección, riesgos específicos y su prevención , elementos básicos de gestión de prevención y primeros auxilios."
    },    
    
    {
      anio: 2025,
      titulo: "Power Bi IBM Skillbuild",
      centro: "Datahack",
      descripFormacion: "Versiones, interfaz, roles, ciclo de un proyecto, carga de datos, informes, configuración del entorno, conexión a múltiples fuentes de datos, PowerQuery, análisis de datos geográficos, informes en múltiples páginas, jerarquía de fechas y modelos, herramienta filtrado y crear segmentadores."
    },    
    
    {
      anio: 2025,
      titulo: "Power Bi - Analista de datos avanzado ",
      centro: "Udemy",
      descripFormacion: "Desarrollo completo de reporte, conexiones, modelo estrella, ajuste de columnas y condicioneales, condicionales con DAX, optimizar tablas Dim, funciones, medidias con DAX, interacciones y ajustes a slicers, formateando los reportes, marcadores."
    },    
    
    {
      anio: 2024,
      titulo: "SQL IBM Skillbuild. 40 horas",
      centro: "Datahack",
      descripFormacion: "Fundamentos SQL, combinaciones de tablas, herraientas avanzadas."
    },    

    {
      anio: 2024,
      titulo: "Master en SQL Server: Desde cero a profesional",
      centro: "Udemy",
      descripFormacion: "Instalación SQL Server Developer, SQL Server Management Studio, conexiones, fundamentos y estructura de bbdd, relaciones y restricciones entre tablas, DML, cláusulas SQl, funciones, operadores, procedimientos almacenados, variables y subconsultas, transacciones, vistas, triggers, backup y retores y tareas automatizadas."
    },

    {
      anio: 2024,
      titulo: "PHP",
      centro: "Superskill",
      descripFormacion: "Programación en PHP básico."
    },

    {
      anio: 2024,
      titulo: "SEO Avanzado",
      centro: "Open Marketers",
      descripFormacion: "Análisis de palabras claves, arquitectura de la información, SEO on Site, localidazado, movil y para videos, SEO off Page, auditoría y estrategia SEO, monitorización de resultados."
    },

    {
      anio: 2024,
      titulo: "IFCT014PO Implementación del  estándar SCORM 1.2 en plataformas virtuales de aprendizaje",
      centro: "CEINPRO",
      descripFormacion: "El modelo de contenido y empaquetado, el api y el modelo de datos, versiones, aplicaciones prácticas, contenidos didácticos, como se crea un contenido, prueba del contenido, entorno de ejecución, datos scorm de seguimiento y herramientas."
    },

    {
      anio: 2023,
      titulo: "SEO Básico",
      centro: "Open Marketers",
      descripFormacion: "Bases para un posicionamiento eficaz, análisis de palabras clave y arquitectura, SEO on Page, SEO off Page."
    }
  ];

  const trayectoria = [
    { fecha: 1988, lugar: "Mi primer Ordenador", descripcion: "Inicio en programación en un Amstrad CPC464 64k en Basic" },
    { fecha: 1988, lugar: "Academia Cristina", descripcion: "Primeras clases de programación, 386 y 486. Basic y S.O. MSDos" },
    { fecha: 1990, lugar: "Segundo Ordenador", descripcion: "Creación de pequeños juegos en Amiga 500plus" },
    { fecha: 1992, lugar: "IES Al Baytar", descripcion: "Metodología de la programación, Basic, Bases de datos DBaseIII, MSDos, Arquitectura de sistemas" },
    { fecha: 1995, lugar: "IES Al Baytar", descripcion: "Clipper, Cobol, Pascal, DBaseIV, QBasic" }
  ];

  // enlace hace referencia a url del sitio. página hace referencia a enlace interno a otra página
  
  const proyectos = [
    { 
      id: 1,
      nombre: "redStudia", 
      tecs: ["html", "css", "javascript", "php", "moodle", "mysql"], 
      descripcion: "Plataforma de teleformación que comparte entorno propio y con entorno bajo Moodle para pequeños cursos. A la que en un futuro añadiremos un GPT para correguir exámenes y ejercicios.",
      imagen: true,
      video: false,
      pagina: false,
      enlace: false 
    } ,  
    
    { 
      id: 2,
      nombre: "walking malaga", 
      tecs: ["html", "css", "javascript", "php", "mysql", "wordpress"], 
      descripcion: "Web para dar a conocer Málaga y sus municipios de forma inmersiva. Además permite crear una lista de lugares para visitar.",
      imagen: false,
      video: false,
      pagina: false,
      enlace: false
    },

    { 
      id: 3,
      nombre: "CV Portfolio", 
      tecs: ["html", "css", "react"], 
      descripcion: "Este portafolio y curriculum web para mostrar mis habilidades y proyectos.",
      imagen: false,
      video: false,
      pagina: false,
      enlace: false
    },

    { 
      id: 4,
      nombre: "Desguace Redia", 
      tecs: ["powerapps", "sharepoint", "excel"], 
      descripcion: "Prácticas no profesionales, donde creamos en 15 días una aplicación en se recopilan los datos de los vehíulos que entran al desguace (toma de datos y fotos y subida a Sharepoint), para que desde la oficina puedan realizar consultas y edición de datos.",
      imagen: false,
      video: false,
      pagina: false,
      enlace: false
    }
  ];

  const fraseFooter = "Desde los 12 enganchado a la tecla.";

  return (
    <div className="app">
      {/* <Header dark={dark} toggleTheme={toggleTheme} /> */}
      <Header job={job} miMail={miMail} miTfno={miTfno} />        { /* props para pasar la variable a el componente Header*/}

      <NavBar linkedin={urllinkedin} github={urlgithub} />

      <main>

        <Apartado titulo="Sobre mí" descripcion={sobremi} />

        <ApartadoAcordeones titulo="Capacidades" capacidades1={capacidades1} capacidades2={capacidades2} capacidades3={capacidades3} />

        <Apartado titulo="Habilidades Tecnológicas" descripcion={habilidades} />

        <Apartado titulo="Formación" descripcion={formacion} cursos={cursos} />

        <Apartado titulo="Proyectos" descripcion={proyectos} />


      </main>

      <Footer fraseFooter={fraseFooter} />

      <ScrollTopButton />

      {/* Pte poner un mini footer. con frase celebre */}
    </div>
  );

}