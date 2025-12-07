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
  const sobremi = "Apasionado de la informática, la programación y el desarrollo desde una edad temprana. Disfruto creando soluciones funcionales y aportando un enfoque innovador y diferente en cada proyecto. Me motiva aprender de forma continua —tanto mediante formación reglada como de manera autodidacta— y aplicar esos conocimientos en retos reales. Me considero una persona responsable, colaborativa y resolutiva, con vocación por compartir lo aprendido y ayudar a los demás. Busco siempre mejorar, aportar valor y seguir creciendo profesionalmente dentro del ámbito del desarrollo y la tecnología.";
  const objetivo = "Mi objetivo es seguir creciendo como profesional del desarrollo, contribuir en proyectos que supongan un reto y mantener siempre una actitud abierta, curiosa y orientada a la mejora constante.";
  return (
      <div className="app">
        {/* <Header dark={dark} toggleTheme={toggleTheme} /> */}
        <Header job={job} miMail={miMail} miTfno={miTfno}/>        { /* props para pasar la variable a el componente Header*/ }
        <NavBar linkedin={urllinkedin} github={urlgithub}/>
        
        <Apartado titulo="Sobre mi">
          <p> 1 {sobremi } </p>
          <p> 2 {objetivo } </p>
        </Apartado>

                <Apartado titulo="Sobre mi">
          <p> 1 {sobremi } </p>
          <p> 2 {objetivo } </p>
        </Apartado>


                <Apartado titulo="Sobre mi">
          <p> 1 {sobremi } </p>
          <p> 2 {objetivo } </p>
        </Apartado>

        <Apartado titulo="Sobre mi">
          <p> 1 {sobremi } </p>
          <p> 2 {objetivo } </p>
        </Apartado>

        <p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p>
        <p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p>
        <p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p>
        <p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p>
        <p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p>
        <p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p>
        <p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p><p>parrafo</p>
        
        <ScrollTopButton />
      </div>
  );

}