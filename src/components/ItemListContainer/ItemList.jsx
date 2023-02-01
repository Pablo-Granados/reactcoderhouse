import React from 'react'
import Flex from '../Flex/Flex'
import Item from './Item'

function ItemList(props) {
    if (props.productos.length === 0) {
        return <div>No hay productos disponibles en esta categoría.</div>;
      } else
    
  return (
    <Flex className="tarjetas">
    {props.productos.map((item) => (
        <Item
            key={item.id}
            id={item.id}
            price={item.price}
            title={item.title}
            description={item.description}
            img={item.img}
            alt={item.alt}
            stock={item.stock}
            newProduct={item.newProduct}
            discount={item.discount}
        />
    ))}
</Flex>  )
}

export default ItemList