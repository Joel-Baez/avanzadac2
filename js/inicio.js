console.log("hola desde js");
console.error("ok 2");
/**
 * bloque (comentario de bloque)
 */
// linea (comentario de una linea)
/**
 * variables: var, let, const
 */
let nombre = "Joel"
let apellido = "Báez"
const nombrecompleto = `${nombre} ${apellido}`
//nombrecompleto =  nombre + " " + apellido
alert(nombrecompleto)

let edad = 30;
let salario =12.5
let mayorEdad= true//false
let a = null
let b = undefined;
console.log(apellido)
apellido =12;
apellido = true
let numeros =[]
numeros = new Array (10)
numeros =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let otro=["add",12, 12.5, true, null, [1,2,3]]
let persona ={
    nombre: "joel",
    apellido: "Báez",
    edad: 20,
    mayorEdad: true,
    jobs:[]

}
console.log(numeros[1])
console.log(persona.nombre, persona.apellido)

console.log('ciclos-----------')
console.log('for----------')
for(let index=0; index<numeros.length;index++){
    const mod = numeros[index] %2
    if(mod==0){
        console.log(numeros[index], 'par')
    } else{
        console.log(numeros[index], 'impar')
    }

}
console.log('for of----------')
    for (let numero of numeros){
        const mod = numero %2
        if(mod==0){
            console.log(numero, 'par')
        } else{
            console.log(numero, 'impar')    
        }

    }