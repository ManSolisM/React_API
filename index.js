/* const numeros = ['1','2','3','4','1'];

let filtro = numeros.filter((numero) => numero != '3');

console.log(numeros);
console.log(filtro);

let index = numeros.findIndex((numero) => numero === '3');

console.log(index)

let encontrado = numeros.find((numero) => numero === '3');

console.log(encontrado)

let mapeado = numeros.map((numero) => numero + ' - mapeado');

console.log(mapeado)

let fill = numeros.fill('0');

console.log(fill)

let some = numeros.some((numero) => numero === '2');

console.log(some)

let every = numeros.every((numero) => numero !== '5');

console.log(every)

let set = new Set(numeros);

console.log(set)
 */

const arreglo_nombres = ["ana", "juan", "pedro", "maria", "carmen", "ana", "juan"];

const arreglo_numeros = [1,2,3,4,5];

const repetidos = (arreglo) =>{
    let no_repetidos = new Set(arreglo);
    let duplicados = new Set();
    arreglo.map((dato) => {
        if(arreglo.filter((filtro) => filtro === dato).length > 1) duplicados.add(dato);
    });
    console.log(no_repetidos.size === arreglo.length ? 'No hay datos repetidos' : 'Hay datos repetidos');
    console.log('Duplicados: ', ...duplicados);
} 

repetidos(arreglo_nombres);
console.log("-----------------------");
repetidos(arreglo_numeros);