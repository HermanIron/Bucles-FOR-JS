
let num1 = parseInt(prompt("introduce un número de 0 a 1000"));

let num2 = parseInt(prompt("introduce otro número 0 a 1000"));



if (!Number.isInteger(num1) || !Number.isInteger(num2)){
  document.write("Que sean números.");
}  else {
  console.log("Números pares entre " + num1 + " y " + num2 + ":");
  document.write( " mírate console.log <br>");

     for (let i = num1; i <= num2; i++) {
      
       if (i % 2 == 0) {
          console.log(i + "<br>");
          
    }
  }
  
}