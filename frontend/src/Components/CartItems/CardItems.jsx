import React, { useContext } from 'react';
import styled from 'styled-components';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

// ... (previous imports)

const CardItems = () => {
    const { all_product, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);

  
    return (
      <Main>
        <div className='cartitems'>
          <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <hr />
  
          {all_product.map((e) => {
            if (cartItems && cartItems[e.id] > 0 && e) {
              return (
                <div key={e.id}>
                  <div className='cartitems-format cartitems-format-main'>
                    <img src={e.image} alt='' className='carticon-product-icon' />
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                    <p>${e.new_price * cartItems[e.id]}</p>
                    <img className='cartitems-remove-icon' src={remove_icon} alt='' onClick={() => removeFromCart(e.id)} />
                  </div>
                  <hr/>
                </div>
              );
            }
            return null;
          })}
          <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>Cart Totals</h1>
                <div>
                    <div className="cartitems-total-item">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr/>
                    <div className="cartitems-total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr/>
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>{getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button>PROCEED TO CHECKOUT</button>
            </div>
            <div className="cartitems-promocode">
                <p>If you have a promo code , Enter it here</p>
                <div className="cartitems-promobox">
                    <input type='text' placeholder='promo code' />
                    <button>Submit</button>
                </div>
            </div>
          </div>
        </div>
      </Main>
    );
  };
  
  // ... (remaining code)
  
const Main = styled.div`
.cartitems{
    margin: 100px 70px;
}
.cartitems hr{
    height: 3px;
    background: #e2e2e2;
    border: 0;
}
.cartitems-format-main{
    display: grid;
    grid-template-columns: 0.5fr 2fr 1fr 1fr 1fr 1fr;
    align-items: center;
    gap: 75px;
    padding:20px 0px;
    color: #454545;
    font-size: 18px;
    font-weight: 600;
}
.cartitems-format{
    font-size: 17px;
    font-weight: 500;
}
.carticon-product-icon{
    height: 62px;
}
.cartitems-remove-icon{
    width: 15px;
    margin:0px 40px;
    cursor: pointer;
}
.cartitems-quantity{
    width: 64px;
    height: 50px;
    border: 5px solid #ebebeb;
    background: #fff;
}
.cartitems-down{
    display: flex;
    margin:100px 0px;
}
.cartitems-total{
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-right: 200px;
    gap: 40px;
}
.cartitems-total-item{
    display: flex;
    justify-content: space-between;
    padding: 15px 0px;
}
.cartitems-total button{
    border-radius: 10px;
    width: 262px;
    height: 58px;
    outline: none;
    border: none;
    background: #ff5a5a;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
}
.cartitems-promocode{
    flex: 1;
    font-size: 16px;
    font-weight: 500;
}
.cartitems-promocode p{
    color: #555;
}
.cartitems-promobox{
    width: 504px;
    margin-top: 15px;
    padding-left: 20px;
    height: 58px;
    background: #eaeaea;
}
.cartitems-promobox input{
    border: none;
    outline: none;
    background: transparent;
    font-size: 16px;
    width: 330px;
    height: 50px;
}
.cartitems-promobox button{
    width: 170px;
    height: 58px;
    font-size: 16px;
    background: black;
    color: white;
    cursor: pointer;
}
`;

export default CardItems;
