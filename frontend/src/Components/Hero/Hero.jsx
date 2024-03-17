import React from 'react'
import styled from 'styled-components'
import arrow_icon from '../Assets/arrow.png'
import hand_icon from '../Assets/hand_icon.png'
import hero_image from '../Assets/hero_image.png'
const Hero = () => {
  return (
    <Main>
    <div className='hero'>
        <div className="hero-left">
            <h2>new arrivals only</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>new</p>
                    <img src={hand_icon} alt='' />
                </div>
                <p>collections</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest-btn" style={{cursor:"pointer"}}>
                <div>Latest Collection</div>
                <img src={arrow_icon} alt='' />
            </div>
        </div>
        <div className="hero-right">
            <img src={hero_image} alt='' />
        </div>
    </div>
    </Main>
  )
}
const Main = styled.div`
    .hero{
        height: 100vh;
        /* background: linear-gradient(180deg , #fde1ff, #e1ffea22 , 60%); */
        background-image: linear-gradient(to right, #9796f0, #fbc7d4);
        display: flex;
    }
    .hero-left{
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 20px;
        padding-left: 180px;
        line-height: 1.1;
    }
    .hero-left h2{
        color: #090909;
        font-size: 26px;
        font-weight: 600;
    }
    .hero-left p{
        color: #171717;
        font-size: 100px;
        font-weight: 700;
    }
    .hero-hand-icon{
        display: flex;
        align-items: center;
        gap: 20px;  
    }
    .hero-hand-icon img{
        width: 105px;
    }
    .hero-latest-btn{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 15px;
        width: 310px;
        height: 70px;
        border-radius: 75px;
        margin-top: 30px;
        background-color: #ff4141;
        color: white;
        font-size: 22px;
        font-weight: 500;
    }
    .hero-right{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`
export default Hero