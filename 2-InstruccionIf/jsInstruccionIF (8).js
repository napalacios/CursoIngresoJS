function Mostrar()
{
//tomo la edad  
	var edad = document.getElementById('edad').value;
	var estado_civil = document.getElementById('estadoCivil').value;

	if(edad <= 17 && estado_civil != 'Soltero'){

	}else if(edad >= 18 && estado_civil === 'Soltero'){

		alert('Es soltero y no es menor');

	}
	


}//FIN DE LA FUNCIÓN