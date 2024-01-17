import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ShopContext } from '../../Context/ShopContext'
import cart_icon from '../Assets/cart_icon.png'
import logo from '../Assets/logo.png'
const Navbar = () => {
    const [menu,setMenu] = useState("shops")
    const {getTotalCartItems} = useContext(ShopContext)
  return (
    <Main>
    <div className='navbar'>
        <Link to={"/"} style={{textDecoration:"none"}}>
        <div className='nav-logo'>
            <img src={logo} alt='logo' />
            <p>SHOPPER</p>
        </div>
        </Link>
        <ul className='nav-menu'>
            <li onClick={() => {setMenu("shops")}}><Link style={{textDecoration:"none" , color:"#626262"}} to={"/"}>Shop</Link>{menu === "shops" ? <hr/> : <></>}</li>
            <li onClick={() => {setMenu("mens")}} ><Link style={{textDecoration:"none", color:"#626262"}}  to={"/mens"}>Men</Link> {menu === "mens" ? <hr/> : <></>}</li>
            <li onClick={() => {setMenu("womens")} }><Link style={{textDecoration:"none", color:"#626262"}}  to={"/womens"}>Womens</Link> {menu === "womens" ? <hr/> : <></>}</li>
            <li onClick={() => {setMenu("kids")}} ><Link style={{textDecoration:"none", color:"#626262"}}  to="/kids">Kids</Link> {menu === "kids" ? <hr/> : <></>}</li>
        </ul> 
        <div className="nav-login-cart">
            {localStorage.getItem('auth-token')
            ?<button onClick={() => {localStorage.removeItem('auth-token');window.location.replace("/")}}>Log out</button>:
            <Link to="/login"><button>Login</button></Link>
            }
            
            <Link to="/cart"><img src={cart_icon} alt='cart_icon' /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
    </Main>
  )
}
const Main = styled.div`
    .navbar{
        display: flex;
        justify-content: space-around;
        padding: 16px;
        box-shadow: 0 1px 3px -2px black;
    }
    .nav-logo{
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .nav-logo p{
        color: #171717;
        font-size: 38px;
        font-weight: 600;
    }
    .nav-menu{
        display: flex;
        align-items: center;
        list-style: none;
        gap: 50px;
        color: #626262;
        font-size: 20px;
        font-weight: 500;
    }
    .nav-menu li{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 3px;
        cursor: pointer;
    }
    .nav-menu hr{
        border: none;
        width: 80%;
        height: 3px;
        border-radius: 10px;
        background: #ff4141;
    }
    .nav-login-cart{
        display: flex;
        align-items: center;
        gap: 45px;
    }
    .nav-login-cart button{
        width: 157px;
        height: 58px;
        outline: none;
        border: 1px solid #7a7a7a;
        border-radius: 75px;
        color: #515151;
        font-size: 20px;
        font-weight:500;
        background: white;
        cursor: pointer;
    }
    .nav-login-cart button:active{
        background: #f3f3f3;
    }
    .nav-cart-count{
        width: 22px;
        height: 22px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: -35px;
        margin-left: -55px;
        border-radius: 11px;
        font-size: 14px;
        background: red;
        color: white;
    }

    @media(max-width: 1280px){
        .navbar{
            padding: 12px 50px;
        }
        .nav-logo{
            width: 40px;
        }
        .nav-logo p{
            font-size: 25px;
        }
        .nav-menu{
            gap: 30px;
            font-size: 16px;
        }
        .nav-login-cart{
            gap: 30px;
        }
        .nav-login-cart button{
            width: 120px;
            height: 45px;
            font-size: 16px;
        }
        .nav-cart-count{
            margin-left: -40px;
            font-size: 12px;
        }
    }
    @media(max-width: 1024px){
        .navbar{
             padding: 12px 30px;
        }
        .nav-menu{
            gap: 25px;
            font-size: 14px;
        }
        .nav-login-cart button{
            width: 80px;
            height: 35px;
            font-size: 14px;
        }
        .nav-login-cart img{
            width: 30px;

        }
        .nav-cart-count{
            width: 18px;
            height: 18px;
        }

    }

`
export default Navbar