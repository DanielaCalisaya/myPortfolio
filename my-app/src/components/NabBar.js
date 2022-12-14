import React from 'react'

const NabBar = () => {
  return (
    <header className="header">
        <section className="header__container">
            <div className="header__container__logo">
                <a href="index.html">Daniela Calisaya  </a>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M20,3H4C2.897,3,2,3.897,2,5v14c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2V5C22,3.897,21.103,3,20,3z M4,19V7h16 l0.002,12H4z"/>
                    <path d="M9.293 9.293L5.586 13 9.293 16.707 10.707 15.293 8.414 13 10.707 10.707zM14.707 9.293L13.293 10.707 15.586 13 13.293 15.293 14.707 16.707 18.414 13z"/>
                </svg>
            </div>
            <button className="header__container__menu__btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z"/>
                </svg>
                <svg className="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z"/>
                </svg>
            </button>
            <nav className="header__container__menu">
                <a href="#inicio">Inicio</a>
                <a href="#acerca">Acerca</a>
                <a href="#habilidades">Habilidades</a> 
                <a href="#portafolio">Proyectos</a>
                <a href="#contacto">Contacto</a>
            </nav>
        </section>
    </header> 
  )
}

export default NabBar