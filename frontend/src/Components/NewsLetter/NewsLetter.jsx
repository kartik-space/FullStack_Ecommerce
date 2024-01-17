import React from "react";
import styled from "styled-components";

const NewsLetter = () => {
  return (
    <Main>
      <div className="newsletter">
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div>
            <input type="email" placeholder="your email address" />
            <button>Subscribe</button>
        </div>
      </div>
    </Main>
  );
};
const Main = styled.div`
.newsletter{
    width: 65%;
    height: 40vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    padding: 0 140px;
    margin-bottom: 150px;
    background: linear-gradient(180deg, #fde1ff, #e1ffea22 60%);
    gap: 30px;
}
.newsletter h1{
  color: #454545;
  font-size: 55px;
  font-weight: 600;
}
.newsletter p {
  color: #454545;
  font-size: 20px;
}
.newsletter div{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 730px;
  border-radius: 80px;
  border: 1px solid #e3e3e3;
}
.newsletter input{
  width: 500px;
  margin-left: 30px;
  border: none;
  outline: none;
  color: #616161;
  font-family: poppins;
  font-size:16px;
}
.newsletter div button{
  width: 210px;
  height: 70px;
  border-radius: 80px;
  background: black;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

`;
export default NewsLetter;