import React, { useContext, useState } from 'react';
import UserContext from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

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
        <div>
            {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
            <form onSubmit={handleSubmit}>
                <input type='email' placeholder='email' name='email' onChange={handleChange}/>

                {/* register your input into the hook by invoking the "register" function */}
                {/* include validation with required or other standard HTML validation rules */}
                <input type='password' placeholder='password' name='password' onChange={handleChange}/>
                <button type='submit'>Login</button>
            </form>
        </div>
    );
}

export default Login;
