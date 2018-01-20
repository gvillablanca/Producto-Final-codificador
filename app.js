function main() {
  do {
    var answer = prompt('Desea: \n\ 1:Codificar \n\ 2:Decodificar'); //  primero pregunto que es lo que quiere hacer el usuario
    if (answer !== '') {
      if (answer === '1' || answer === '2') {
        var string = phrase(); //  valor que se obtiene de la funcion phrase
        if (answer === '1') { //  si su opcion es 1 accedemos a la funcion cipher
          return document.write(cipher(string));
        } else if (answer === '2') { //  si su opcion es 2 accedemos a la funcion decipher
          return document.write(decipher(string));
        }
      } else {
        alert('Por favor ingrese una opcion valida');
      }
    }
  } while (answer === '' || (answer !== '1' && answer !== '2'));
}

function phrase() {
  do {
    var phraseAnswer = prompt('Ingrese su frase');
  } while (phraseAnswer === '' || isNaN(phraseAnswer) === false); //  condicion para detener la funcion
  return phraseAnswer; //  el valor de esta frase se guarda en string de la funcion main y sera el valor que entrara a las funciones cipher y decipher
}

function cipher(string) {
  var output = ''; // variable de salida sera en blanco
  for (var i = 0 ; i < string.length; i++) {
    var character = string[i]; //  guardamos el caracter en una variable
    if (character.match(/[a-z]/i)) { //  funcion regular para verificar si el caracter es una letra
      var ascii = string.charCodeAt(i); //  obtener codigo ascii
      if ((ascii >= 65) && (ascii <= 90)) { //  rango de las mayusculas
        character = String.fromCharCode(((ascii - 65 + 33) % 26) + 65); //  le sumamos 33 porque debemos avanzar
      } else if ((ascii >= 97) && (ascii <= 122)) { //  rango de las minusculas
        character = String.fromCharCode(((ascii - 97 + 33) % 26) + 97); //  lo mismo aqui, sumamos 33 para avanzar
      }
      output += character; //  a nuestra variable de salida le concatenamos cada caracter
    }
    return output; //  retornamos el string
  }
}

function decipher(string) {
  var output = ''; // variable de salida sera en blanco
  for (var i = 0 ; i < string.length; i++) {
    var character = string[i]; // gurdamos el caracter en una variable
    if (character.match(/[a-z]/i)) { //  funcion regular para verificar si el caracter es una letra
      var ascii = string.charCodeAt(i); //  obtener codigo ascii
      if ((ascii >= 65) && (ascii <= 90)) { //  rango de las mayusculas
        character = String.fromCharCode(((ascii - 65 - 33) % 26) + 65); // ahora la formula es menos porque debemos devolvernos
      } else if ((ascii >= 97) && (ascii <= 122)) { //  rango de las minusculas
        character = String.fromCharCode(((ascii - 97 - 33) % 26) + 97); // debemos devolvernos por eso es menos 33 no mas 33
      }
      output += character; //  a nuestra variable de salida le concatenamos cada caracter
    }
    return output; //  retornamos el string
  }
}

main();