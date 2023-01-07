import React, { Fragment, useContext, useState } from 'react';
import UserContext from '../contexts/UserContext';
import { useNavigate, Link } from 'react-router-dom';

import styled from 'styled-components';
import Swal from 'sweetalert2'

const Login = () => {   

    const {login} = useContext(UserContext);
    const navigate = useNavigate()
    const [loginForm, setLoginForm]=useState({
        email:"",
        password:""
    })

    const onSubmit=async (data)=>{
        
        // console.log(data)
        Swal.fire({
            icon: 'info',
            title: 'Loading...',
            didOpen: () =>{
              Swal.showLoading();
            }
        })
        if(await login(data)){
            Swal.fire({
                icon: 'success',
                title: 'Bienvenido'
            }).then(()=>navigate("/"))
        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'Error'
            })
        }
    }

    const handleSubmit=(ev)=>{
        ev.preventDefault()
        console.log(loginForm)
        onSubmit(loginForm)
    }

    const handleChange=(ev)=>{
        const {name, value}=ev.target
        const newValues={
            ...loginForm,
            [name]:value
        }
        setLoginForm(newValues)
        // console.log(loginForm)
    }

    return (
        <Fragment>
            {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
            <ContainerLoginForm onSubmit={handleSubmit}>
                <h1>Sign in</h1>
                <input type='email' placeholder='email' name='email' onChange={handleChange}/>

                {/* register your input into the hook by invoking the "register" function */}
                {/* include validation with required or other standard HTML validation rules */}
                <input type='password' placeholder='password' name='password' onChange={handleChange}/>
                <ContainerFormButton type='submit'>Login</ContainerFormButton>
            </ContainerLoginForm>
        </Fragment>
    );
}

const ContainerLoginForm=styled.form`
    display:flex;
    height: 80vh;
    width:60%;
    margin:0 auto;
    margin-top:2rem;
    box-sizing: border-box;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    border-radius:7px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 24px;
    padding:10px;
    h1{
        align-self:center;
    }
    input{
        border-radius:25px;
        width:45%;
        padding:10px 35px;
        border:2px solid #707d80;
    }
`

const ContainerFormButton=styled.button`
  border-radius:25px;
  padding:10px 35px;
  width:55%;
  text-align: center;
  background-color:transparent;
  border:2px solid #7e7e80;
  cursor:pointer;
  
  :hover{
    background-color:#7e7e80;
    border:2px solid #fff;
    color:#fff;
  } 
`


export default Login;
