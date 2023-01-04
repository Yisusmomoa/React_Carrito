import React, {  useState } from 'react';
import { useForm } from 'react-hook-form';
import {fetchs} from '../access/fetchs'

// ES6 Modules or TypeScript
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

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
    // CommonJS
    //const Swal = require('sweetalert2')

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
        <div>
            {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
            <form onSubmit={handleSubmit(onSubmit)}>
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

                <button type='submit'>Enviar</button>
            </form>
            {/* consumir la api de psm, para el registsro y login 
                guardo de manera local el user cuando haga un login
                y también usando el userConntext 
            */}

        </div>
    );
}

export default Register;
