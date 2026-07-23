import{useState} from "react";
import useStore from "../state/cart";
import QuantityPicker from "./QuantityPicker";
import "./Product.css";

function Product(props){ 
    const [quantity, setQuantity] = useState(1); 
    const {addProductToCart} = useStore();

    function handleQuantityChange(qty)
    {
        console.log(qty);
        setQuantity(qty);
    } 

    function getTotal()
        {
            let total = props.data.price.toFixed(2) * quantity;
            return total.toFixed(2);
        }
        
    function onAdd(){
        console.log(props.data)
        let fixedProduct = {...props.data}
        fixedProduct.quantity = quantity
        addProductToCart(fixedProduct)
    }    


    return(
        <div className="product border">
            <img src={"/images/"+props.data.image} alt="product"></img>
            <h5>{props.data.title}</h5>
            <h3>{props.data.desc}</h3>
            <div className="prices">
                <label>{"Per Item"+"$"+props.data.price.toFixed(2)}</label>
                <label>{"Total ="+"$"+getTotal()}</label>                
            </div>
            <QuantityPicker onChange={handleQuantityChange}></QuantityPicker>
            <button onClick={onAdd} className="btn btn-success">Add to Cart</button>
        </div>
    ); 
}
export default Product;