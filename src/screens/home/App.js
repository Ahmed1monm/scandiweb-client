import { useState, useEffect } from 'react';

import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Body from '../../components/body/Body';
import { getProducts, deleteProducts } from '../../api/products';

import './App.css';


function App() {
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState([]);

  const fetchProducts = async () =>{
    let res = await getProducts()
    setProducts(res.data)
  }

  const handleMassDelete = async () => {
    if(products.length > 0 && checked.length > 0){
      let response = await deleteProducts(checked)
      if(response.status===204){
        setProducts((prev)=>prev.filter((product)=>checked.includes(product.id)===false))
        setChecked([])
      }
    }
  }
  useEffect(() => {
    fetchProducts()
  },[])

  return (
    <div className="App">
      <Header massDeleteHandler={handleMassDelete} page={1} title={'Product List'}/>
      <hr style={{margin:"0px"}}/>
      <Body products={products} setCheck={setChecked}/>
      <hr/>
     <Footer />
    </div>
  );
}

export default App;
