



let precioTotal = 0;

    for (let i = 1; i <= 5; i++) {
      let precioProducto = parseInt(prompt("precio producto " + i + ":"));

      if (!Number.isInteger(precioProducto) || precioProducto <= 0) {
        alert(" Pon un número válido y mayor a 0.");
      
      } else {
        precioTotal += precioProducto;  // para que se sume todos  a la  izq.
      }
    }

    if (precioTotal >= 100) {

      let descuento = precioTotal * 0.15;
      let precioFinal = precioTotal - descuento;
      console.log("Precio: " + precioTotal + " euros");
      console.log("Precio final con descuento del 15%: " + precioFinal + " euros");

    } else {
      console.log("Precio total: " + precioTotal + " euros");
    }