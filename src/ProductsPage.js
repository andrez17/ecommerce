import React from 'react'
import { useSelector } from 'react-redux';


export const ProductsPage = (props) => {
    // const [products, setProducts] = useState([]);
    const products = useSelector((state) => state.allProducts.products);
    const category = useSelector((state) => state.category.category);

    console.log(category)


    return (
        <div className="productpage-container">
            {
            products.map((product) => {
                return (
                    <div className="products">
                        <img className="myProducts" src={product.image} />
                        <a>{product.title}</a>
                        <h4 className="product-price">${product.price}</h4>
                    </div>
                )
            })}
        </div>
    )
}
