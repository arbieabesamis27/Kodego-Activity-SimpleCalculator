let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('buttons'));

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {

        if(e.target.innerText == 'AC'){
            display.innerText = "";
        } else if(e.target.innerText == 'DEL'){
            display.innerText = display.innerText.slice(0, -1);
        } else if(e.target.innerText == '='){
            display.innerText = eval(display.innerText)
        }
         else {
            display.innerText += e.target.innerText;
        }
      });
    });

 