// Función para verificar si un carácter es una vocal
function esVocal(caracter) {
    var vocales = ['a', 'e', 'i', 'o', 'u'];
    return vocales.includes(caracter.toLowerCase());
  }
  
  // Solicitar una frase al usuario
  var frase = prompt('Ingresa una frase:');
  
  // Inicializar una variable para almacenar las vocales encontradas
  var vocalesEncontradas = [];
  
  // Recorrer cada carácter de la frase
  for (var i = 0; i < frase.length; i++) {
    var caracter = frase[i];
  
    // Verificar si el carácter es una vocal
    if (esVocal(caracter)) {
      // Agregar la vocal encontrada a la lista
      vocalesEncontradas.push(caracter.toLowerCase());
    }
  }
  
  // Mostrar las vocales encontradas
  if (vocalesEncontradas.length > 0) {
    var resultado = 'Las vocales encontradas son: ' + vocalesEncontradas.join(', ');
    console.log(resultado);
  } else {
    console.log('No se encontraron vocales en la frase ingresada.');
  }

  "PARA VOLVER AL EJERCICIO DALE ATRAS EN EL NAVEGADOR."
  "GRACIAS Y BUEN DIA"
  