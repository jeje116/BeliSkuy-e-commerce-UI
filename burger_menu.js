var status = 1;
var element = document.getElementById("burger_icon")

function show_menu() {
    if (status == 1) {
        element = document.getElementById("menu1")
        element.style.display = "flex"
    
        element = document.getElementById("menu2")
        element.style.display = "flex"
    
        element = document.getElementById("menu3")
        element.style.display = "flex"
    
        element = document.getElementById("menu4")
        element.style.display = "flex"
        status = 2
    }
    else {
        element = document.getElementById("menu1")
        element.style.display = "none"
    
        element = document.getElementById("menu2")
        element.style.display = "none"
    
        element = document.getElementById("menu3")
        element.style.display = "none"
    
        element = document.getElementById("menu4")
        element.style.display = "none"
        status = 1
    }
}