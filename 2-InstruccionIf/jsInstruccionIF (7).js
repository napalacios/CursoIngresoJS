function Mostrar()
{
//tomo la edad  

	var edad = document.getElementById('edad').value;
	var estado_civil = document.getElementById('estadoCivil').value;

	if(edad <= 17 && estado_civil != 'Soltero'){

		alert('Es muy pequeño para NO ser soltero.');

	}

}//FIN DE LA FUNCIÓN