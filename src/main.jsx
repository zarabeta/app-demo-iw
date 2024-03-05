import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import Promesa1 from './pwa-01/Promesa1'
import Promesa2 from './pwa-01/Promesa2'
import Fetch3 from './fetch/Fetch3'
import  {Usuarios} from './tabla/components/Usuarios'


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    {/* <Promesa1 /> */}
    {/*<Fetch3 /> */}
    
    <Usuarios/>
  </React.StrictMode>,
  
)
