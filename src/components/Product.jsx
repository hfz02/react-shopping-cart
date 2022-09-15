import React from 'react'

function Product(props) {
    const { item, product, addItem, removeItem } = props

    return (
        <div className='card'>
            <img src={product.image} alt={product.name} className="small" />
            <h3>{product.name}</h3>
            <div>${product.price}</div>
            <div>
                {item ? 
                    <div>
                        <button onClick={() => removeItem(item)} className="remove">-</button>
                        <span className="p-1">{item.qty}</span>
                        <button onClick={() => addItem(item)} className="add">+</button>
                    </div>
                :
                    <button onClick={() => addItem(product)}>Add To Cart</button>
                }
            </div>
        </div>
    )
}

export default Product