import Product from "../components/Product";
import DataService from "../services/dataService";
import "./Catalog.css";
import { useEffect , useState } from "react";

function Catalog(){   
const [products, setProducts] = useState([]);//holds all the products always
const [categories, setCategories] = useState ([]); //To hold the categories
const [productsToDisplay, setProductsToDisplay] = useState([]); //To hold
//the products to show
// let products = [];

    useEffect(()=>{
        //Load the data here
        let service = new DataService();
        let data = service.getProducts();
        setProducts(data);
        setProductsToDisplay(data);
        loadCatalog();
    },[]// the empty array means this runs only ONCE
    );

    function loadCatalog(){
        let categoriesFilter = ["Apparel","Fishing Gear","Camping"]
        setCategories(categoriesFilter);
    }

    function filter(category){
        let list=[];
        //find the products that match the category
        //this is a for loop and at the end you have to move the result to
        //products to display
        for(let i=0; i< products.length; i++)
            {
                let prod = products[i];
                if(prod.category === category)
                {
                    list.push(prod);
                }
            }
            setProductsToDisplay(list);
    }
    
    function clearFilter(){
        setProductsToDisplay(products);
    }

    return(
        <div className="catalog">
            <h1>Online Hunting and Fishing Gear</h1>
            <img src="store.jpg"></img> 
                <div>
                    <button onClick={clearFilter} className="btn btn-success mb-3">Home</button>
                </div>
            {categories.map(cat => <button className="btn btn-success" key={cat} onClick={() => filter(cat)} >{cat}</button>)}
            <div className="gap-4, my-4,">
            {productsToDisplay.map(prod => <Product key={prod._id} data={prod}/>)}
            </div>
            
            
        </div>
    );
}
export default Catalog;