//----------BACK END-----------
function APICall() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Llamado a API resuelto")
            reject("Error en la API")
        }, 2000);
    })
}

//-----------FRONT END----------
console.log("APP iniciada");

async function leerDatos() {
    // APICall().then( respuesta => hacerAlgo(respuesta))
    try {
        let respuesta = await APICall();
        console.log(respuesta)
    } catch (error) {
        console.error("Error en try/catch")
    }


}

console.log(leerDatos());

console.log("App finalizada.")