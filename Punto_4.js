function contarVocales(frase) {
    // Convertir la frase a minúsculas para evitar problemas de coincidencia
    frase = frase.toLowerCase();
  
    // Inicializar contadores para cada vocal
    let contadorA = 0;
    let contadorE = 0;
    let contadorI = 0;
    let contadorO = 0;
    let contadorU = 0;
  
    // Recorrer cada carácter de la frase
    for (let i = 0; i < frase.length; i++) {
      const caracter = frase[i];
      // Verificar si el carácter es una vocal y aumentar el contador correspondiente
      switch (caracter) {
        case 'a':
          contadorA++;
          break;
        case 'e':
          contadorE++;
          break;
        case 'i':
          contadorI++;
          break;
        case 'o':
          contadorO++;
          break;
        case 'u':
          contadorU++;
          break;
        default:
          // Si no es una vocal, continuar con el siguiente carácter
          continue;
      }
    }
  
    // Imprimir los resultados
    console.log('Cantidad de veces que aparece cada vocal:');
    console.log('A: ' + contadorA);
    console.log('E: ' + contadorE);
    console.log('I: ' + contadorI);
    console.log('O: ' + contadorO);
    console.log('U: ' + contadorU);
  }
  
  // Ejemplo de uso
  const frase = prompt('Ingrese una frase:');
  contarVocales(frase);
  