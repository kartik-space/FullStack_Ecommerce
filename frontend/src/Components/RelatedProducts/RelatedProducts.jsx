import React from 'react'
import styled from 'styled-components'
import data_product from '../Assets/data'
import Item from '../Item/Item'
const RelatedProducts = () => {
  return (
    <Main>
        <div className='relatedproducts'>
            <h1>Related Products</h1>
            <hr/>
            <div className="relatedproducts-item">
                {data_product.map((item , i) => {
                    return <Item  key={i} id ={item.id} name= {item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })}
            </div>
        </div>
    </Main>
    
  )
}
const Main = styled.div`
    .relatedproducts{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        height: 90vh;
    }
    .relatedproducts h1{
        color: #171717;
        font-size: 50px;
        font-weight: 600;
    }
    .relatedproducts hr{
        width: 200px;
        height: 6px;
        border-radius: 10px;
        background: #252525;
    }
    .relatedproducts-item{
        margin-top: 50px;
        display: flex;
        gap: 30px;
    }
`
export default RelatedProducts