function isGenderSelected() {
    const gender = document.getElementsByName('gender');

    for(i=0; i <gender.length; i++){
        if(gender[i].checked) {
            return true;
        }
    }

    return false;

}

const formValidation = () => {
    const uname = document.getElementById('username')
    var lenUname = uname.value.length;
    
    const emailaddress = document.getElementById('email')
    const emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const pw = document.getElementById('password')
    var lenPw = pw.value.length;

    const confirmpw = document.getElementById('re_enter_password')
    
    const today = new Date();
    const dob = new Date(document.getElementById('birthday').value)
    const dob2 = document.getElementById('birthday')

    const tnc = document.getElementById('checkbox')

    if (lenUname == 0 || lenUname>= 12 || lenUname < 5){
        alert('Username should not be empty / length be between 5 to 12!')
    } else if(!emailaddress.value.match(emailformat)){
        alert("You have entered an invalid email address!")
    } else if (lenPw == 0 || lenPw >= 12 || lenPw < 7){
        alert('Password should not be empty / length be between 7 to 12');
    } else if (pw.value != confirmpw.value){
        alert('Confirm password did not match!');
    } else if (!dob2.value || dob > today) {
        alert('Please input a valid date of your birthday!');
    } else if (isGenderSelected() == false) {
        alert('Please select a gender.');
    } else if (!tnc.checked) {
        alert("Please agree to BeliSkuy's Terms and Conditions.")
    } else {
        alert('You have successfully registered!');
    }
  }

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