import React, { useState, useEffect } from 'react'

export const ProductList = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts();
    }, []);
    const getProducts = async () => {
        let result = await fetch('http://localhost:5600/product-list');
        result = await result.json();
        setProducts(result);
    }
    const deleteProduct = async (id) => {
        let result = await fetch(`http://localhost:5600/product/${id}`, {
            method: "Delete"
        });
        result = await result.json();
        if (result) {
            getProducts()
        }
    }
    return (
        <div className='product-list'>product-list
            <ul>
                <li>S.No.</li>
                <li>Category</li>
                <li>Name</li>
                <li>Brand</li>
                <li>Price</li>
                <li>Operations</li>
            </ul>
            {
                products.map((item, index) =>
                    <ul>
                        <li>{index}</li>
                        <li>{item.category}</li>
                        <li>{item.name}</li>
                        <li>{item.brand}</li>
                        <li>{item.price}</li>
                        <li><button onClick={() => deleteProduct(item._id)}>Delete</button></li>
                    </ul>
                )}
        </div>
    )}

export default ProductList;
