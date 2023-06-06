function esPalindromo(palabra) {
    // Eliminamos los caracteres no alfabéticos y convertimos a minúsculas
    palabra = palabra.toLowerCase().replace(/[^a-z]+/g, '');
  
    // Verificamos si la palabra invertida es igual a la palabra original
    return palabra === palabra.split('').reverse().join('');
  }
  
  // Ejemplo de uso
  const entrada = prompt("Introduce una palabra:");
  if (esPalindromo(entrada)) {
    console.log("La palabra es un palíndromo");
  } else {
    console.log("La palabra no es un palíndromo");
  }
  
  "PARA VOLVER AL EJERCICIO DALE ATRAS EN EL NAVEGADOR."
  "GRACIAS Y BUEN DIA"