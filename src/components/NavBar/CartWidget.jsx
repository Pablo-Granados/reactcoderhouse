import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping }  from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { cartContex } from "../../storage/cartContext";

function CartWidget() {
  const contexto = useContext(cartContex);

  return (
    <div className="carrito">{<Link to="/carrito"><FontAwesomeIcon icon={faCartShopping}/></Link>}
    <span>{contexto.totalItemsEnCarritofn()}</span>
    </div>
  )
}

export default CartWidget