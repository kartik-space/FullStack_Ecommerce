import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Item from '../Item/Item';
const Popular = () => {

  const [popularProducts , setPopularProducts] = useState([]) ;
  useEffect(() => {
    fetch('http://localhost:4000/popularinwomen')
    .then((response) => response.json())
    .then((data) => setPopularProducts(data))
  },[])

  return (
    <Main>
    <div className='popular'>
      <h1>Popular in Women</h1>
      <hr />
      <div className='popular-item'>
        {popularProducts.map((item , i) => {
            return <Item key={i} id ={item.id} name= {item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
      </div>
    </div>
    </Main>
  )
}
const Main = styled.div`
    .popular{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        height: 90vh;
    }
    .popular h1{
        color: #171717;
        font-size: 50px;
        font-weight: 600;
    }
    .popular hr{
        width: 200px;
        height: 6px;
        border-radius: 10px;
        background: #252525;
    }
    .popular-item{
        margin-top: 50px;
        display: flex;
        gap: 30px;
    }
`
export default Popular
