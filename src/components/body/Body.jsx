import React from 'react'
import { Product } from '../productCard/Product';

export const Body = ({products, setCheck}) => {
    return (
        <div  style={{height:'calc(98vh - 135px)', overflow:'auto',display:'flex',flexWrap:'wrap' }}>
            {products.length > 0 ?products.map((product)=><Product productData={product} key={product.id} setCheck={setCheck} />):""}
        </div>
    )
}

export default Body;