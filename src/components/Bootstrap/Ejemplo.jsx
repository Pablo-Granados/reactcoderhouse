import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFutbol }  from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass }  from "@fortawesome/free-solid-svg-icons";
import CartWidget from '../NavBar/CartWidget'

function Ejemplo() {
    return (
        <nav className="navbar navbar-expand-sm bg-light">
            <div className="container-fluid">
                <a className="navbar-brand ms-0" href="#"><FontAwesomeIcon icon={faFutbol}/></a>
                <form className="d-flex me-auto ms-2" role="search">
                        <input className="form-control me-1" type="search" placeholder="Buscar..." aria-label="Search" />
                        <button className="btn btn-outline-success lupa" type="submit" title="Buscar"><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
                    </form>
                <button className="navbar-toggler ms-auto me-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <CartWidget/>
            </div>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Disabled</a>
                        </li>
                    </ul>
                </div>

        </nav>
        
    )
}

export default Ejemplo