import {useState} from 'react';
import "./Admin.css";

function Admin() {
    //const[state, setState] = useState(intitalValue);
    const [couponCode, setCouponCode] = useState("");
    const [couponDiscount, setCouponDiscount] = useState("");
    const [coupons, setCoupons] = useState([])

    // assignment 2
    const [productTitle, setProductTitle] = useState("");
    const [productCategory, setProductCategory] = useState("");
    const [productImage, setProductImage] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [products, setProducts] = useState([]);

    function saveCoupon(){
        console.log(couponCode);
        console.log(couponDiscount);

    const newCoupon = {
        code: couponCode,
        discount: couponDiscount
    }

    //... spread operator
    setCoupons([...coupons, newCoupon])
    }

    function saveProduct(){
        console.log(productTitle);
        console.log(productCategory);
        console.log(productImage);
        console.log(productPrice);
        

        const newProduct = {
            title: productTitle,
            category: productCategory,
            image: productImage,
            price: productPrice,
        }

        setProducts([...products, newProduct])
    }

    return (
        <div>
            <h1 className="text-dark">Store Administraion</h1>

            <div className="d-flex gap-4">
                <section className="w-50">
                    <h2>Add Products</h2>

                    <div>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='mb-2'>
                                    <label className='form-label'>Title</label>
                                    <input 
                                        type="text" 
                                        className='form-control' 
                                        value={productTitle} 
                                        onChange={(event)=>setProductTitle(event.target.value)}/>
                                </div>

                                <div>
                                    <label className='form-label'>Category</label>
                                    <input 
                                        type="text" 
                                        className='form-control' 
                                        value={productCategory} 
                                        onChange={(event)=>setProductCategory(event.target.value)}/>
                                        
                                </div>

                                <div>
                                    <label className='form-label'>Image</label>
                                    <input 
                                        type="text" 
                                        className='form-control'
                                        placeholder='www.image.com'
                                        value={productImage} 
                                        onChange={(event)=>setProductImage(event.target.value)}/>
                                </div>

                                <div>
                                    <label className='form-label'>Price</label>
                                    <input 
                                        type="number" 
                                        className='form-control' 
                                        value={productPrice} 
                                        onChange={(event)=>setProductPrice(event.target.value)}/>
                                </div>

                                <div>
                                    <button className="btn btn-primary" onClick={saveProduct}>Save Product</button>
                                </div>
                            </div>
                        </div>
                    </div>

                <div className="row row-cols-2 row-cols-md-2 g-3">
                    <h3>Products List:</h3>
                    {products.map(product =>(
                    <div className='card-body'>
                        <h4>{product.title}</h4>
                        <p>{product.category}</p>
                        <img src={product.image} />
                        <p>${product.price}</p>
                    </div>
                ) )}
                </div>

                </section>

                <section className="w-50">
                    <h2>Add Coupons</h2>

                    <div>
                        <div className="card">
                            <div className="card-body">
                                <div className="mb-1">
                                    <label className="form-label">Code</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        value={couponCode} 
                                        onChange={(event)=>setCouponCode(event.target.value)}/>
                                </div>

                                <div>
                                    <label className="form-label">Discount</label>
                                    <input 
                                        type="number" 
                                        className="form-control" 
                                        value={couponDiscount} 
                                        onChange={(event)=>setCouponDiscount(event.target.value)}/>
                                </div>

                                <div className="mt-3">
                                    <button className="btn btn-primary" onClick={saveCoupon}>Save Coupon</button>
                                </div>
                            </div>
                        </div>
                    </div>

                <div>
                    <h3>Coupons List:</h3>

                    {coupons.map(coupon =>(
                        <div className='card' key={coupon.code}>{coupon.code} - %{coupon.discount}</div>
                    ) )}
                </div>
                </section>
            </div>

        </div>
    )
}

export default Admin;