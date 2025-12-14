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
import Accordion from './components/Accordion.jsx';
import ApartadoAcordeones from './components/ApartadoAcordeones.jsx';

export default function App() {

  // Variables

  const job = "Full Stack Developer Jr. || Docente FPE Informática";
  const urllinkedin = "https://www.linkedin.com/in/dga77dev";
  const urlgithub = "https://github.com/dga77dev";
  const miMail = "dga77dev@gmail.com";
  const miTfno = "656270671";
  const sobremi = "<p><b>Apasionado de la informática, la programación y el desarrollo</b> desde una edad temprana. Disfruto creando soluciones funcionales y <b>aportando un enfoque innovador y diferente en cada proyecto</b>.<br/>Me motiva aprender de forma continua —tanto mediante formación reglada como de manera autodidacta— y aplicar esos conocimientos en retos reales.</br> Me considero una persona <b>responsable, colaborativa y resolutiva, con vocación por compartir lo aprendido y ayudar a los demás</b> intentando siempre mejorar, aportar valor y seguir creciendo profesionalmente dentro del ámbito del desarrollo, la tecnología y la docencia.</p>";
  const objetivo = "Mi objetivo es seguir creciendo como profesional del desarrollo, contribuir en proyectos que supongan un reto y mantener siempre una actitud abierta, curiosa y orientada a la mejora constante.";
  const capacidades1 = [
    "Desarrollo web fullstack",
    "Gestión de bases de datos relacionales",
    "Control de versiones",
    "Posicionamiento, SEO, SEM, analítica",
    "Levantar entorno local y remoto",
    "Administración, gestión de plataformas Moodle",
    "Elaboración de contenido formativo",
    "Gestión scorm",
    "Seguimiento a alumnado online"
  ];
    const capacidades2 = [
    "Desarrollo web fullstack",
    "Gestión de bases de datos relacionales",
    "Control de versiones",
    "Posicionamiento, SEO, SEM, analítica",
    "Levantar entorno local y remoto",
    "Administración, gestión de plataformas Moodle",
    "Elaboración de contenido formativo",
    "Gestión scorm",
    "Seguimiento a alumnado online"
  ];

  const capacidades3 = [
    "Posicionamiento orgánico SEO",
    "Posicionamiento pago SEM en Google Ads",
    "Gestión de Google Search Console",
    "Gestión de Google Analytics",
    "Creación de contenido digital"
  ];

  const habilidades = ["html", "css", "bootstrap", "javascript", "react", "node", "express", "sql", "php", "wordpress", "PowerApss", "moodle"];

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
      descripFormacion: "HTML, CSS, Javascript, Flash"
    },
    
    {
      anio: 2006,
      titulo: "Técnico en Sistemas Microinformáticos",
      centro: "Autesel (PTA)",
      descripFormacion: "Montaje y reparación de equipos de sobremesa, Instalación de S.O. Windows y Linux, Redes y soldadura SMD."
    },    
    
    {
      anio: 2024,
      titulo: "Certificado de Profesionalidad IFCD0210 - Desarrollo de Aplicaciones con Tecnología Web",
      centro: "Mainjobs (Málaga)",
      descripFormacion: "590h."
    },
    
    {
      anio: 2025,
      titulo: "Certificado de Profesionalidad SSCE0110 - Habilitación para la docencia FPE Grado ABC",
      centro: "Enterprise Formación (Málaga)",
      descripFormacion: "xxxh."
    },

    {
      anio: 2026,
      titulo: "IFCD0022 Fullstack developer jr con Javascript",
      centro: "Core Networks (Málaga)",
      descripFormacion: "260h. Html, CSS, JS, Bases de datos, SQL, React, Node, Express, Apis, PostMan, Wordpress"
    }
  ];

  const trayectoria = [
    {fecha: 1988, lugar: "Mi primer Ordenador", descripcion: "Inicio en programación en un Amstrad CPC464 64k en Basic"},
    {fecha: 1988, lugar: "Academia Cristina", descripcion: "Primeras clases de programación, 386 y 486. Basic y S.O. MSDos"},
    {fecha: 1990, lugar: "Segundo Ordenador", descripcion: "Creación de pequeños juegos en Amiga 500plus"},
    {fecha: 1992, lugar: "IES Al Baytar", descripcion: "Metodología de la programación, Basic, Bases de datos DBaseIII, MSDos, Arquitectura de sistemas"},
    {fecha: 1995, lugar: "IES Al Baytar", descripcion: "Clipper, Cobol, Pascal, DBaseIV, QBasic"}
  ];



  return (
    <div className="app">
      {/* <Header dark={dark} toggleTheme={toggleTheme} /> */}
      <Header job={job} miMail={miMail} miTfno={miTfno} />        { /* props para pasar la variable a el componente Header*/}

      <NavBar linkedin={urllinkedin} github={urlgithub} />

      <main>

        <Apartado titulo="Sobre mí" descripcion={sobremi} />

        <ApartadoAcordeones titulo="Capacidades" capacidades1 = {capacidades1}  capacidades2={capacidades2} capacidades3={capacidades3} />

        <Apartado titulo="Habilidades" descripcion={habilidades} />

        <Apartado titulo="Formación" descripcion={formacion} />

        <p>“Un título te define un día; las ganas te definen toda la vida.”</p>
        <p>“Tu valor no disminuye por alguien que no sabe verlo.”</p>

      </main>

      <ScrollTopButton />

      {/* Pte poner un mini footer. con frase celebre */}
    </div>
  );

}