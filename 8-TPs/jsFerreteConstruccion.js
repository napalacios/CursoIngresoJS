/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo = document.getElementById('Largo').value;
	var ancho = document.getElementById('Ancho').value;

	largo = parseInt(largo);
	ancho = parseInt(ancho);

	var perimetro = (largo*2)+(ancho*2);

	alert('La cantidad de metros de alambre a comprar son: '+(perimetro*3));

}
function Circulo () 
{
	var radio = document.getElementById('Radio').value;
	radio = parseInt(radio);
	var pi = Math.PI;
	
	var alambre = ((radio * 2) * pi) *3;

	alert('La cantidad de metros de alambre a comprar son: '+alambre);
}
function Materiales () 
{
	
}