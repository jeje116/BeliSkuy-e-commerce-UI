/// <reference path="jquery-3.6.3.min.js" />

const container = $(".slide");

const images = $(".effect");
images.hide();
let index = 0;
let length = images.length;
images.eq(index).show();

const prev_slide = ()=> {
    images.eq(index).hide();
    if(--index < 0) index += length
    images.eq(index).show();
}

const next_slide = ()=> {
    images.eq(index).hide();
    if(++index > 0) index -= length
    images.eq(index).show();
}

$("#prev_icon").on("click", prev_slide)

$("#next_icon").on("click", next_slide)

$(function(){
    console.log("tes")
    setInterval(function () {
        next_slide()
    }, 6000);
  });

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
