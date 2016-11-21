/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperaturaOriginal;
	var temperaturaTransformada;
	temperaturaOriginal = document.getElementById('Temperatura').value;
	temperaturaOriginal = parseInt(temperaturaOriginal);

	temperaturaTransformada = (temperaturaOriginal-32)/1.8;

	alert(temperaturaOriginal+" fahrenheit son: "+temperaturaTransformada+" centigrados");

}

function CentigradosFahrenheit () 
{
	var temperaturaOriginal;
	var temperaturaTransformada;
	temperaturaOriginal = document.getElementById('Temperatura').value;
	temperaturaOriginal = parseInt(temperaturaOriginal);

	temperaturaTransformada = (temperaturaOriginal*1.8)+32;

	alert(temperaturaOriginal+" centigrados son: "+temperaturaTransformada+" fahrenheit");
}
