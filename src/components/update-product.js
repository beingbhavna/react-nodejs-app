import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const UpdateProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [brand, setBrand] = useState('');
    const [error, setError] = useState('');
    const params = useParams();

    useEffect(() => {
        getProductList();
    },[])
    const getProductList = async () => {
        console.log(params);
        let result = await fetch(`http://localhost:5600/product/${params.id}`);
        result = await result.json();
        setName(result.name)
        setPrice(result.price);
        setCategory(result.category);
        setBrand(result.brand);
    }

    const updateProductById = (id) => {
        console.log(name, price, category, brand)
        let result = fetch(`http://localhost:5600/product/update/${id}`)
    }
    return (
        <div className='product'>update-product
            <input type="text" placeholder="Enter Product Name" onChange={(e) => { setName(e.target.value) }} value={name} className='inputBox' />
            {error && !name && <span className="invalid-input">Enter Valid Name</span>}
            <input type="text" placeholder="Enter Product Price" onChange={(e) => { setPrice(e.target.value) }} value={price} className="inputBox" />
            {error && !price && <span className="invalid-input">Enter Valid Price</span>}
            <input type="text" placeholder="Enter Product Category" onChange={(e) => { setCategory(e.target.value) }} value={category} className="inputBox" />
            {error && !category && <span className="invalid-input">Enter Valid Category</span>}
            <input type="text" placeholder="Enter Product Brand" onChange={(e) => { setBrand(e.target.value) }} value={brand} className="inputBox" />
            {error && !brand && <span className="invalid-input">Enter Valid Brand</span>}
            <button className="button" onClick={updateProductById()}>Update Product</button>
        </div>
    )
}

export default UpdateProduct;