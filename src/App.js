import './App.css';
import Header from './components/Header/Header';
import ItemDetail from './components/ItemDetailContainer/ItemDetail';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Portada from './components/Portada/Portada';
import Contacto from "./components/pages/Contacto"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartWidget from './components/NavBar/CartWidget';
// JSX //
function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
        <Route path="/" element={ <ItemListContainer />}></Route>
        <Route path="/category/:categoryID" element={ <ItemListContainer />}></Route>

        <Route path="/item/:itemID" element={ <ItemDetailContainer />}></Route>
        <Route path="/carrito" element={ <ItemDetailContainer />}></Route>
        </Routes>
        {/*Soy un comentario de JSX
         <div className="App-header">
          <Portada
            titulo="La coctelera"
            subtitulo="Las mejores recetas para tus tragos">
          </Portada>
          {/* <ItemListContainer />
          <ItemDetail/>
        </div> */}
      </div>
      </BrowserRouter>
  );
}

export default App;
