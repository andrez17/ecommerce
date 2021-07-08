import React, {useState, useEffect} from 'react'

export const ProductsPage = () => {
    const [products, setProducts] = useState([]);
    const [title, setTitle] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch('https://fakestoreapi.com/products/');
            const data = await response.json();
            setProducts(data);
        }
        fetchData();
    }, [])

    return (
        <div className="productpage-container">
            {products.map((product) => {
                return (
                <div className="products">
                    <img className="myProducts" src={product.image} />
                    <a>{product.title}</a>
                    <h4 className="product-price">${product.price}</h4>
                </div>)
            })}
        </div>
    )
}
