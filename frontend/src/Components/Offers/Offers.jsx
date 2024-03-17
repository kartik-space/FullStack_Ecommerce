import React from 'react'
import styled from 'styled-components'
import exclusiove_image from '../Assets/exclusive_image.png'
const Offers = () => {
  return (
    <Main>
    <div className='offers'>
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>Only O nBest Selling Products</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusiove_image} alt='' />
      </div>

    </div>
    </Main>
  )
}
const Main = styled.div`
    .offers{
        width: 65%;
        height: 60vh;
        display: flex;
        margin: auto;
        padding:0px 140px;
        margin-bottom: 150px;
        background: linear-gradient(180deg, #fde1ff, #e1ffea22 60%);

    }
    .offers-left{
        flex: 1;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    .offers-left h1{
        color: #171717;
        font-size: 80px;
        font-weight: 600;
    }
    .offers-left p{
        color: #171717;
        font-size: 22px;
        font-weight: 600;
    }
    .offers-left button{
        width: 282px;
        height: 70px;
        border-radius: 30px;
        background: #ff4141;
        border: none;
        color: white;
        font-size: 22px;
        margin-top: 30px;
        cursor: pointer;
    }
    .offers-right{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-top: 50px;
    }
`
export default Offers
