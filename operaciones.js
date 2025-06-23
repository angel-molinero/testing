const add = (a,b) => {
  // if(typeof a !== "Number" && typeof b !== "Number")return;
  if(typeof a === "number" && typeof b === "number"){
    return a + b;
  }
  return;
};
const substract = (a,b) =>{
  if(typeof a === "number" && typeof b === "number"){
    return a - b;
  }
  return;
};
const multiply = (a,b) => a * b;
const divide = (a, b) => {
  if (a === 0 && b === 0) return "No se puede dividir 0 entre 0";  // <--- Mensaje esperado
  if (b === 0) return undefined;
  return a / b;
};


function residuo(a,b){ 
 if(b === 0) return; 
 return  a %b
};

//export 
module.exports = {
  add,
  substract,
  multiply,
  divide,
  residuo
};
