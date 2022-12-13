import './App.css';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Portada from './components/Portada/Portada';


// JSX //
function App() {


  return (
    <>
      <div className="App">
        <Header />
        {/*Soy un comentario de JSX*/}
        <div className="App-header">
          <Portada
            titulo="La coctelera"
            subtitulo="Las mejores recetas para tus tragos">
          </Portada>
          <ItemListContainer />
        </div>
      </div>
    </>
  );
}

export default App;
