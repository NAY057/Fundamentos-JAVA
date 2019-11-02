INICIO
	numerico sueldoBase,cantHorasExtras,sueldoTotal; 
	numerico totalHorasExtras,cantpersonas;

    imprima "ingrese el numero de personas que desea calcular";
    lea cantpersonas;
	para(i=1;i<=cantpersonas;i++){
     
    imprima "ingrese la informacionde la persona"+i;

	imprima "Ingrese el sueldo base";
	lea sueldoBase;
	imprima "ingrese la cantidad de horas extras trabajadas";
	lea cantHorasExtras;
	
	totalHorasExtras=cantHorasExtras*3000;
	
	sueldoTotal=sueldoBase+totalHorasExtras;
	
	imprima "El sueldo total es = "+sueldoTotal;


	}
	
	
FINAL