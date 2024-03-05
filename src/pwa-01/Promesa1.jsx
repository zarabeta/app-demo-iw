function Promesa1() {

    console.log('Hola mundo');

    function fcnSumarUno(numero, fcnResultadoCallBack) {
        setTimeout(() => {
            //return numero + 1;
            let suma = numero + 1;
            //return suma;
            fcnResultadoCallBack(suma)
        }, 3000);

    }

    //FIC: llamar la funcion
    let Resultado = fcnSumarUno(5, function (newValue) {
        console.log("La suma es: ", newValue)
    });
    // console.log("La Suma es:", Resultado);


    return (
        <div>
            <h1> Programa de promesa </h1>
        </div>
    );
};
export default Promesa1;