let quality_total, id, element;

function price_total_count(id) {
    element = document.getElementById("total" + id);
    let price = document.getElementById("price" + id);
    quality_total = document.getElementById("quality_value" + id);
    let result = "Rp"+ parseInt(price.innerHTML.slice(2)) * parseInt(quality_total.innerHTML)
    document.getElementById("total" + id).innerHTML = result;
    
}

function stop_hover(id) {
    document.getElementById(id).style.visibility = "hidden";
}

function start_hover(id) {
    document.getElementById(id).style.visibility = "visible";
}

function myFunction_plus(id) {
    id = id.slice(9);
    element = document.getElementById("quality_value"+id);
    quality_total = element.innerHTML;

    if(quality_total>=1) {
        start_hover("hover_toggle"+id);
    }

    quality_total++;
    element.innerHTML = quality_total;
    price_total_count(id)
    recount()
}

function myFunction_minus(id) {
    id = id.slice(8);
    element = document.getElementById("quality_value"+id);
    quality_total = element.innerHTML;
    
    quality_total--;
    if(quality_total==1) {
        stop_hover("hover_toggle"+id);
    }
    else if (quality_total<1) {
        return;
    }
    element.innerHTML = quality_total;
    price_total_count(id)
    recount()
}

let total_payment = 0;

element = document.getElementById("list").children
let j = element.length

function count_subtotal_payment() {
    total_payment = 0;
    element = document.getElementById("list").children
    j = element.length
    for (i = 0;i<j;i++) {
        let element1 = document.getElementById("total"+(i+1))
        element1 = element1.innerHTML.slice(2)
        total_payment += parseInt(element1)
    }

    element = document.getElementById("subtotal")
    element.innerHTML = "Rp"+total_payment;
}

let total_tax = 0;
function count_tax() {
    total_tax = 0;
    element = document.getElementById("subtotal")
    let temp = parseInt(element.innerHTML.slice(2))
    total_tax += temp*10/100
    element = document.getElementById("tax")
    element.innerHTML = "Rp"+total_tax;
}

function count_total(){
    element = document.getElementById("count")
    element.innerHTML = "Rp"+(total_payment+total_tax)
}

function recount() {
    count_subtotal_payment()
    count_tax()
    count_total()
}

for (let i=0; i< j; i=i+1) {
    price_total_count(i+1);
}

recount()

var status = 1;

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