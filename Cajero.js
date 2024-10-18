
class Cola {
    constructor() {
        this.cola = [];  
    }
 
    
    encolar(persona) {
        this.cola.push(persona);
        console.log(`${persona.nombre} ha sido agregado a la cola.`);
    }
 
   
    procesar() {
        if (this.cola.length > 0) {
            const persona = this.cola.shift();  
            console.log(`Atendiendo a ${persona.nombre}, Importe a retirar: ${persona.importe}, Hora de llegada: ${persona.hora}`);
        } else {
            console.log("No hay personas en la cola.");
        }
    }

    estaVacia() {
        return this.cola.length === 0;
    }
 
    
    siguiente() {
        if (this.cola.length > 0) {
            const persona = this.cola[0];  
            console.log(`Siguiente persona en la cola: ${persona.nombre}`);
        } else {
            console.log("No hay personas en la cola.");
        }
    }
}
 

class Persona {
    constructor(nombre, importe, hora) {
        this.nombre = nombre;
        this.importe = importe;
        this.hora = hora;
    }
}
 

const colaCajero = new Cola();
 

colaCajero.encolar(new Persona("Marcos Molina", 100, "11:30 AM"));
colaCajero.encolar(new Persona("Monica Villota", 200, "08:35 AM"));
colaCajero.encolar(new Persona("Carlos Cuesta", 50, "07:40 AM"));
 

colaCajero.siguiente();
 

colaCajero.procesar();  
colaCajero.procesar();  
colaCajero.procesar();  
 

colaCajero.procesar();