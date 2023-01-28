import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping }  from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../../storage/cartContext";

function CartWidget() {
  const contexto = useContext(cartContext);
  const condicion = contexto.totalItemsEnCarritofn() > 0;


  //2. rendering condicional con operadores logicos -> &&
  return (
    <div className="carrito">{<Link to="/carrito"><FontAwesomeIcon icon={faCartShopping}/></Link>}
    {
      condicion && <span>{contexto.totalItemsEnCarritofn()}</span>
    }
    </div>
  )
}

export default CartWidget