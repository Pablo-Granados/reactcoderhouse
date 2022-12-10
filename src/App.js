import './App.css';
import Header from './components/Header/Header';
import Flex from './components/Flex/Flex';
import Item from './components/ItemListContainer/Item';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


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
              src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/CAXKFDMCYRGXDEM65YCV6X2PYI.png"
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
          {/*<Flex className="botones">
            <Button color="red" text="Black">Soy un children</Button>
            <Button color="darkgreen" text="Aprender React" />
            <Button text="Mas propiedades" color="purple" size="64px" />
  </Flex>*/}
          <Flex className="tarjetas">
            <Item
              price={788}
              title="Lionel Andres Messi"
              description="El mejor de todos los tiempos"
              img="https://www.clarin.com/img/2022/09/27/lionel-messi-hablo-en-una___sHZlTLfdB_2000x1500__1.jpg"
              alt="Messi"
              stock={7}
            />
            <Item
              price={148}
              title="Juan Roman Riquelme"
              description="El último 10"
              img="https://i.ytimg.com/vi/cPqUCay877o/maxresdefault.jpg"
              alt="Riquelme"
              stock={4}
            />
            <Item
              price={359}
              title="Diego Armando Maradona"
              description="El Dios del futbol"
              img="https://media.cdn.eldestapeweb.com/eldestape/062021/1624367284082/maradona_gol_vs_inglaterra_ingleses_mundial_mexico_86.jpg?&cw=600&ch=365"
              alt="Maradona"
              stock={10}
            />
                        <Item
              price={280}
              title="Carlos Alberto Tevez"
              description="El apache"
              img="https://resizer.glanacion.com/resizer/zrdpI0rIFMjTylYiE-SuKP7KRfw=/1200x800/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/GXZRFT46MVGBBPRW6KO4B5RFSI.jpg"
              alt="Tevez"
              stock={8}
            />
                        <Item
              price={328}
              title="Hernan Jorge Crespo"
              description="Valdanito"
              img="https://i.pinimg.com/originals/60/aa/21/60aa21ebc695d320a33519db3cf04529.jpg"
              alt="Crespo"
              stock={5}
            />
                        <Item
              price={130}
              title="Pablo Cesar Aimar"
              description="El payaso"
              img="https://i.guim.co.uk/img/media/ed3f4ab8f1f3be9f82efaf9f70e11186e3153718/0_40_3162_1898/master/3162.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=10a9fb9b6795d802012872e92d18ad03v"
              alt="Aimar"
              stock={2}
            />
                        <Item
              price={29}
              title="Lionel Sebastian Scaloni"
              description="Leónidas de Pujato"
              img="https://fotos.perfil.com/2021/07/10/trim/720/410/lionel-scaloni-1202561.jpg"
              alt="Scaloni"
              stock={3}
            />
          </Flex>

        </header>
      </div>
    </>
  );
}

export default App;
