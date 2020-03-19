"use strict";
//Объявляем переменные для вычислений

let displayValue = '0';
let firstVal = null;
let operator = null;
let result = null;

//Логика калькулятора

function plus(a,b){
  return parseFloat(a)+parseFloat(b);
}
function minus(a,b){
  return parseFloat(a)-parseFloat(b);
}
function mult(a,b){
  return parseFloat(a)*parseFloat(b);
}
function dev(a,b){
  if (b!=0){
    return parseFloat(a)/parseFloat(b);
  } else {
    return "ERROR!";
  }
}

//Взаимодействие логики и интерфейса

// Обновление дисплея калькулятора

  function updateDisplay() {
    const display = document.getElementById('input');
    display.value = displayValue;
  }

// Ввод цифр

  const numbers = document.querySelectorAll(".number");

  numbers.forEach((num)=>{num.addEventListener("click", (event)=>inputDigit(num.value))});

  function inputDigit(a){
      if(displayValue === '0' || displayValue == 'ERROR' || firstVal == 'ERROR'){
          displayValue = a;
          updateDisplay();
      } else {
          displayValue = displayValue + a;
          updateDisplay();
      }
  }
  
// Ввод точки

const point = document.querySelector("#point");
point.addEventListener("click", (event)=>inputPoint());

  function inputPoint(){
      if(!displayValue.includes('.')){
          displayValue = displayValue + '.';
        }
        updateDisplay();
  }

  //Очистка дисплея калькулятора
  const clear = document.querySelector("#clear");
  clear.addEventListener("click", (event)=>clearAll());

  function clearAll(){
    displayValue = '0';
    firstVal = null;
    operator = null;
    updateDisplay();
  }

  // Ввод операторов и подсчёт

  const operators = document.querySelectorAll(".operators");
  operators.forEach((op)=>{op.addEventListener("click", (event)=>inputOperator(op.value))});

  function inputOperator(a){
    if(a == "="){
      if(operator == "+"){
        result = plus(firstVal,displayValue);
        displayValue = result;
        firstVal = null;
        updateDisplay();
      } else if(operator == "-"){
          result = minus(firstVal,displayValue);
          displayValue = result;
          firstVal = null;
          updateDisplay();
      } else if(operator == "*"){
          result = mult(firstVal,displayValue);
          displayValue = result;
          firstVal = null;
          updateDisplay();
      } else if(operator == "/"){
        result = dev(firstVal,displayValue);
        displayValue = result;
        firstVal = null;
        updateDisplay();
      } else if(!operator) {
        result = displayValue;
      }
    } else if(!firstVal){
            firstVal = displayValue;
            displayValue = '0';
            operator = a;
            updateDisplay();
      } else {
        if(operator == "+"){
            firstVal = plus(firstVal,displayValue);
            displayValue = '0';
            operator = a;
            updateDisplay();
        } else if(operator == "-"){
            firstVal = minus(firstVal,displayValue);
            displayValue = '0';
            operator = a;
            updateDisplay();
        } else if(operator == "*"){
            firstVal = mult(firstVal,displayValue);
            displayValue = '0';
            operator = a;
            updateDisplay();
        } else if(operator == "/"){
          firstVal = dev(firstVal,displayValue);
          displayValue = '0';
          operator = a;
          updateDisplay();
        } 
       }
  }

  updateDisplay();