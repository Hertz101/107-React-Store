import Product from "../components/Product";
import "./Catalog.css";

function Catalog(){
    return(
        <div className="catalog">
            <h1>Check Out our Products</h1>
            <Product/>
        </div>
    );
}
export default Catalog;