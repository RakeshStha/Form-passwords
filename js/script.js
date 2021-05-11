function checkPassword() {
    let init = "hide";
  init = init === "hide" ? "show" : "hide";
console.log(init);
}

function showPassword1() {
    var field = document.getElementById("input-a");
    var x = document.getElementById('icon');
    var y = document.getElementById('icon-slash');
    if (field.type === 'password') {
        field.type = "text";
        
        x.style = "display:none";
        
        y.style ="display:block";
    }
    else {
        field.type = "password";
    }
}

function showPassword2() {
    var field = document.getElementById("input-b");
    var x = document.getElementById('icon');
    var y = document.getElementById('icon-slash');
    if (field.type === 'password') {
        field.type = "text";
        
        x.style = "display:none";
        
        y.style ="display:block";
    }
    else {
        field.type = "password";
    }
}