import React from 'react'
import { Product } from '../product_card/Product';

export const Body = ({products, setCheck}) => {
    return (
        <div  style={{height:'calc(98vh - 110px)', overflow:'auto',display:'flex',flexWrap:'wrap' }}>
            {products.length > 0 ?products.map((product)=><Product productData={product} key={product.id} setCheck={setCheck} />):""}
        </div>
    )
}

export default Body;