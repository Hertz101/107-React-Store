import useStore from "../state/cart";

function Cart() {
  const { cart} = useStore();

  function getTotalPrice(){
    let total = 0;

    for(let i=0; i<cart.length; i++){
      total += cart[i].price * cart[i].quantity
    }
    return total
  }

  return (
    <div>
      <h1>Your Cart</h1>

      <div className="d-flex flex-column gap-2">
        {
          cart.map(product => 
            <div className="d-flex border justify-content-between align-items-center">
              <img src={"/images/" + product.image} />
              <h6>{product.title}</h6>
              <p>Quantity:{product.quantity}</p>
              <p>Price: Each ${product.price}</p>
              <p className="m-4">Total:${product.quantity * product.price}</p>
              </div>
          )
        }
      </div>

      <h4 className="border mt-3">Total: ${getTotalPrice() }</h4>
    </div>
  )
}

export default Cart;