import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import add_product_icon from '../../assets/Product_Cart.svg'
import list_product_item from '../../assets/Product_list_icon.svg'

const Sidebar = () => {
  return (
    <Main>
    <div className='sidebar'>
        <Link to={'/addproduct'} style={{textDecoration:"none"}}>
            <div className="sidebar-item">
                <img src={add_product_icon} alt='' />
                <p>Add Product</p>
            </div>
        </Link>
        <Link to={'/listproduct'} style={{textDecoration:"none"}}>
            <div className="sidebar-item">
                <img src={list_product_item} alt='' />
                <p>Product List</p>
            </div>
        </Link>
    </div>
    </Main>
  )
}
const Main = styled.div`
    .sidebar{
        display: flex;
        flex-direction: column;
        padding-top: 30px;
        gap: 20px;
        width: 100%;
        max-width: 250px;
        height: 100vh;
        background: white;
    }
    .sidebar-item{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0px 20px;
        padding: 5px 10px;
        border-radius: 6px;
        background: #f6f6f6;
        gap: 20px;
        cursor: pointer;
    }
    @media(max-width: 800px) {
        .sidebar{
            padding: 30px 0px;
            flex-direction: row;
            width: 100%;
            max-width: none;
            height: auto;
            justify-content: center;
        }
        .sidebar-item{
            margin: 0;
        }
    }
`
export default Sidebar