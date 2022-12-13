//----------BACK END-----------
function APICall(){
    let error = true;
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            console.log("Llamado a API resuelto")
            reject("Error en la API")
        }, 2000);
    })
}

//-----------FRONT END----------
console.log("APP iniciada");

APICall().then( (respuesta) =>{
    console.log(respuesta)
 }).catch((errorMessage) => {
    console.log("Error: ",errorMessage);
 }).finally (() => console.log("Promesa terminada"));



console.log("App finalizada")