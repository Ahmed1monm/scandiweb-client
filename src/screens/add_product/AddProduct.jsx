import { useState } from 'react';
import { useNavigate } from 'react-router';


import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import '../../screens/home/App.css';
import Form from '../../components/addProduct/Form';
import { addProduct } from '../../api/products';

function AddProduct() {
  const [sku, setSku] = useState(null);
  const [name, setName] = useState(null);
  const [price, setPrice] = useState(null);
  const [size, setSize] = useState(null);
  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const [length, setLength] = useState(null);
  const [errors, setErrors] = useState([])


  let navigate = useNavigate()
  const product = {};


  const saveProductHandler = async () => {
    validate();
    if(product.name && product.price && product.sku && (size || weight || (length && width && height)) ){
      setErrors([]);
      const {status, data} =  await addProduct({
        name,price,sku,
        dimensions:height? `${height}x${width}x${length}`: undefined,
        size: size ?? undefined,
        weight: weight ?? undefined 
      })
      if(status === 201 && data.id !== 0 ){
        navigate('/')
      }else{
        setErrors(['Error while uploading... \n check your netwotk\n SKU may be used before'])
      }
    }
  }

  const validate = ()=>{
    name === null  ?  setErrors((prev)=> [...prev,'Name is required']) : product.name = name;
    price === null ?  setErrors((prev)=> [...prev,'Price is required']): product.price = price;
    sku === null   ?  setErrors((prev)=> [...prev,'SKU is required']): product.sku = sku;

    if (size || weight || (length && width && height)) {
      if (height) product.height = height;
      if (width) product.width = width;
      if (length) product.length = length;
      if (weight) product.weight = weight;
      if (size) product.size = size;
  } else {
      setErrors((prev) => [...prev, 'At least one dimension (size, weight, or dimensions) is required']);
  }

  setTimeout(()=>{setErrors([])}, 5000)
  }

  return (
    <div className="App">
      <Header saveProductHandler={saveProductHandler} page={2} title={'Product Add'} />
      <hr style={{margin:"0px"}}/>

      <Form 
        setSku={setSku} 
        setName={setName}
        setPrice={setPrice}
        setSize={setSize}
        setWeight={setWeight}
        setHeight={setHeight}
        setWidth={setWidth}
        setLength={setLength}
        errors={errors}
        />
      <hr/>

     <Footer />

    </div>
  );
}

export default AddProduct;
