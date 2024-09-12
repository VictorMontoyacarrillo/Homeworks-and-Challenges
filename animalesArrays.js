// Ejemplo 1: Declarar un array con nombres de animales
let animales = ["perro", "gato", "conejo", "elefante", "tigre"];
console.log("Animales:", animales);

// Ejemplo 2: Acceder a elementos del array
console.log("Primer animal:", animales[0]); // perro
console.log("Último animal:", animales[animales.length - 1]); // tigre

// Ejemplo 3: Agregar y eliminar elementos
animales.push("león");
console.log("Después de agregar león:", animales); // ["perro", "gato", "conejo", "elefante", "tigre", "león"]

animales.pop();
console.log("Después de eliminar el último animal:", animales); // ["perro", "gato", "conejo", "elefante", "tigre"]

animales.unshift("tortuga");
console.log("Después de agregar tortuga al inicio:", animales); // ["tortuga", "perro", "gato", "conejo", "elefante", "tigre"]

animales.shift();
console.log("Después de eliminar el primer animal:", animales); // ["perro", "gato", "conejo", "elefante", "tigre"]

// Ejemplo 4: Recorrer el array
console.log("Recorriendo el array con for:");
for (let i = 0; i < animales.length; i++) {
    console.log(animales[i]);
}

console.log("Recorriendo el array con forEach:");
animales.forEach(animal => console.log(animal));

// Ejemplo 5: Filtrar animales en el array
let animalesFiltrados = animales.filter(animal => animal.length > 5);
console.log("Animales con más de 5 letras:", animalesFiltrados); // ["conejo", "elefante", "tigre"]

// Ejemplo 6: Mapear el array para cambiar a mayúsculas
let animalesMayus = animales.map(animal => animal.toUpperCase());
console.log("Animales en mayúsculas:", animalesMayus); // ["PERRO", "GATO", "CONEJO", "ELEFANTE", "TIGRE"]

// Ejemplo 7: Buscar un animal en el array
let index = animales.indexOf("gato");
console.log("Índice de 'gato':", index); // 1

let existeTigre = animales.includes("tigre");
console.log("¿Existe 'tigre' en el array?:", existeTigre); // true

// Ejemplo 8: Reducir el array a un string
let animalesJuntos = animales.reduce((acc, animal) => acc + ", " + animal);
console.log("Animales concatenados:", animalesJuntos); // "perro, gato, conejo, elefante, tigre"

// Ejemplo 9: Ordenar el array alfabéticamente
animales.sort();
console.log("Animales ordenados:", animales); // ["conejo", "elefante", "gato", "perro", "tigre"]

// Ejemplo 10: Array multidimensional
let categoriasAnimales = [
    ["perro", "gato"], // Mascotas
    ["león", "tigre"], // Animales salvajes
    ["pez", "tortuga"] // Animales acuáticos
];

console.log("Mascotas:", categoriasAnimales[0]); // ["perro", "gato"]
console.log("Animal salvaje:", categoriasAnimales[1][1]); // tigre
