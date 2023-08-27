
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Body from '../../components/body/Body';
import '../../screens/home/App.css';


function AddProduct() {
  const saveProductHandler = async () => {
    console.log("save !!")
  }

  return (
    <div className="App">
      <Header saveProductHandler={saveProductHandler} page={2} title={'Product Add'}/>
      <hr style={{margin:"0px"}}/>
      <Body products={[]}/>
      <hr/>
     <Footer />
    </div>
  );
}

export default AddProduct;
