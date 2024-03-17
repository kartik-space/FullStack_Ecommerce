import React, { useContext } from "react";
import styled from "styled-components";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";
import { ShopContext } from "../Context/ShopContext";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <Main>
      <div className="shop-category">
        <img className="shopcategory-banner" src={props.banner} alt="" />
        <div className="shopcategory-indexSort">
          <p>
            <span>Showing 1-12</span> out of 36 products
          </p>
          <div className="shopcategory-sort" style={{cursor:"pointer"}}>
            Sort by
            <img src={dropdown_icon} alt="" style={{ paddingLeft: "5px" }} />
          </div>
        </div>
        <div className='new-collections'>
        <div className="shopcategory-products">
          {all_product.map((item) => {
            if (props.category === item.category) {
              return (
                <Item
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
        </div>
        <div className="shopcategory-loadmore" style={{cursor:"pointer"}}>Explore More</div>
      </div>
    </Main>
  );
};

const Main = styled.div`
  margin: 0;
  padding: 0;
  .shopcategory-banner {
    display: block;
    margin: 30px auto;
    width: 82%;
  }
  .shopcategory-indexSort {
    display: flex;
    margin: 0px 170px;
    justify-content: space-between;
    align-items: center;
  }
  .shopcategory-sort {
    padding: 10px 20px;
    border-radius: 40px;
    border: 1px solid #888;
  }
  .shopcategory-indexSort p span {
    font-weight: 600;
  }
  .shopcategory-products {
    /* margin: 20px 170px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 80px; */
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-top: 50px;
    gap: 30px;
  }
  .shopcategory-loadmore {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 150px auto;
    width: 233px;
    height: 69px;
    border-radius: 75px;
    background: #ededed;
    color: #787878;
    font-size: 18px;
    font-weight: 500;
  }
  .new-collections {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default ShopCategory;
