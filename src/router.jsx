import App from './pages/app/App.js';
import Contato from './pages/CONTATO/index.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

export default function Rotas(){

    return(
<BrowserRouter>
<Routes>
    <Route path='/' element= {<App/>}/>
    <Route path='/contato' element= {<Contato/>}/> 
</Routes>
</BrowserRouter>
    );
}