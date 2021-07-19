import React from 'react'
import { useSelector } from 'react-redux';


export const ProductsPage = (props) => {
    // const [products, setProducts] = useState([]);
    const products = useSelector((state) => state.allProducts.products);
    const category = useSelector((state) => state.category.category);

    console.log('Category:', category)

    return (
        <div className="productpage-container">
            {
            props.category === "shirts" || props.category === "pants" ||
            props.category === "jackets" || props.category === "accessories" ?
            
            products.filter((product) => {
                
                if(props.category === "shirts"){
                    if(product.title.includes("Slim") || product.title.includes("Short")){
                        return (
                            <div className="products">
                                <img className="myProducts" src={product.image} />
                                <a>{product.title}</a>
                                <h4 className="product-price">${product.price}</h4>
                            </div>
                        )
                    }          
                }   
            })
            :
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
