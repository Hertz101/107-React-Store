import Product from "../components/Product";
import DataService from "../services/dataService";
import "./Catalog.css";
import { useEffect , useState } from "react";

function Catalog(){   
const [products, setProducts] = useState([]);
// let products = [];
    useEffect(()=>{
        //Load the data here
        let service = new DataService();
        let data = service.getProducts();
        setProducts(data);
    },[]// the empty array means this runs only ONCE
    )

    return(
        <div className="catalog">
            <h1>Check Out our Products</h1>
            {products.map(prod => <Product key={prod._id} data={prod}/>)}
            
        </div>
    );
}
export default Catalog;