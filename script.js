//ORDENAR MAYOR A MENOR
function mayorMenor(){
    productos.sort((a,b) => b.precio - a.precio);
    console.table(productos);
}

//ORDENAR MENOR A MAYOR
function menorMayor(){
    productos.sort((a,b) => a.precio - b.precio);
    console.table(productos);
}

let opcion = prompt("Ingresa si deseas ordenar los productos según su precio (1-menor a mayor) (2-mayor a menor) (0-salir)");

while(opcion != 0){
    switch(opcion){
        case "1":
            menorMayor();
            break;
        case "2":
            mayorMenor();
            break;
        default:
            alert("El número ingresado no es una opción válida, vuelva a ingresar");
            break;
    }

    opcion = prompt("Ingresa si deseas ordenar los productos según su precio (1-menor a mayor) (2-mayor a menor) (0-salir)");
}

