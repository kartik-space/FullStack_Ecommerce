import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Item from '../Item/Item'
const NewCollections = () => {
  const [new_collections, setNew_collection] = useState([])

  useEffect(()=>{
    fetch('http://localhost:4000/newcollection')
    .then((response) => response.json())
    .then((data) => setNew_collection(data));
  },[])
  return (
    <Main>2
    <div className='new-collections'>
      <h1>New Collections</h1>
      <hr />
      <div className="collections">
        {new_collections.map((item , i) => {
            return <Item  key={i} id ={item.id} name= {item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
      </div>
    </div>
    </Main>
  )
}
const Main = styled.div`
      .new-collections{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        margin-bottom: 100px;
    }
    .new-collections h1{
        color: #171717;
        font-size: 50px;
        font-weight: 600;
    }
    .new-collections hr{
        width: 200px;
        height: 6px;
        border-radius: 10px;
        background: #252525;
    }
    .collections{
       display: grid;
       grid-template-columns: 1fr 1fr 1fr 1fr;
       margin-top: 50px;
       gap: 30px;
    }
`
export default NewCollections