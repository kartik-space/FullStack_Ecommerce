import React, { useState } from "react";
import styled from "styled-components";
import upload_area from '../../assets/Upload_area.svg';
const AddProduct = () => {
  const [image, setImage] = useState(false);

     const [productDetails , setProductDetails] = useState({
        name:"",
        image:"",
        category:"women",
        new_price:"",
        old_price:"",
     })

     const imageHandler = (e) =>{
        setImage(e.target.files[0])
     }

     const changeHandler = (e) => {
        setProductDetails({...productDetails,[e.target.name]:e.target.value})
     }

     const Add_Product = async ()=> {
      console.log(productDetails)
      let responseData;
      let product = productDetails;
      
      let formData = new FormData()
      formData.append('product', image);

      await fetch('http://localhost:4000/upload', {
        method:'POST',
        headers:{
          Accept:'application/json',
        },
        body:formData,
      }).then((Resp) => Resp.json()).then((data) => {responseData = data})

      if(responseData.success)
      {
        product.image = responseData.image_url;
        console.log(product)
        await fetch('http://localhost:4000/addproduct', {
          method:'POST',
          headers:{
            Accept:'application/json',
            'Content-Type':'application/json'
          },
          body:JSON.stringify(product)
        }).then((resp) => resp.json()).then((data) => {
          data.success?alert("Product Added"):alert("Failed")
        })
      }
     }


  return (
    <Main>
      <div className="add-product">
        <div className="addproduct-itemfield">
          <p>Product title</p>
          <input value={productDetails.name} onChange={changeHandler} type="text" name="name" placeholder="Type Here" />
        </div>
        <div className="addproduct-price">
          <div className="addproduct-itemfield">
            <p>Price</p>
            <input value={productDetails.old_price} onChange={changeHandler} type="text" name="old_price" placeholder="Type Here" />
          </div>
          <div className="addproduct-itemfield">
            <p>Offer Price</p>
            <input value={productDetails.new_price} onChange={changeHandler} type="text" name="new_price" placeholder="Type Here" />
          </div>
        </div>
        <div className="addproduct-itemfield">
            <p>Product Category</p>
            <select value={productDetails.category} onChange={changeHandler} name="category" className="add-product-selector">
            <option value="women">Women</option>
            <option value="men">Men</option>
            <option value="kid">Kid</option>

            </select>
        </div>
        <div className="addproduct-itemfield">
            <label htmlFor="file-input">
                <img src={image?URL.createObjectURL(image) :upload_area} alt="" className="addproduct-thumnail-img"/>
            </label>
            <input onChange={imageHandler} type="file" name="image" id="file-input" hidden />
        </div>
        <button onClick={() => {Add_Product()}} className="addproduct-btn">Add</button>
      </div>
    </Main>
  );
};
const Main = styled.div`
.add-product{
    box-sizing: border-box;
    width: 100%;
    max-width: 800px;
    padding: 30px 50px;
    margin: 20px 30px;
    border-radius: 6px;
    background: white;
}
.addproduct-itemfield{
    width: 100%;
    color: #7b7b7b;
    font-size: 16px;
}
.addproduct-itemfield input{
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    border-radius: 4px;
    padding-left: 15px;
    border: 1px solid #c3c3c3;
    outline: none;
    color: #7b7b7b; 
    font-family: "poppins";
    font-size: 14px;
}
.addproduct-price{
    display: flex;
    gap: 40px;
}
.add-product-selector{
    padding: 10px;
    width: 100px;
    height: 50px;
    font-size: 14px;
    color: #7b7b7b;
    border: 1px solid #7b7b7b8d;
    border-radius: 4px;
}
.addproduct-thumnail-img{
    height: 120px;
    width: 120px;
    border-radius: 10px;
    object-fit: contain;
    margin: 10px 0px;
}
.addproduct-btn{
    margin-top: 20px;
    width: 160px;
    height: 50px;
    border-radius: 6px;
    background: #6079ff;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 16px;
    font-weight: 500;
}
@media(max-width: 800px){
    .add-product{
        width: auto;
        padding: 30px;
        margin: 20px;
    }
}
`;
export default AddProduct;
