//----------BACK END-----------
function APICall(){
    return new Promise ((resolve,) => {
        setTimeout(() => {
            console.log("Llamado a API resuelto")
            resolve("Respuesta OK")
        }, 2000);
    })
}

//-----------FRONT END----------
console.log("APP iniciada");

APICall().then( (respuesta) =>{
    console.log(respuesta)
 });

console.log("App finalizada")