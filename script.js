const buttons = document.querySelectorAll(".btn");
let display = document.querySelector("#display");

buttons.forEach((element) => {
  element.addEventListener("click", myFunction);
});

function myFunction(e) {
  //Creal the screen
  if (e.target.innerHTML == "cc") {
    display.value = "";

    //Erase the last digit
  } else if (e.target.innerHTML == "back") {
    display.value = display.value.substr(0, display.value.length - 1);
  } else if (e.target.innerHTML == "+" || e.target.innerHTML == "-" || e.target.innerHTML == "*" || e.target.innerHTML == "/") {
    let lastString = display.value.charAt(display.value.length - 1);

    //make sure that there are not operator near eachother
    if (lastString == "+" || lastString == "-" || lastString == "*" || lastString == "/" || lastString == ",") {
      display.value = display.value.substr(0, display.value.length - 1);
      display.value += e.target.innerHTML;
    } else {
      display.value += e.target.innerHTML;
    }
  } else if (e.target.innerHTML == "=") {
    display.value = eval(display.value);
  } else {
    display.value += e.target.innerHTML;
  }
}
