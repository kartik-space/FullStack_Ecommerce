import React from 'react'
import styled from 'styled-components'
import instagram_icon from '../Assets/instagram_icon.png'
import footer_logo from '../Assets/logo_big.png'
import pinterest_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <Main>
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt='' />
            <p>SHOPPER</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icons">
            <div className="footer-icons container">
                <img src={instagram_icon} alt='' />
            </div>
            <div className="footer-icons container">
                <img src={pinterest_icon} alt='' />
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp_icon} alt='' />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2023. All Rights Reserved</p>
        </div>
    </div>
    </Main>
  )
}
const Main = styled.div`
    .footer{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 50px;
    }
    .footer-logo{
        display: flex;
        align-items: center;
        gap: 20px;
    }
    .footer-logo p{
        color: #383838;
        font-size: 46px;
        font-weight: 700;
    }
    .footer-links{
        display: flex;
        list-style: none;
        gap: 50px;
        color: #252525;
        font-size: 20px;
    }
    .footer-links li{
        cursor: pointer;
    }
    .footer-social-icons{
        display: flex;
        gap: 20px;
    }
    .footer-icons-container{
        padding: 10px;
        padding-bottom: 6px;
        background: #fbfbfb;
        border: 1px solid #ebebeb;
    }
    .footer-copyright{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
        width: 100%;
        margin-bottom: 30px;
        color: #1a1a1a;
    }
    .footer-copyright hr{
        width: 80%;
        border: none;
        border-radius: 10px;
        height: 3px;
        background: #c7c7c7;
    }
`

export default Footer