import "./header.css"
import { Link } from "react-router-dom";

const Header = ({massDeleteHandler,saveProductHandler, page, title})=>{
    return (
      <div className="header">
         <div className="title">
            <h2>
                {title}
            </h2>
        </div>
        
        {
            page === 1? ( <div className="action-buttons">
            <Link to='/addproduct'> <button className="button">ADD</button> </Link>
            <button className="button" onClick={massDeleteHandler}>MASS DELETE</button>
            </div>): (
             <div className="action-buttons">
                <button className="button" onClick={saveProductHandler}>Save</button>
                <Link to='/'> <button className="button">Cancel</button> </Link>
            </div>
            )
        }
       
       
      </div>  
    );
}

export default Header;