import './App.css';
import Button from "./components/Button/Button";
import Header from './components/Header/Header';
import Flex from './components/Flex/Flex';
import Item from './components/ItemListContainer/Item';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';



// JSX //
function App() {

  function handleImageClick() {
    console.log("Click en la imagen")
  }

  return (
    <>
      <Header />
      <ItemListContainer
      titulo="Bienvenido/a"
      subtitulo="No te rias, estoy aprendiendo"
      />
      {/*Soy un comentario de JSX*/}
      <div className="App">
        <header className="App-header">
          <div className="fondo">
            <img className="fondoIMG"
              onClick={handleImageClick}
              src="https://www.patterns.dev/img/reactjs/react-logo@3x.svg"
              alt="logo react"
            />
          </div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
          <Flex className="botones">
            <h2>Holis</h2>
            <Button color="red" text="Black">Soy un children</Button>
            <Button color="darkgreen" text="Aprender React" />
            <Button text="Mas propiedades" color="purple" size="64px" />
          </Flex>
          <Flex className="tarjetas">
            <Item
              price={200}
              title="Lionel Andres Messi"
              description="El mejor de todos los tiempos"
              img="https://www.clarin.com/img/2022/09/27/lionel-messi-hablo-en-una___sHZlTLfdB_2000x1500__1.jpg"
              alt="Messi"
            />
            <Item
              price={500}
              title="Juan Roman Riquelme"
              description="El último 10"
              img="https://i.ytimg.com/vi/cPqUCay877o/maxresdefault.jpg"
              alt="Riquelme"
            />
          </Flex>

        </header>
      </div>
    </>
  );
}

export default App;
