INICIO
 	numerico sueldo,antiguedad,aumento,total;
 	imprima "ingrese su sueldo actual";
 	lea sueldo;
 	imprima "digite sus años de antiguedad";
 	lea antiguedad;
 	aumento=0;

 	si(sueldo>=500)
 	{
 		imprima "su sueldo es: "+sueldo;
 	}
 	sino
 	{
 		si(sueldo<500 && antiguedad>=10)
 		{
 			aumento=sueldo*0.2;
 			total=sueldo+aumento;
 			imprima " su sueldo con el 20% de aumento es: "+ total;
 		}
 		sino
 		{
 			si(sueldo<500 && antiguedad<10)
 			{
 				aumento=sueldo*0.05;
 			total=sueldo+aumento;
 			imprima " su sueldo con el 5% de aumento es: "+ total;
 			} 
 		}
 	}

FINAL