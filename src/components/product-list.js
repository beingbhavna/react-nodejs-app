import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

export const ProductList = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        let result = await fetch('http://localhost:5600/product-list',{
            headers:{
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        setProducts(result);
    }

    const deleteProduct = async (id) => {
        let result = await fetch(`http://localhost:5600/product/${id}`, {
            method: "Delete",
            headers:{
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        if (result) {
            getProducts();
        }
    }

    const serachProduct = async (event) => {
        let key = event.target.value;
        if (key) {
            let result = await fetch(`http://localhost:5600/search/${key}`,{
                headers:{
                    authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            });
            result = await result.json();
            if (result) {
                setProducts(result);
            } else {
                getProducts();
            }
        } else {
            getProducts();
        }
    }
    return (
        <div className='product-list'>product-list <br></br>
            <input type='text' placeholder='Search Here...' className='search-box' onChange={serachProduct} />
            {products.length > 0 ?
                <ul>
                    <li>S.No.</li>
                    <li>Category</li>
                    <li>Name</li>
                    <li>Brand</li>
                    <li>Price</li>
                    <li>Operations</li>
                </ul> : <h1>No Result Found</h1>
            }
            {
                products.map((item, index) =>
                    <ul>
                        <li>{index}</li>
                        <li>{item.category}</li>
                        <li>{item.name}</li>
                        <li>{item.brand}</li>
                        <li>{item.price}</li>
                        <li>
                            <button onClick={() => deleteProduct(item._id)}>Delete</button>
                            <Link to={"/update/" + item._id}>Update</Link>
                        </li>
                    </ul>
                )}
        </div>
    )
}

export default ProductList;
