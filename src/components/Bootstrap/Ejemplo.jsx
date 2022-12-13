import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMartiniGlassCitrus, faMagnifyingGlass, faChampagneGlasses, faWineGlass, faBeerMugEmpty, faGlassWhiskey, faToggleOn } from "@fortawesome/free-solid-svg-icons";
import CartWidget from '../NavBar/CartWidget'

function Ejemplo() {
    return (
        <nav className="navbar navbar-expand-md bg-light">
            <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <a className="navbar-brand ms-0 logo" href="#"><FontAwesomeIcon icon={faChampagneGlasses} /></a>
                <form className="d-flex" role="search">
                    <input className="form-control me-1" type="search" placeholder="Buscar..." aria-label="Search" />
                    <button className="btn btn-outline lupa" type="submit" title="Buscar"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                </form>
                <CartWidget />
            </div>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">La coctelera</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Vinos y espumantes <FontAwesomeIcon icon={faWineGlass}/></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Cervezas <FontAwesomeIcon icon={faBeerMugEmpty}/></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Destilados <FontAwesomeIcon icon={faMartiniGlassCitrus}/></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Aperitivos <FontAwesomeIcon icon={faGlassWhiskey}/></a>
                    </li>
                </ul>
            </div>

        </nav>

    )
}

export default Ejemplo