import "./navbar.css"
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <div className="barra-de-nav">
        <h2>Scaloneta</h2>
        <ul className="categorias">
            <li>Arqueros</li>
            <li>Defensores</li>
            <li>Mediocampistas</li>
            <li>Delanteros</li>
        </ul>
        <CartWidget/>
        
    </div>
  )
}

export default NavBar