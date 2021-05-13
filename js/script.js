
let init = "hide";
function iconChanged() {
  init = init === "hide" ? "show" : "hide";
  // console.log(init);
  let pwd1 = document.getElementById("pwd1");

  if (init === "hide") {
    pwd1.type = "password";
  } else {
    pwd1.type = "text";
  }
  var iconselector = document.querySelector(".icon1");

  changer(iconselector);
}



let final = "hide";
function iconChanged2() {
  final = final === "hide" ? "show" : "hide";
  // console.log(final);

  let pwd2 = document.getElementById("pwd2");
  if (final === "hide") {
    pwd2.type = "password";
  } else {
    pwd2.type = "text";
  }
  var iconselector2 = document.querySelector(".icon2");
  changer(iconselector2);
}


function changer(selector) {
  selector.classList.toggle("far");
  selector.classList.toggle("fa-eye");
  selector.classList.toggle("fas");
  selector.classList.toggle("fa-eye-slash");
}


//Password checking indicator

const indicator = document.querySelector(".indicator");
const input = document.querySelector("input");
const weak = document.querySelector(".weak");
const medium = document.querySelector(".medium");
const strong = document.querySelector(".strong");
const text = document.querySelector(".text");


let regExpWeak = /[a-z]/;
let regExpMedium = /\d+/;
let regExpStrong =/.[!,@,#,$,%,^,*,?,_,~,-,(,)]/; 

function trigger(e) {
    // console.log("Hello")
    if(e.target.value != ""){
        document.querySelector(".indicator").style.display = "block";
        document.querySelector(".indicator").style.display = "flex";
       if (e.target.value.length <=3 && (e.target.value.match(regExpWeak) || e.target.value.match(regExpMedium) || e.target.value.match(regExpStrong)))no=1;
       if (e.target.value.length >=6 && ((e.target.value.match(regExpWeak) && e.target.value.match(regExpMedium)) || (e.target.value.match(regExpMedium) && e.target.value.match(regExpStrong)) || (e.target.value.match(regExpWeak) && e.target.value.match(regExpStrong))))  no=2;
       if (e.target.value.length >=6 && e.target.value.match(regExpWeak) && e.target.value.match(regExpMedium) && e.target.value.match(regExpStrong))no=3;
        if(no == 1){
            document.querySelector(".weak").classList.add("active");
            document.querySelector(".text").style.display = "block";
            document.querySelector(".text").textContent = "Your password is too weak.";
            document.querySelector(".text").classList.add("weak");
        }
        if(no == 2){
            document.querySelector(".medium").classList.add("active");
            document.querySelector(".text").textContent = "Your password is medium.";
            document.querySelector(".text").classList.add("medium");
        }
        else{
            document.querySelector(".medium").classList.remove("active");
            document.querySelector(".text").classList.remove("medium")
        }
        if(no == 3){
            document.querySelector(".medium").classList.add("active");
            document.querySelector(".strong").classList.add("active");
            document.querySelector(".text").textContent = "Your password is strong.";
            document.querySelector(".text").classList.add("strong");
        }
        else{
            document.querySelector(".strong").classList.remove("active");
            document.querySelector(".text").classList.remove("strong")
        }
    }
    else{
        document.querySelector(".indicator").style.display = "none";
        document.querySelector(".text").style.display = "none";
    }
}

function checkPassword() {
  password1 = document.getElementById('pwd1').value;
  password2 = document.getElementById('pwd2').value; 
  if (password1 == "") {
    alert("Enter the password");
  } else if (password2 == "") {
    alert("Enter confirm password");
  } else if (password2 != password1) {
    alert("Password do not match");
  } else {
    alert("Congrulation password match");
    document.getElementById('pwd1').value = "";
    document.getElementById('pwd2').value = "";

  }
}