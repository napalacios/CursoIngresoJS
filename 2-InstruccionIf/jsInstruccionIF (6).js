function Mostrar()
{
//tomo la edad  
	var edad = document.getElementById('edad').value;

	if(edad >= 18){

		alert('Es mayor de edad');	

	}else if(edad <= 17 && edad >= 13){

		alert('Es adolescente');	

	}else{

		alert('Es niño');	

	}

}//FIN DE LA FUNCIÓN