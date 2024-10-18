// FamilyTree.js

class Person {
    constructor(name, parent = null) {
        this.name = name;         // Nombre de la persona
        this.parent = parent;     // Referencia al padre
        this.children = [];       // Lista de hijos
    }

    // Método para añadir un hijo
    addChild(childName) {
        const child = new Person(childName, this);
        this.children.push(child);
        return child; // Devuelve el nuevo hijo para posibles futuras referencias
    }

    // Método para obtener el árbol genealógico de esta persona
    getFamilyTree() {
        const tree = {
            name: this.name,
            children: this.children.map(child => child.getFamilyTree())
        };
        return tree;
    }
}

// Ejemplo de uso
const grandparent = new Person('Abuelo');
const parent = grandparent.addChild('Padre');
const child1 = parent.addChild('Hijo 1');
const child2 = parent.addChild('Hijo 2');

// Imprimir el árbol genealógico
console.log(JSON.stringify(grandparent.getFamilyTree(), null, 2));
