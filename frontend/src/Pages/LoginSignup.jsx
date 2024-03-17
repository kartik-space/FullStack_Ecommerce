import React, { useState } from 'react'
import styled from 'styled-components'

const LoginSignup = () => {
  const [state, setState] = useState("Login") 
  const [formData,  setFormdata] = useState({
    username:"",
    password:"",
    email:""
  })

  const changeHandler = (e)=>{
    setFormdata({...formData,[e.target.name]:e.target.value})
  }


  const login = async() => {
    console.log("login function executed", formData)
    let responseData;
    await fetch('http://localhost:4000/login',{
      method:"POST",
      headers:{
        Accept:'application/form-data',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),  
    }).then((response) => response.json()).then((data) => responseData = data)

    if(responseData.success) {
      localStorage.setItem('auth-token', responseData.token)
      window.location.replace("/");
    }
    else{
      alert(responseData.errors)
    }

  }

  const signup = async() => {
    console.log("signup function executed",formData)
    let responseData;
    await fetch('http://localhost:4000/signup',{
      method:"POST",
      headers:{
        Accept:'application/form-data',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),  
    }).then((response) => response.json()).then((data) => responseData = data)

    if(responseData.success) {
      localStorage.setItem('auth-token', responseData.token)
      window.location.replace("/");
    }
    else{
      alert(responseData.errors)
    }
  }
  

  return (
    <Main>
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          { state=== "Sign Up" ? <input name='username' value={formData.username} onChange={changeHandler} type='text' placeholder='Your Name' /> : <></>}
          <input name='email' value={formData.email} onChange={changeHandler}  type='email' placeholder='Email' />
          <input name='password' value={formData.password} onChange={changeHandler} type='password' placeholder='Password' />
        </div>

        <button onClick={() => {state === "Login" ? login(): signup()}}>Continue</button>
        {state === "Sign Up"? <p className="loginsignup-login">
          Already have an account ? <span onClick={() => {setState("Login")}}>Login here</span>
        </p> :
         <p className="loginsignup-login">
         Create an account ? <span onClick={() => {setState("Sign Up")}} >Click here</span>
       </p>
        }
        <div className="loginsignup-agree">
          <input type='checkbox' name ='' id='' />
          <p>By continuing , i agree to all the terms and conditions</p>
        </div>
      </div>
    </div>
    </Main>
  )
}
const Main = styled.div`
  .loginsignup{
    width: 100%;
    height: 80vh;
    background: #fce3fe;
    padding-top: 100px;
  }
  .loginsignup-container{
    border-radius: 10px;
    width: 550px;
    height: 70%;
    background-color: white;
    margin: auto;
    padding: 40px 60px;
  }
  .loginsignup-container h1{
    margin: 10px 0px;
  }
  .loginsignup-fields{
    display: flex;
    flex-direction: column;
    gap: 29px;
    margin-top: 30px;
  }
  .loginsignup-fields input{
    border-radius: 10px;
    height: 52px;
    width: 100%;
    padding-left: 20px;
    border: 1px solid #c9c9c9;
    outline: none;
    color: #5c5c5c;
    font-size: 14px;
  }
  .loginsignup-container button{
    border-radius: 10px;
    width: 580px;
    height: 52px;
    color: white;
    background: #ff4141;
    margin-top: 30px;
    border: none;
    font-size: 24px;
    font-weight: 500;
    cursor: pointer;
  }
  .loginsignup-login{
    margin-top: 20px;
    color: #5c5c5c;
    font-weight: 500;
    font-size: 18px;
  }
  .loginsignup-login span{
    color: #ff4141;
    font-weight: 600;
  }
  .loginsignup-agree{
    display: flex;
    align-items: center;
    margin-top: 25px;
    gap: 20px;
    color: #5c5c5c;
    font-size: 18px;
    font-weight: 500;
  }
`
export default LoginSignup