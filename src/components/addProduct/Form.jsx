import { useState } from 'react';
import InputField from './InputField';
import Dvd from './Dvd';
import Book from './Book';
import Furniture from './Furniture';
import AlertError from './ErrorMessage';

const Form = (setters)=>{
    const [productType, setProductType] = useState('switcher')
    
    const handleChange = (e) => {
        setProductType(e.target.value)
    }
   
    const productComponent = {
        'dvd': <Dvd setSize={setters.setSize}/>,
        'book': <Book setWeight={setters.setWeight}/>,
        'furniture': <Furniture setH={setters.setHeight} setL={setters.setLength} setW={setters.setWidth}/>,
        'switcher': ''
    }

    const children = [ 
        <option value='switcher'>Type Switcher</option>,
        <option value='dvd'>DVD</option>,
        <option value='book'>Book</option>,
        <option value='furniture'>Furniture</option>
    ]

     return (
        <>
    <div className='container'>
      <div className='row mt-3'>
        <form
          className='col-sm-6'
          id='product_form'
          autoComplete='off'
          style={{ height: 'calc(98vh - 180px)', overflow: 'auto', width: '50%' }}
        >
            <InputField id='sku' label='SKU' type='text' setValue={setters.setSku} />
            <InputField id='name' label='Name' type='text' setValue={setters.setName}/>
            <InputField id='price' label='Price ($)' type='number' setValue={setters.setPrice}/>

            <div className='row'>
                <label className='col-sm-3 col-form-label' htmlFor='productType'>
                Type Switcher
                </label>
                <div className='col-sm-3'>
                <select className='form-select' id='productType' onChange={handleChange}>
                    {children}
                </select>
                </div>
            </div>

        {productComponent[productType]}

        </form>
         {
           ( setters.errors && setters.errors.length) > 0? (
            <div  className='col-sm-6 mt-2'>
              {setters.errors.map((e)=>{
                return (<AlertError message={e}/>)
              })}  
        </div>) : (<></>)
        }
        
      </div>
    </div>
        </>
     );
}

export default Form;