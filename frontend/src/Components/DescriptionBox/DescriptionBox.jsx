import React from 'react'
import styled from 'styled-components'

const DescriptionBox = () => {
  return (
    <Main>
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">
                Description
            </div>
            <div className="descriptionbox-nav-box fade">
                Reviews(122)
            </div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is an online platform that facilitates the buying and selling of goods and services over the internet. 
            It allows businesses and individuals to conduct transactions electronically, providing a virtual marketplace for products and 
            services. E-commerce websites enable customers to browse products, add items to a shopping cart, and complete the purchase 
            using various online payment methods.</p>
            <p>
            An e-commerce website is an online platform that facilitates the buying and selling of goods and services over the internet. 
            It allows businesses and individuals to conduct transactions electronically,
            </p>
        </div>
    </div>
    </Main>
  )
}
const Main = styled.div`
    .descriptionbox{
        margin: 120px 170px;
    }
    .descriptionbox-navigator{
        display: flex;
    }
    .descriptionbox-nav-box{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        font-weight: 600;
        width: 171px;
        height: 70px;
        border: 1px solid #d0d0d0;
    }
    .descriptionbox-nav-box.fade{
        background: #fbfbfb;
        color: #555;
    }
    .descriptionbox-description{
        display: flex;
        flex-direction: column;
        gap: 25px;
        border: 1px solid #d0d0d0;
        padding: 48px;
        padding-bottom: 70px;
    }
`
export default DescriptionBox