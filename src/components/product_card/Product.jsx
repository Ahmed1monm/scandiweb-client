import React from 'react'
import { units } from '../../helpers/contants';
import "./product.css"

export const Product = ({productData, setCheck}) => {
    const checkHandler = () => {
        setCheck((prev)=> prev.includes(productData.id) ? prev.filter(i => i !== productData.id) : [ ...prev, productData.id ])
    }

    return (
        <div className="product">
            <input type='checkbox' className="delete-checkbox" onClick={checkHandler} />
            {Object.keys(productData).map((key) => {
                const value = productData[key];
                if (key !== 'id' && value !== null && key !=='type') {
                    return (
                        <h6 key={`${value}-${productData['id']}`}>
                            {["weight", "dimensions", "size"].includes(key) ? `${key}: ${value} ${units[key]}`:key === 'price'? `${value} $`: `${value}`}
                        </h6>
                    );
                }
            })}
        </div>
    );
}
