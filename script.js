const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const caracteresEspeciais = ["%", "*", "/", "-", "+", "="];
let saida ="";

const calculadora = (btnValue) => {
    console.log(btnValue);
    if(btnValue ==="=" && saida !== "")
    {
          saida = eval(saida.replace("%", "/100"));
    }
    else if(btnValue == "AC")
        saida = "";
    else if(btnValue == "DEL")
       saida = saida.toString().slice(0, -1); 
    else{
        if(saida === "" && caracteresEspeciais.includes(btnValue)) return;   
        saida += btnValue;
    }
     display.value = saida;
}

buttons.forEach(button => {
    button.addEventListener("click", e => calculadora(e.target.dataset.value));
});