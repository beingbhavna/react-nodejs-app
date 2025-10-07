import React from "react";

const AddProduct = () => {
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [brand, setBrand] = React.useState('');
    const [error, setError] = React.useState(false);
    const addProduct = async () => {
        if (!name || !price || !category || !brand) {
            setError(true);
            return false;
        } else {
            const userId = localStorage.getItem('user')._id;
            let result = await fetch("http://localhost:5600/add-product", {
                method: 'Post',
                body: JSON.stringify({ name, price, category, brand, userId }),
                headers: { 'Content-Type': 'application/json',
                   authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
                 }
            });
            result = await result.json();
            console.log(result);
        }
    }
    return (
        <div className='product'>
            <h3>Add Product</h3>
            <input type="text" placeholder="Enter Product Name" onChange={(e) => { setName(e.target.value) }} value={name} className='inputBox' />
            {error && !name && <span className="invalid-input">Enter Valid Name</span>}
            <input type="text" placeholder="Enter Product Price" onChange={(e) => { setPrice(e.target.value) }} value={price} className="inputBox" />
             {error && !price && <span className="invalid-input">Enter Valid Price</span>}
            <input type="text" placeholder="Enter Product Category" onChange={(e) => { setCategory(e.target.value) }} value={category} className="inputBox" />
             {error && !category && <span className="invalid-input">Enter Valid Category</span>}
            <input type="text" placeholder="Enter Product Brand" onChange={(e) => { setBrand(e.target.value) }} value={brand} className="inputBox" />
             {error && !brand && <span className="invalid-input">Enter Valid Brand</span>}
            <button className="button" onClick={addProduct}>Add Product</button>
        </div>
    )
}
export default AddProduct;