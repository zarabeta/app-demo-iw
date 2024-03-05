 import reqRespApi from "../../api/ReqRes";
import { useEffect, useState } from "react";
//import {Usuario} from "../../interfaces/ReqResp"


 export const Usuarios = () => {
    const [usuarios, setUsuarios] = useState([]);
    useEffect(() => {
        //FIC: llamado de la API
        //reqRespApi.get<ReqRespUsuarioListado>('/users')
        reqRespApi.get('/users')
        .then(resp=> {
                setUsuarios(resp.data.data);
        })
        .catch(err => console.log(err))
        }, []) //cuando está vacío quiere decir que solamente se va a ejecutar una vez
               // al inicio del programa
               const renderItem = (usuario) => {
                return (
                    <tr key={usuario.id.toString()}>
                        <td>
                        <img
                        src={ usuario.avatar }
                        alt={ usuario.first_name }
                        style={{
                            width: 50,
                            borderRadius: 100
                        }}
                    >
                    </img>
                        </td>
                        <td>
                            {usuario.first_name} {usuario.last_name}
                        </td>
                        <td>
                            {usuario.email}
                        </td>
                    </tr>
                );
            };
            
    return(
    <>
       
        <h3>Usuarios</h3>
        <table className="table" style={{ width: '300%'}}>
            <thead>
                <tr>
                    <th scope="col">
                        Avatar
                    </th>
                    <th scope="col"> 
                        Nombre
                    </th>
                    <th scope="col">
                        Email
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    usuarios.map(FicArgUsuario => renderItem(FicArgUsuario))
                }
            </tbody>
        </table>
    </>
    );
};