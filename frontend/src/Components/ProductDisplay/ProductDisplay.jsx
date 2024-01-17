import React, { useContext } from 'react'
import styled from 'styled-components'
import { ShopContext } from '../../Context/ShopContext'
import stardull_icon from '../Assets/star_dull_icon.png'
import star_icon from '../Assets/star_icon.png'

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext)
  return (
    <Main>
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt='' />
                <img src={product.image} alt='' />
                <img src={product.image} alt='' />
                <img src={product.image} alt='' />
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt='' />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt='' />
                <img src={star_icon} alt='' />
                <img src={star_icon} alt='' />
                <img src={stardull_icon} alt='' />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-old">
                    ${product.old_price}
                </div>
                <div className="productdisplay-right-new">
                    ${product.new_price}
                </div>
            </div>
            <div className="productdisplay-right-description">
                A lightweight , usually knitted ,pullover shirt A lightweight , usually knitted ,pullover shirt A lightweight 
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>xl</div>
                    <div>xxl</div>
                </div>
            </div>
            <button onClick={() => {addToCart(product.id)}}>ADD TO CART</button>
            <p className='productdisplay-right-category'><span>Category : </span>Women , Tshirt , Crop-Top</p>
            <p className='productdisplay-right-category'><span>Tags : </span>Modern , Latest</p>
        </div>
    </div>
    </Main>
  )
}
const Main = styled.div`
    .productdisplay{
        display: flex;
        margin: 0px 170px;
    }
    .productdisplay-left{
        display: flex;
        gap: 17px;
    }
    .productdisplay-img-list{
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
    .productdisplay-img-list img{
        height: 163px;
    }
    .productdisplay-main-img{
        width: 586px;
        height: 700px;
    }
    .productdisplay-right{
        margin:0px 70px;
        display: flex;
        flex-direction: column;
    }
    .productdisplay-right h1{
        color: #3d3d3d;
        font-size: 40px;
        font-size: 700;
    }
    .productdisplay-right-star{
        display: flex;
        align-items: center;
        margin-top: 13px;
        gap: 5px;
        color: #1c1c1c;
        font-size: 16px;
    }
    .productdisplay-right-prices{
        display: flex;
        margin: 40px 0px;
        gap: 30px;
        font-size: 24px;
        font-weight: 700; 
    }
    .productdisplay-right-old{
        color: #818181;
        text-decoration: line-through;
    }
    .productdisplay-right-new{
        color: #ff4141;
    }
    .productdisplay-right-size h1{
        margin-top: 55px;
        color: #656565;
        font-size: 20px;
        font-weight: 600;
    }
    .productdisplay-right-sizes{
        display: flex;
        margin: 20px 0px;
        gap: 20px;
    }
    .productdisplay-right-sizes div{
        padding: 18px 24px;
        background: #fbfbfb;
        border: 1px solid #ebebeb;
        border-radius: 3px;
        cursor: pointer;
    }
    .productdisplay-right button{
        border-radius: 10px;
        padding: 20px 40px;
        width: 200px;
        font-size: 16px;
        font-weight: 600;
        color: white;
        background: #ff4141;
        margin-bottom: 40px;
        border: none;
        outline: none;
        cursor: pointer;
    }
    .productdisplay-right-category span{
        font-weight: 600;
    }

`
export default ProductDisplay