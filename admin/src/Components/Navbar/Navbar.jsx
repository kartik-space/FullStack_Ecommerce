import React from 'react'
import styled from 'styled-components'
import navlogo from '../../assets/nav-logo.svg'
import navprofile from '../../assets/nav-profile.svg'
const Navbar = () => {
  return (
    <Main>
    <div className='navbar'>
        <img src={navlogo} alt='' className='nav-logo' />
        <img src={navprofile} alt='' className='nav-profile' />
    </div>
    </Main>
  )
}
const Main = styled.div`

    .navbar{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px 60px;
        box-shadow: 0px 1px 2px 3px -2px #000;
        margin-bottom: 1px;
        background: white;
    }
    .nav-logo{
        width: 200px;
    }
    .nav-profile{
        width: 75px;
    }
    @media(max-width: 800px) {
        .navbar{
            padding: 15px 30px;
        }
        .nav-logo{
            width: 150px;
        }
        .nav-profile{
            width: 60px;
        }
    }
`

export default Navbar