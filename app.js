//funcion principal
function main (){
	do{
		var respuesta = prompt("Desea: 1:codificar - 2:decodificar");//opciones
		if(respuesta!= ""){
			if(respuesta == "1"){//si es 1 cifrar
				cipher();//llamar funcion cifrar
			}else if(respuesta == "2"){//si es 2 decifrar
				decipher();//llamar funcion decifrar
			}else{
				alert("ingresar opcion valida");//solicitar opcion correcta
			}
		}
	}while (respuesta == "" || (respuesta != "1" && respuesta != "2"));//valido que la respuesta sea una de las opciones
}

//funcion cifrar
function cipher(str){
	var temp = []; //variable donde guardare lo que estoy codificando
	var temp2 = []; //donde ire guardando los valores de las formulas
	var strcode = [];//donde pondre mi letras codificadas ya
	do{ //do while para verificar que el texto entregado sea solo string
		var str = prompt("Ingrese texto a codificar");//solicitar cadena
			for(var i =0; i< str.length; i++){ //recorro mi texto
				if(typeof(str) == String){//paso a ascii letra por letra
					str.charCodeAt(i);
					temp.push(i);//los guardo en mi array temp codificados a ascii
				}
				for(var i = 0; i < temp.length; i++){ //recorro mi array con la palabra ascii
					if(typeof(temp[i] == Number)){//verifico que esten es ascii
						temp2[i] = (temp[i] - 65 + 33) % 26 + 26; //aplico la formula acii y las guardo en mi var temporal 2
					}for(var i = 0; i< temp2.length; i++){//recorro mi variable temp2 con la formula ya aplicada
						temp2[i] = (temp2[i] + 33) % 26; //aplico la formula de cesar
						String.fromCharCode(i);//los vuelvo a letras
						strcode.push(i);// los voy metiendo en donde estara mi resultado
						strcode.join();//lo uno todo para que quede una cadena
					}return strcode;//retorno mi nueva cadena
				}
			}
	}while (str == "" || typeof(str) == String || str == " ");//valido que la cadena a evaluar sea string
}

//funcion decifrar
function decipher(str){
	var temp = []; //variable donde guardare lo que estoy decodificando
	var temp2 = []; //donde ire guardando los valores de las formulas
	var strdecode = [];//donde pondre mi letras decodificadas ya
	do{
		var str = prompt("Ingrese texto a decodificar");//recibo cadena codificada
		for(var i =0; i< str.length; i++){ //recorro mi texto
				if(typeof(str) == String){//paso a ascii letra por letra
					str.charCodeAt(i);
					temp.push(i);//los guardo en mi array temp codificados a ascii
				}
				for(var i = 0; i < temp.length; i++){ //recorro mi array con la palabra ascii
					if(typeof(temp[i] == Number)){//verifico que esten es ascii
						temp2[i] = (temp[i] - 65 + 33) % 26 + 26; //aplico la formula acii y las guardo en mi var temporal 2
					}for(var i = 0; i< temp2.length; i++){//recorro mi variable temp2 con la formula ya aplicada
						temp2[i] = (temp2[i] - 33) % 26; //aplico la formula de cesar
						String.fromCharCode(i);//los vuelvo a letras
						strdecode.push(i);// los voy metiendo en donde estara mi resultado
						strdecode.join();//lo uno todo para que quede una cadena
					}return strcode;//retorno mi nueva cadena
				}			
			}

	}while (str == "" || typeof(str) == String || str == " ");//valido que la cadena a evaluar sea string
}


main();//llamo mi funcion principal inmediatamente
