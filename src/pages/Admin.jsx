import {useState} from 'react';

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
    const [products, setProducts] = useState([])

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
            item: productTitle,
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
                    <h1>Add Products</h1>

                    <div>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='mb-1'>
                                    <label className='form-label'>Title</label>
                                    <input type="text" className='form-control' value={productTitle} onChange={(event)=>setProductTitle(event.target.value)}/>
                                </div>

                                <div>
                                    <label className='form-label'>Category</label>
                                    <input type="text" className='form-control' value={productCategory} onChange={(event)=>setProductCategory(event.target.value)}/>
                                </div>

                                <div>
                                    <label className='form-label'>Image</label>
                                    <input type="text" className='form-control' value={productImage} onChange={(event)=>setProductImage(event.target.value)}/>
                                </div>

                                <div>
                                    <label className='form-label'>Price</label>
                                    <input type="number" className='form-control' value={productPrice} onChange={(event)=>setProductPrice(event.target.value)}/>
                                </div>

                                <div>
                                    <button className="btn btn-primary" onClick={saveProduct}>Save Product</button>
                                </div>
                            </div>
                        </div>
                    </div>

                <div>
                    <h4>Products List:</h4>
                    {products.map(product =>(
                    <div key={product.item}>{product.category}-{product.image}-{product.price}</div>
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
                                    <input type="text" className="form-control" value={couponCode} onChange={(event)=>setCouponCode(event.target.value)}/>
                                </div>

                                <div>
                                    <label className="form-label">Discount</label>
                                    <input type="number" className="form-control" value={couponDiscount} onChange={(event)=>setCouponDiscount(event.target.value)}/>
                                </div>

                                <div className="mt-3">
                                    <button className="btn btn-primary" onClick={saveCoupon}>Save Coupon</button>
                                </div>
                            </div>
                        </div>
                    </div>

                <div>
                    <h3>Coupons List</h3>

                    {coupons.map(coupon =>(
                        <div key={coupon.code}>{coupon.code} - {coupon.discount}</div>
                    ) )}
                </div>
                </section>
            </div>

        </div>
    )
}

export default Admin;