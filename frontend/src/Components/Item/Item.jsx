import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Item = (props) => {
  return (
    <Main>
    <div className='item'>
        <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt='' /></Link>
        <p>{props.name}</p>
        <div className="item-prices">
            <div className="item-price-new">
                ${props.new_price}
            </div>
            <div className="item-price-old">
                ${props.old_price}
            </div>
        </div>
    </div>
    </Main>
  )
}
 const Main = styled.div`
    .item{
        width: 350px;
    }
    .item p{
        margin: 6px 0;
    }
    .item-prices{
        display: flex;
        gap: 20px;
    }
    .item-price-new{
        color: #374151;
        font-size: 18px;
        font-weight: 600;
    }
    .item-price-old{
        color: #8c8c8c;
        font-size: 18px;
        font-weight: 500;
        text-decoration: line-through;
    }
    .item:hover{
        transform: scale(1.05);
        transition: 0.6s;
    }
 `
export default Item