//EJERCICIO 1
let gasolina = 100;
while (gasolina > 0) {
    document.write("Gasolina restante: " + gasolina  + "<br>");
    gasolina = gasolina - 10;
}

//EJERCICIO 2
let numA = parseInt (prompt ("Ingresa un número"));
let numB = parseInt (prompt ("Ingresa otro número")); 
while (numA === numB) {
    document.write("Los números son iguales <br>");
    numA = parseInt (prompt ("Ingresa un número"));
    numB = parseInt (prompt ("Ingresa otro número"));
} if (numA > numB) {
    document.write("El número mayor es: " + numA + "<br>");
} else if (numB > numA) {
    document.write("El número mayor es: " + numB + "<br>");
}

//EJERCICIO 3
for (let i = 1; i <= 50; i++) {
    document.write("2 x " + i + " = " + (2 * i) + "<br>");
}

//EJERCICIO 4
for (let i=1; i<101; i++){
    document.write (i, "<br>")
};

//EJERCICIO 5
for (let i = 1; i <= 10; i++) {
    document.write("Hola mundo con Js" + "<br>");
}

//EJERCICIO 6
let suma = 0;
for (let i = 2; i <= 100; i += 2) {
    suma += i;
}
document.write("La suma de los números pares de 2 al 100 es: " + suma + "<br>");