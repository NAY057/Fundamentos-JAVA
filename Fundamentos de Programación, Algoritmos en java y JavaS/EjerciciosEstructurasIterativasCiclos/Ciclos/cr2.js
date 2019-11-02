INICIO
numerico num1,num2,resultado,operacion;
texto menu,preg;

repita
{
menu="menu";
menu+="¿que desea hacer?";
menu+="1. sumar";
menu+="2. restar";
menu+="3. multiplicar";
menu+="4. dividir";

imprima "ingrese el numero 1";
lea num1;
imprima "ingrese el numero 2";
lea num2;

segun sea(operacion)
{
caso 1: resultado=num1+num2;
imprima "la suma es: "+resultado;
break;
caso 2: resultado=num1-num2;
imprima "la resta es: "+resultado;
break;
caso 3: resultado=num1*num2;
imprima "la multiplicacion es: "+resultado;
break;
caso 4: si(num1>0 && num2>0)
		{
			resultado=num1/num2;
			imprima "la divicion es: "+resultado;
		}
		sino
		{
			imprima "no se puede realizar la operacion la operacion";
		}
break;
default: imprima "la operacion no esta en el menu";
break;
}

imprimir resultado;

imprima "si desea continuar digite si";
lea preg;
}
mientras(preg==si);

FINAL