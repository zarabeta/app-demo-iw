
function fetch2() {

    //FIC: declaramos un objeto
    let usuario = {
        nombre: "Aitana",
        edad: 25
    };

    // API POST de Usuario
    fetch('https://reqres.in/api/users', {
        method: 'POST',
        body: JSON.stringify(usuario), //data a enviar
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(resp => resp.json())
        .then(console.log)
        .catch(error => {
            console.log('Error en la peticion API POST');
            console.log(error);
        });

    return (
        <>
            <div>
                <h1>Programa de Fetch 3</h1>
            </div>
        </>
    );
};

export default fetch2;