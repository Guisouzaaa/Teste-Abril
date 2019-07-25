let menu = document.getElementById("btn-menu");
let dropdown = document.getElementById("dropdown-menu");
let btnIcon = document.getElementById("btn-icon");

menu.addEventListener('click', abrirMenu);

function abrirMenu(){
    dropdown.classList.toggle("showmenu");

    if(btnIcon.classList.contains("fa-times")){
        btnIcon.classList.remove("fa-times");
        btnIcon.classList.add("fa-bars");
    }else{
        btnIcon.classList.remove("fa-bars");
        btnIcon.classList.add("fa-times");
    }
}


