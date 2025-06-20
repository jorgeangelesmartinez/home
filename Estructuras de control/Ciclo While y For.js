//1 imprimir en pantalla la gasolina restante de un taxi
let gasolina = 100;
while (gasolina > 0) {
    document.write("Gasolina restante: " + gasolina  + "<br>");
    gasolina = gasolina - 10;
}

//2 imprimir el mayor de 2 números ingresados por el usuario. Mientras el usuario ingrese los mismos números, aparecerá en la pantalla "Los numeros son iguales" hasta que ingrese números diferentes.
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

//3 imprimir en pantallla la tabla del 2, utilizando el ciclo for. (imprimir hasta el 50. Ejemplo: 2x50=100)
for (let i = 1; i <= 50; i++) {
    document.write("2 x " + i + " = " + (2 * i) + "<br>");
}

//4 imprimir en pantalla los numeros del 1 al 100
for (let i=1; i<101; i++){
    document.write (i, "<br>")
};

//5 imprimir en pantalla "Hola mundo con Js" 10 veces.
for (let i = 1; i <= 10; i++) {
    document.write("Hola mundo con Js" + "<br>");
}

//6 imprimir la suma de los números pares de 2 al 100. 
let suma = 0;
for (let i = 2; i <= 100; i += 2) {
    suma += i;
}
document.write("La suma de los números pares de 2 al 100 es: " + suma + "<br>");