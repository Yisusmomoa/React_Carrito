import React, {  useState } from 'react';
import { useForm } from 'react-hook-form';
import {fetchs} from '../access/fetchs'
import Swal from 'sweetalert2'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import introduction from '../media/introduction.svg'
const RegisterAction=async (user)=>{
    user.typeUser="Student"
    user.carrer="LMAD"
    const resp=await fetchs('register', user, 'POST')
    const body=await resp.json()
    const navigate = useNavigate()
    if(resp.ok){
        console.log("Registrado con exito")
        Swal.fire({
            icon: 'success',
            title: 'Registrado'
        }).then(()=>navigate("/"))
    }
    else{
        console.log("Error registro")
        Swal.fire({
            icon: 'error',
            title: 'Error'
        })
    }
    return body
}

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [error, setError] = useState(false);

    const onSubmit=(data)=>{
        console.log(data)
        Swal.fire({
            icon: 'info',
            title: 'Loading...',
            didOpen: () =>{
              Swal.showLoading();
            }
        })
            RegisterAction(data)
        
    }

    // Showing error message if error is true
    const errorMessage = () => {
        return (
        <div
            className="error"
            style={{
            display: error ? '' : 'none',
            }}>
            <h1>Error, try again later</h1>
        </div>
        );
    };
    
    return (
        <ContainerRegister>
            <div>
                <img src={introduction} alt='SVG logo register' />
            </div>
            {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
            <ContainerForm onSubmit={handleSubmit(onSubmit)}>
                <h1>Registration</h1>
                {/* register your input into the hook by invoking the "register" function */}
                {/* include validation with required or other standard HTML validation rules */}
                <input type='text' placeholder='Name' name='name' 
                {...register("name", {required:true})}/>
                {/* errors will return when field validation fails */}
                {errors.name&&<span>This field is required</span>}
                
                <input type='text' placeholder='Username' name='username'
                {...register("username", {required:true} )}/>
                {errors.name&&<span>This field is required</span>}
                
                <input type='password' placeholder='Password' name='password' 
                {...register("password", {required:true} )}/>
                {errors.name&&<span>This field is required</span>}
                
                <input type='email' placeholder='Email' name='email'
                {...register("email", {required:true})} />
                {errors.name&&<span>This field is required</span>}

                <ContainerFormButton type='submit'>Enviar</ContainerFormButton>

                <Link to='/login'>You have an Account?</Link>
            </ContainerForm>
            {/* consumir la api de psm, para el registsro y login 
                guardo de manera local el user cuando haga un login
                y también usando el userConntext 
            */}

        </ContainerRegister>
    );
}

const ContainerRegister=styled.div`
    display:grid;
    height: 80vh;
    width:90%;
    margin:0 auto;
    margin-top:2rem;
    grid-template-rows:100%;
    grid-template-columns:50% 50%;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    justify-items: center;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    border-radius:7px;
`

const ContainerForm=styled.form`
    display:flex;
    flex-direction:column;
    align-items: center;
    height:70%;
    justify-content: center;
    width:90%;
    flex-wrap: wrap;
    gap: 12px;
    padding:10px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.1);
    h1{
        align-self:flex-start;
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


export default Register;
