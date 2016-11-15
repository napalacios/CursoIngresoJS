function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	//Genero el número RANDOM entre 1 y 10 
	var numero_aleatorio;
	numero_aleatorio = Math.round(Math.random()*10);

	if(numero_aleatorio >= 9 && numero_aleatorio <= 10){

		alert('Usted sacó un: '+numero_aleatorio+'. EXCELENTE.');

	}else if (numero_aleatorio >= 4){

		alert('Usted sacó un: '+numero_aleatorio+'. APROBÓ.');

	}else{

		alert('Usted sacó un: '+numero_aleatorio+'. Vamos, la proxima se puede.');

	}

}//FIN DE LA FUNCIÓN