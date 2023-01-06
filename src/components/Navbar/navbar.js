import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import styled from 'styled-components';

const NavBarWrapper=styled.nav`
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width:100%;
    height:auto;
    background-color:#e6e6e8;
`
const NavBarLinks=styled.div`
    display:flex;
    width:75%;
    height:auto;
    justify-content: space-evenly;
    a:-webkit-any-link {
        text-decoration: none;
        color: black;
        cursor: pointer;
        padding:1rem;
        font-size:20px;
        width:100%;
        height:100%;
        text-align: center;
        
    }
    a:hover{
        color:rebeccapurple;
    }
`

const NavBarUser=styled.div`
    display:flex;
    width:25%;
    height:auto;
    align-items: center;
    justify-content: space-evenly;
`

const NavBarButtonLogout=styled.button`
background-color:#e32636; /* Green */
  border: none;
  border-radius:5px;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor:pointer;
  :hover{
    background-color: #9e1a25;
  }
`

const Navbar = () => {
    const {user, logout}=useContext(UserContext)

    return (
        <NavBarWrapper>
            <NavBarLinks>
                <Link to={"/home"}>Home</Link>
                <Link to={"/cart"}>Cart</Link>
                <Link to={"/register"}>Register</Link>
                <Link to={"/login"}>Login</Link>
            </NavBarLinks>
            <NavBarUser>
                {
                    user&&
                    <span>
                        <h2>
                            {user.username}
                        </h2>
                    </span>
                }
                {
                    user
                    && <NavBarButtonLogout onClick={logout}>Logout</NavBarButtonLogout>
                }
            </NavBarUser>
           
        </NavBarWrapper>
    );
}

export default Navbar;
