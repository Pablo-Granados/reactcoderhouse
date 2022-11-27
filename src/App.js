import './App.css';

// JSX //
function App() {

const comision = "40295";
function mostrarComision() {
  console.log("log");
  return `Bienvenida comision ${comision}`
}
const stylesH1 = {
  backgroundColor: "#282c34",
  color: "whiteSmoke",
  padding: "1rem",
  textAlign: "center",
}

function handleImageClick(){
  console.log("Click en la imagen")
}

  return (
    <>
    {/*Soy un comentario de JSX*/}
      <div style={stylesH1}>
        <h1>{mostrarComision()}</h1>
      </div>
      <div className="App">
        <header className="App-header">
          <p> Primeros pasos en React JS! Comisión {comision}</p>
          <p> {11 * 2}</p>
          <div>
            <img 
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
            Learn React
          </a>
        </header>
      </div>
    </>
  );
}

export default App;
