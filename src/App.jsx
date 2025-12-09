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

export default function App() {

  // Variables

  const job = "Full Stack Developer Jr. || Docente FPE Informática";
  const urllinkedin = "https://www.linkedin.com/in/dga77dev";
  const urlgithub = "https://github.com/dga77dev";
  const miMail = "dga77dev@gmail.com";
  const miTfno = "656270671";
  const sobremi = "<p><b>Apasionado de la informática, la programación y el desarrollo</b> desde una edad temprana. Disfruto creando soluciones funcionales y <b>aportando un enfoque innovador y diferente en cada proyecto</b>.<br/>Me motiva aprender de forma continua —tanto mediante formación reglada como de manera autodidacta— y aplicar esos conocimientos en retos reales.</br> Me considero una persona <b>responsable, colaborativa y resolutiva, con vocación por compartir lo aprendido y ayudar a los demás</b> intentando siempre mejorar, aportar valor y seguir creciendo profesionalmente dentro del ámbito del desarrollo, la tecnología y la docencia.</p>";
  const objetivo = "Mi objetivo es seguir creciendo como profesional del desarrollo, contribuir en proyectos que supongan un reto y mantener siempre una actitud abierta, curiosa y orientada a la mejora constante.";
  const capacidades = [
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

  /* minúsculas. Es para cargar logotipos */ 
  const habilidades = [
    "html", "css", "bootstrap", "javascript", "react", "node", "express", "sql", "php",
    "wordpress", "woocommerce", "moodle", "gsc", "analitics", "ads", "powerbi", "powerapps",
    "office"
  ]

  return (
    <div className="app">
      {/* <Header dark={dark} toggleTheme={toggleTheme} /> */}
      <Header job={job} miMail={miMail} miTfno={miTfno} />        { /* props para pasar la variable a el componente Header*/}

      <NavBar linkedin={urllinkedin} github={urlgithub} />

      <main>

        <Apartado titulo="Sobre mí" descripcion={sobremi} />

        <Apartado titulo="Capacidades" descripcion={capacidades} />
        {/*}
        <Apartado titulo="Capacidades" descripcion={capacidades} />
        <Apartado titulo="Habilidades" descripcion={habilidades} />
        <Apartado titulo="Proyectos" descripcion={proyetos} />
        <Apartado titulo="Formación" descripcion={formacion} />

        <p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p>
        <p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p>
        <p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p>
        <p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p>
        <p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p>
        <div id="proyectos">
          <p>asfasdkfjñalksdfjñlaksdfjñlkdsfjñ

          </p>
        </div>
        <p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p>
        <p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p>
        <p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p>
        <p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p>
        <p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p>
        <p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p>
        <p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p>
          */}
        <p>“Un título te define un día; las ganas te definen toda la vida.”</p>
        <p>“Tu valor no disminuye por alguien que no sabe verlo.”</p>

      </main>


      <ScrollTopButton />
    </div>
  );

}