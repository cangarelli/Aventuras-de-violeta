// Variables Gobales:
let participantes = [] // Array de string
let gasto =[] // Array de numero
let individual = [] // Array de numero
let accion = [] // Array de string
let resultado = 0 // Variable de numero
let cantidad = 0 // Variable de numero

// Biblioteca de funciones
function cuantos() {
    do {
        cantidad = parseInt(prompt("¿Cuantos son?"))
        if (cantidad > 0) {
            console.log (cantidad)
        } else if (cantidad < 0) {
            console.log("Ingresaste un numero de personas equivocado. Volve a revisar cuantos son e ingresalo.")
            cantidad = 0
        }else {
            console.log("Tenes que ingresar un numero entero de personas para poder continuar")
            cantidad = 0 
        }
        
    } while (cantidad == "0");
}
function nombrando() {
    participantes [0] = prompt("Nombra a uno de los que participo de la reunion:")
    for (let i = 1; i < cantidad; i++ ){
        participantes [i] = prompt("Nombra a otro de los que participo de la reunion:")
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
    for (let i=1; i<cantidad; i++) {
        respuesta[0] = (`${participantes[0]} tiene que ${accion[0]} $ ${individual[0]} pesos`)
        respuesta[i] = (` ${participantes[i]} tiene que ${accion[i]} $ ${individual[i]} pesos`)
    }
    alert(respuesta)
}
function hacerLasCuentas() {
    cuantos();
    nombrando(); 
    costo();   
    dividir();
    definirAccion();
    repartirGasto();
}

