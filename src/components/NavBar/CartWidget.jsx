import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping }  from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";



function CartWidget() {
  return (
    <div className="carrito">{<Link to="/carrito"><FontAwesomeIcon icon={faCartShopping}/></Link>}</div>
  )
}

export default CartWidget