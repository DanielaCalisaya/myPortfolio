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

/* ----------ContactForm---------- */ 
/* Necesito un entorno de servidor para enviar un correo, no solo html, por eso es necesario abrir con live server */
((d) => {
    const $form = d.querySelector(".contact__form"),
    $loader = d.querySelector(".contact__form--loader"),
    $response = d.querySelector(".contact__form--response")

    $form.addEventListener("submit", (e) => {
        e.preventDefault();
        $loader.classList.remove("none"); /* se ve el loader, desp mandamos la peticion a este servicio */
        fetch("https://formsubmit.co/ajax/hdaniela127c@gmail.com", {
            method: "POST",
            body: new FormData(e.target) /* q envie el formulario como tal, para el envio de los datos al servicio y obtengo los datos del e.target(q es el objeto que origina el evento) */
        })
        .then((res) => (res.ok ? res.json() : Promise.reject(res))) /* si res.ok valida a verdadero la rta que me da a form submit q la convierta a json, caso contrario q rechaze la promesa*/
        .then(json => {
            console.log(json);
            location.hash = "#gracias"; /* el objeto location es el que controla todo lo que entra en la url de la barra de direccion del navegador, entonces que agregue el hash y el gracias, asi se activa la pantalla modal */
            $form.reset(); /* el formulario se resetea */
        })
        .catch(err => {
            console.log(err);
            let message = err.statusText || "Ocurrió un error al enviar, intenta nuevamente"
            $response.querySelector("h3").innerHTML = `Error ${err.status}:${message}` 
        }).finally(() => {
            $loader.classList.add("none"); /* independientemente del resultado de la respuesta esto se ejecutará  */
            setTimeout(() => {
                location.hash = "#close" /* se vuelve a modificar para que se vaya */
            }, 3000)
        }) 
    });
})(document);