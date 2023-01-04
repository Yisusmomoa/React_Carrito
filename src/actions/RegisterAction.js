import {fetchs} from '../access/fetch'

export const RegisterAction=async (user)=>{
    const resp=await fetch('register', user, 'POST')
    const body=await resp.json()
    if(body.ok){
        console.log("Registrado con exito")
    }
    else{
        console.log("Error registro")
    }
    return body
}