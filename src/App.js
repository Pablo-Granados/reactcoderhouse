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
      <div className="App">
        <Header />
        {/*Soy un comentario de JSX*/}
        <div className="App-header">
          <div className="fondo">
            <img className="fondoIMG"
              onClick={handleImageClick}
              src="https://images.losandes.com.ar/resizer/5QdOTebiuhsTZRMbHdAndLbvqRk=/980x640/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/R5B764D2LRB4VGDN7RZVC4SLLE.jpg"
              alt="logo react"
            />
          </div>
          <ItemListContainer/>
        </div>
      </div>
    </>
  );
}

export default App;
