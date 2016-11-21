/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function NumerosPares() 
{
 	var numero = parseInt(document.getElementById('numero').value);
 	
 	if(numero < 0){

 		alert("El numero ingresado no es positivo");

 	}else{

 		var i = numero;

 		var texto = "Los numeros pares incluidos en el numero "+numero+" son: ";

 		var resto;

 		while(i > 0){

 			resto = i%2;

 			if(resto == 0){
 				texto = texto+", ";
 				texto = texto+i;
 			}

 			i--;
 		}

 		texto = texto+".";

 		alert(texto);
 	}
}

function NumerosImpares(){

	var numero = parseInt(document.getElementById('numero').value);
 	
 	if(numero < 0){

 		alert("El numero ingresado no es positivo");

 	}else{

 		var i = numero;

 		var texto = "Los numeros impares incluidos en el numero "+numero+" son: ";

 		var resto;

 		while(i > 0){

 			resto = i%2;

 			if(resto != 0){
 				texto = texto+", ";
 				texto = texto+i;
 			}

 			i--;
 		}

 		texto = texto+".";
 		
 		alert(texto);
 	}
}

function NumerosDivisibles(){

}

function VerificarPrimo(){

	var numero = parseInt(document.getElementById('numero').value);
 	
 	if(numero < 0){

 		alert("El numero ingresado no es positivo");

 	}else{

 		var es_primo = 1;

 		var i = numero;

 		var resto;

 		while(es_primo == 1 && i > 0){

 			resto = numero%i;

 			if(resto == 0 && i != numero && i != 1){

 				es_primo = 0;

 			}

 			i--;

 		}

 		if(es_primo){

 			alert('Es un numero primo');

 		}else{

 			alert('No es un numero primo');
 		}

 	}

}

function NumerosPrimos(){

}

