function Promesa2() {


    function fcnSumarUno(numero, fcnResultadoCallBack) {
        var promesa = new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(numero + 1);
            }, 3000);
        });
        return promesa;


    }

    //const persona = await cat_personas.find((person)=> person.Name = 'Frank')
    //FIC: llamar la funcion
    fcnSumarUno(10)
        .then(nuevoNumero => {
            console.log(nuevoNumero);
            return fcnSumarUno(nuevoNumero);
        }).then(nuevoNumero2 =>{
            console.log(nuevoNumero2);
            return fcnSumarUno(nuevoNumero2);
        }).then(nuevoNumero3 =>{
            console.log(nuevoNumero3);
        });
    // console.log("La Suma es:", Resultado);

    return (
        <div>
            <h1> Programa de promesa </h1>
        </div>
    );
};
export default Promesa2;