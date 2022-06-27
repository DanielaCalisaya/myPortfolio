/* Drop menu */
let navBar = document.querySelector("#navigation-burguer-menu"); // Capturo el elemento por el ID

function dropMenu() {

    let subcategoryMenu = document.querySelector(".active");

    if(navBar.style.display === "block"){
        navBar.style.display = "none";
        subcategoryMenu?.classList.remove("active");
    }else{
        navBar.style.display = "block"; 
        subcategoryMenu ? subcategoryMenu.classList.remove("active") : "";
    }

}