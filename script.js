window.onload = function() {
    let input = document.getElementById("inputBox");
    let container = document.getElementById("container");
  
    container.addEventListener("click", function(e) {
      buttonClick(e.target.id);
    });
  
    let calc = document.getElementById("Button=");
    calc.addEventListener("click", calculate);
  
    let C = document.getElementById("ButtonC");
    C.addEventListener("click", erase);
  
    function buttonClick(buttonId) {
      if((buttonId != "ButtonC") && (buttonId != "Button")) {
        let button = document.getElementById("buttonId");
        let s = buttonId;
        s = s.replace("Button", "");
        entries(s);
      }
    }
  
    function entries(s) {
      input.value += s;
    }
  
    function calculate() {
      if(input.value == ".") {
        alert("Please Enter a Mathematical Expression");
      }
      input.value = eval(input.value);
    }
  
    function erase() {
      input.value = "";
    }
  }