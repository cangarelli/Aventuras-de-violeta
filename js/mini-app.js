/* Variables Gobales: */
let participantes = [] // Array de string
let gasto =[] // Array de numero
let individual = [] // Array de numero
let accion = [] // Array de string
let resultado = 0 // Variable de numero
let cantidad = 0 // Variable de numero
let respuesta = [] // Array dinamico

// Biblioteca de funciones
function cuantos() {
    do {
         cantidad = parseInt(prompt("¿Cuantos son?"))
        if (cantidad > 1) {
            console.log (cantidad)
        } else if (cantidad <= 1) {
            alert("Ingresaste un numero de personas equivocado. Volve a revisar cuantos son e ingresalo.")
            cantidad = 0
        }else {
            alert("Tenes que ingresar un numero entero de personas para poder continuar")
            cantidad = 0 
        }
    } while (cantidad == "0");
}
function nombrando() {
    do {
        participantes [0] = prompt("Nombra a uno de los que participo de la reunion:")
        if (participantes[0].length < 1 || participantes [0] == " ") {
            alert ("Ingrese un nombre de al menos un caracter que nos sea un espacio en blanco")
            participantes [0] = ""
        } else {
            console.log ("Usuario valido")
        }
    } while (participantes [0] == "")
    let x = ["false"]
    for (let i = 1; i < cantidad; i++ ){
        x[i] = "false"
        while (x [i] == "false") {
            participantes [i] = prompt("Nombra a otro de los que participo de la reunion:")
            if (participantes[i].length < 1 || participantes [i] == " ") {
                alert ("Ingrese un nombre de al menos un caracter que nos sea un espacio en blanco")
                x [i] = "false"
            } else {
                console.log ("Usuario valido")
                x[i] = "true"
            }
        }
    }
    console.log(participantes)    
}
function costo() {
for (let i=0; i<cantidad; i++) {
    let a = "false"
    do {
        gasto[i] = prompt ("¿cuanto gasto "+`${participantes[i]}`+"?")
        if (gasto[i] >= 0) {
            a = "true"
        }else {
            console.log("Ingrese un valor igual a 0 o mayor")
        }
    } while (a == "false");
}
console.log(gasto)
for (let i=0; i< gasto.length; i++){
    resultado = (resultado + Number(gasto[i]))
}
console.log(resultado)
console.log("Gastaron en total "+`${resultado}`)
}
function dividir() {
    let gastoUnitario = Number(resultado / cantidad)
    console.log (gastoUnitario)
    for (let i=0; i<cantidad; i++) {
        individual [i] = Number(gasto[i]) - Number(gastoUnitario) 
    }
    console.log (individual)
}
function definirAccion() {
    for (let i=0; i<cantidad; i++) {
        if (individual[i]<0) {
            accion[i]= "dar"
        } else {
            accion[i]= "recibir"
        }
    }
    console.log(accion)
}
function repartirGasto() {
    for (let i=0; i<cantidad; i++) {
        individual[i] = Math.abs(parseInt(individual[i]))
    }
    respuesta[0] = (` ${participantes[0]} tiene que ${accion[0]} $ ${individual[0]} pesos`)
    for (let n=1; n<cantidad; n++) {
        respuesta[n] = (` ${participantes[n]} tiene que ${accion[n]} $ ${individual[n]} pesos`)
    }
    alert(respuesta)
}
const reset = () => { 
    participantes = [] // Array de string
    gasto =[] // Array de numero
    individual = [] // Array de numero
    accion = [] // Array de string
    resultado = 0 // Variable de numero
    cantidad = 0 // Variable de numero
    respuesta = []
}

// Funcion global con variables declaradas
function hacerLasCuentas() {
cuantos();
nombrando(); 
costo();   
dividir();
definirAccion();
repartirGasto();
reset()
}

