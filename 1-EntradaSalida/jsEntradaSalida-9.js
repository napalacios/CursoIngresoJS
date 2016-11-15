/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
	var numero1 = document.getElementById('sueldo').value;

	numero1 = parseInt(numero1);

	var aumento;

	aumento = numero1 / 10;

	var resultado = numero1 + aumento;

	document.getElementById('resultado').value = resultado; 
	
}
