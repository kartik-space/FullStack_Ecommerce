import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import cross_icon from '../../assets/cross_icon.png';
const ListProduct = () => {
  const[allproducts, setAllproducts] = useState([]);

  const fetchInfo = async ()=> {
    await fetch('http://localhost:4000/allproducts')
    .then((res) => res.json())
    .then((data) =>{setAllproducts(data)})
  }

  useEffect(() => {
    fetchInfo()
  },[])

  const remove_product = async (id)=>{
    await fetch('http://localhost:4000/removeproduct',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({id:id})
    })
    await fetchInfo()
  }

  

  return (
    <Main>
        <div className='list-product'>
          <h1>A Products List</h1>
          <div className="listproduct-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>oldPrice</p>
            <p>newPrice</p>
            <p>Category</p>
            <p>Remove</p>
          </div>
          <div className="listproduct-allproducts">
            <hr/>
            {allproducts.map((product, index) => {
              return <><div className="listproduct-format-main listproduct-format">
                <img src={product.image} alt='' className='listproduct-product-icon'/>
                <p>{product.name}</p>
                <p>${product.old_price}</p>
                <p>${product.new_price}</p>
                <p>{product.category}</p>
                <img onClick={() => {remove_product(product.id)}} src={cross_icon} alt='' className='listproduct-remove-icon'/>
              </div>
              <hr/>
              </>
            })}
          </div>

        </div>

    </Main>
  )
}
const Main = styled.div`
margin: 0;
padding: 0;
    .list-product{
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      height: 740px;
      padding: 10px 50px;
      margin: 30px;
      border-radius: 6px;
      background: white;
    }
    .listproduct-format-main{
      display: grid;
      grid-template-columns: 1fr 3fr 1fr 1fr 1fr 1fr;
      gap: 10px;
      width: 100%;
      padding: 20px 0px;
      color: #454545;
      font-size: 15px;
      font-weight: 600;
    }
    .listproduct-format{
      
      align-items: center;
      font-weight: 500;
    }
    .listproduct-product-icon{
      height: 80px;
    }
    .listproduct-remove-icon{
      cursor: pointer;
      margin: auto;
    }
    .listproduct-allproducts{
      overflow-y: auto;
    }
    @media(max-width: 800px){
      .list-product{
        box-sizing: border-box;
        width: 95%;
        height: 100%;
        padding: 10px 30px;
        margin: 20px auto;
      }
      .listproduct-format-main{
        padding: 15px 0px;
        color: #454545;
        font-size: 12px;
      }
      .listproduct-product-icon{
        height: 60px;
      }
    }
`
export default ListProduct