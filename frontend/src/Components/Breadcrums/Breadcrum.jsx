import React from 'react'
import styled from 'styled-components'
import arrow from '../Assets/arrow.png'
function Breadcrum(props) {
    const {product} = props
  return (
    <Main>
    <div className='breadcrum'>
        Home <img src={arrow} alt='' /> Shop <img src={arrow} alt='' /> {product.category} <img src={arrow} alt='' /> {product.name}
    </div>
    </Main>
  )
}
const Main = styled.div`
    .breadcrum{
      display: flex;
      align-items: center;
      gap: 8px;
      color: #5e5e5e;
      font-size: 16px;
      font-weight: 600;
      margin: 60px 170px;
      text-transform: capitalize;
    }
`
export default Breadcrum