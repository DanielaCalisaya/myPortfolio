/*  Don't repeat yourself " (DRY)
    Función anónima autoejecutable ->
*/

/* ----------Menu---------- */

((d) => { //No se repite document
    const $btnMenu = d.querySelector(".header__container__menu__btn"),
    $menu = d.querySelector(".header__container__menu")

    $btnMenu.addEventListener("click", e => {  //button tiene 2 elementos hijos(svg)
        $btnMenu.firstElementChild.classList.toggle("none") //Al primer elemento hijo intercambiamos su clase
        $btnMenu.lastElementChild.classList.toggle("none") //Intercambia la clase none entre los dos elementos 
        $menu.classList.toggle("is-active"); //Activamos todo el menu
    })

    // *
    d.addEventListener("click", (e) => {
        //delegación de eventos
        if(!e.target.matches(".header__container__menu a")) return false; //Si el elemento que genero el click en el documento no es un enlace que está dentro del menú entonces retorna false, no pasaria nada

        $btnMenu.firstElementChild.classList.remove("none") // Mostramos la hamburguesa
        $btnMenu.lastElementChild.classList.add("none") // Ocultamos la x
        $menu.classList.remove("is-active"); // Removemos todo el menu
    });

})(document);
/*   * Esta es una landing page, no redirige a otras páginas, por eso al llevarnos a otra parte de la misma página
       debe remover todo el menu y la x y mostrar la hamburguesa 
*/