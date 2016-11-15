/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precio1 = document.getElementById('PrecioUno').value;
	var precio2 = document.getElementById('PrecioDos').value;
	var precio3 = document.getElementById('PrecioTres').value;

	var resultado;

	precio1 = parseInt(precio1);
	precio2 = parseInt(precio2);
	precio3 = parseInt(precio3);

	resultado = precio1+precio2+precio3;

	alert('La suma de los tres es: '+resultado);

}	
function Promedio () 
{
	var precio1 = document.getElementById('PrecioUno').value;
	var precio2 = document.getElementById('PrecioDos').value;
	var precio3 = document.getElementById('PrecioTres').value;

	var resultado;

	precio1 = parseInt(precio1);
	precio2 = parseInt(precio2);
	precio3 = parseInt(precio3);

	resultado = (precio1+precio2+precio3)/3;

	alert('El promedio de los tres es: '+resultado);
}
function PrecioFinal () 
{
	var precio1 = document.getElementById('PrecioUno').value;
	var precio2 = document.getElementById('PrecioDos').value;
	var precio3 = document.getElementById('PrecioTres').value;

	var resultado;
	var iva;

	precio1 = parseInt(precio1);
	precio2 = parseInt(precio2);
	precio3 = parseInt(precio3);

	resultado = precio1+precio2+precio3;

	iva = (resultado/100)*21;

	resultado = iva+resultado;

	alert('El precio final de los tres es: '+resultado);
}