import './App.css';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Carrito from './components/Carrito/Carrito';
import { createContext } from 'react';
import Contacto from './components/pages/Contacto';
import { CartContexProvider } from './storage/cartContext';
import InicioAPP from './components/InicioAPP/InicioAPP';
import Portada from './components/Portada/Portada';

// inicializar contexto
const contexto = createContext([]);
//extraer provider
const Provider = contexto.Provider;
//crear value para provider



// JSX //
function App() {


  return (
    <CartContexProvider>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<InicioAPP />}></Route>
            <Route path="/category/:categoryID" element={<InicioAPP/>}></Route>
            <Route path="/item/:itemID" element={<ItemDetailContainer />}></Route>
            <Route path="/contacto" element={<Contacto />}></Route>
            <Route path="/carrito" element={<Carrito />}></Route>

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
    </CartContexProvider>
  );
}

export {contexto}
export default App;
