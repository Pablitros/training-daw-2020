// Declarar un array numérico (entero) y crear un método que imprima:
// La suma de todos los elementos
// El elemento más grande
// El elemento más pequeño
// La media de los elementos



function doCalculation(array) {
    let sum = 0;
    let biggerElement = array[0];
    let smallerElement = array[0];
    let average = 0;
    for (let i = 0; i < array.length; i++) {
        //Para sumar
        sum = sum + array[i];
        //El elemento mas grande
        if (biggerElement < array[i]) {
            biggerElement = [array[i]];
        }
        //El elemnto mas pequeño
        if (smallerElement > array[i]) {
            smallerElement = [array[i]];
        }
        //Para sacar la media de los elementos
        average = average + array[i];

    }
    console.log(`La SUMA de los elementos es de: ${sum}`);
    console.log(`El ELEMENTO MAS GRANDE es: ${biggerElement}`)
    console.log(`El ELEMENTO MAS PEQUEÑO es: ${smallerElement}`)
    console.log(`la MEDIA de los elementos es: ${average/array.length}`)
}



doCalculation([1, 2, 3, 4]);
doCalculation([5, 5, 5, 5])
doCalculation([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5])