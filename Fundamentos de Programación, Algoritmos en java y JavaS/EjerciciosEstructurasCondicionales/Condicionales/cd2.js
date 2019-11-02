INICIO
numerico descuento,valorcompra,valortotal;

imprima "digite el valor de su compra";
lea valorcompra;
descuento=0;
valortotal=valorcompra;

si(valorcompra>=100000){
descuento=valorcompra*0.5;
valortotal=valorcompra-descuento;
imprima "su descuento del 50% es: "+ descuento;
}
sino
{
descuento=valorcompra*0.1;
valortotal=valorcompra-descuento;
imprima "su descuento del 10% es: "+ descuento;
}

FINAL