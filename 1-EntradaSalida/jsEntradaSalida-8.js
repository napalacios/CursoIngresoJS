/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numero1 = document.getElementById('numeroDividendo').value;

	numero1 = parseInt(numero1);

	var numero2 = document.getElementById('numeroDivisor').value;

	numero2 = parseInt(numero2);

	var resultado = numero1 % numero2;

	alert('El resto de la division es: '+resultado);	
}
