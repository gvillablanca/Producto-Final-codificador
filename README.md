# Codificador de texto


## Explicando el codificado de cesar

*Es un tipo de cifrado por sustitución en el que una letra en el texto original es reemplazada por otra letra que se encuentra un número fijo de posiciones más adelante en el alfabeto.*
*En este codigo lo hacemos con 33 desplazamientos a la derecha*
*Por ejemplo, con un desplazamiento de 3, la A sería sustituida por la D (situada 3 lugares a la derecha de la A), la B sería reemplazada por la E, etc. Este método debe su nombre a Julio César, que lo usaba para comunicarse con sus generales.*
*Utiliza 2 formulas : (x+n)%2 para encriptar y (x-65+n)%26+26 para sacar el ascii*

### Pasos que segui para resolverlo

## Funcion cifrar

+ Creo una variable temp [] , temp2[], strcode[]
+ Verifico que el texto entregado sea solo string
+ Solicitar cadena a codificar
+ Recorro mi texto y paso a ascii letra por letra
+ Los voy guardando en temp[] codificados a ascii
+ Nuevamente recorro temp[] con la palabra ascii y verifico que esten es ascii
+ Aplico la formula (temp[i] - 65 + 33) % 26 + 26 y las guardo en temp2[]
+ Recorro temp2 y aplico la formula (temp2[i] + 33) % 26
+ Con String.fromCharCode() los vuelvo a letras
+ Guardo resultado en strcode[] y aplico join().
+ Retono texto final codificado

## Funcion decifrar

+ Creo una variable temp [] , temp2[], strdecode[]
+ Verifico que el texto entregado sea solo string
+ Solicitar cadena a decodificar
+ Recorro mi texto y paso a ascii letra por letra
+ Los voy guardando en temp[] codificados a ascii
+ Nuevamente recorro temp[] con la palabra ascii y verifico que esten es ascii
+ Aplico la formula (temp[i] - 65 + 33) % 26 + 26 y las guardo en temp2[]
+ Recorro temp2 y aplico la formula (temp2[i] - 33) % 26
+ Con String.fromCharCode() los vuelvo a letras
+ Guardo resultado en strdecode[] y aplico join().
+ Retono texto final decodificado


### Funcion que lo resuelve

``` javascript
function cipher(str){
	var temp = []; 
	var temp2 = []; 
	var strcode = [];
	do{ 
		var str = prompt("Ingrese texto a codificar");
			for(var i =0; i< str.length; i++){ 
				if(typeof(str) == String){
					str.charCodeAt(i);
					temp.push(i);
				}
				for(var i = 0; i < temp.length; i++){ 
					if(typeof(temp[i] == Number)){
						temp2[i] = (temp[i] - 65 + 33) % 26 + 26;
					}for(var i = 0; i< temp2.length; i++){
						temp2[i] = (temp2[i] + 33) % 26; 
						String.fromCharCode(i);
						strcode.push(i);
						strcode.join();
					}return strcode;
				}
			}
	}while (str == "" || typeof(str) == String || str == " ");
}

function decipher(str){
	var temp = []; 
	var temp2 = []; 
	var strdecode = [];
	do{
		var str = prompt("Ingrese texto a decodificar");
		for(var i =0; i< str.length; i++){ 
				if(typeof(str) == String){
					str.charCodeAt(i);
					temp.push(i);
				}
				for(var i = 0; i < temp.length; i++){
					if(typeof(temp[i] == Number)){
						temp2[i] = (temp[i] - 65 + 33) % 26 + 26;
					}for(var i = 0; i< temp2.length; i++){
						temp2[i] = (temp2[i] - 33) % 26; 
						String.fromCharCode(i);
						strdecode.push(i);
						strdecode.join();
					}return strcode;
				}			
			}

	}while (str == "" || typeof(str) == String || str == " ");
}
}

```


