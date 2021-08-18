import React from 'react'
import { useSelector } from 'react-redux';


export const ProductsPage = (props) => {
    // const [products, setProducts] = useState([]);
    const borderColors = [
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "dark",
    ]

    const products = useSelector((state) => state.allProducts.products);
    // const category = useSelector((state) => state.category.category);

    // console.log(category)

    const randomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let randomNum = randomInt(0, borderColors.length-1);
    return (
        <div className="productpage-container">
            {
                products.map((product) => {
                    // randomNum = randomInt(0, borderColors.length-1)
                    return (
                        <div class={`card border border-${borderColors[randomNum]} mb-3`} style={{width: "18rem"}}>
                        <div class={`card-body text-dark`}>
                            <div className="products">
                                <img className="myProducts" src={product.image} />
                                <a>{product.title}</a>
                            </div>
                        </div>
                        <div class={`card-footer bg-transparent border-${borderColors[randomNum]}`}>
                            <div className="product-details">
                               <h4 className="product-price">${product.price}</h4> 
                               <a href="#" class="button">Add to Cart</a>
                            </div>
                        </div>
                    </div>
             )})}
        </div>







        // <div className="productpage-container">
        //     {
        //     products.map((product) => {
        //         return (
        //             <div className="products">
        //                 <img className="myProducts" src={product.image} />
        //                 <a>{product.title}</a>
        //                 <h4 className="product-price">${product.price}</h4>
        //             </div>
        //         )
        //     })}
        // </div>
    )
}
