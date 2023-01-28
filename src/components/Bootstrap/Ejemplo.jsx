import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMartiniGlassCitrus, faMagnifyingGlass, faChampagneGlasses, faWineGlass, faBeerMugEmpty, faGlassWhiskey } from "@fortawesome/free-solid-svg-icons";
import CartWidget from '../NavBar/CartWidget'
import { Link } from "react-router-dom";

function Ejemplo() {
    return (
        <nav className="navbar navbar-expand-md bg-light">
            <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <Link className="navbar-brand ms-0 logo" to="/"><FontAwesomeIcon icon={faChampagneGlasses} /></Link>
                <form className="d-flex" role="search">
                    <input className="form-control me-1" type="search" placeholder="Buscar..." aria-label="Search" />
                    <button className="btn btn-outline lupa" type="submit" title="Buscar"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                </form>
                <CartWidget />
            </div>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active inicio" aria-current="page" to="/">La coctelera</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/category/vinos">Vinos y espumantes <FontAwesomeIcon icon={faWineGlass}/></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/category/cervezas">Cervezas <FontAwesomeIcon icon={faBeerMugEmpty}/></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/category/destilados">Destilados<FontAwesomeIcon icon={faMartiniGlassCitrus}/></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/category/aperitivos">Aperitivos<FontAwesomeIcon icon={faGlassWhiskey}/></Link>
                    </li>
                </ul>
            </div>

        </nav>

    )
}

export default Ejemplo