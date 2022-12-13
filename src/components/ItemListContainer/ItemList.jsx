import React from 'react'
import Flex from '../Flex/Flex'
import Item from './Item'

function ItemList(props) {
    
  return (
    <Flex className="tarjetas">
    {props.productos.map((item) => (
        <Item
            key={item.id}
            price={item.price}
            title={item.title}
            description={item.description}
            img={item.img}
            alt={item.alt}
            stock={item.stock}
        />
    ))}
</Flex>  )
}

export default ItemList