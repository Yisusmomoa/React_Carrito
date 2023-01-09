import {fetchs} from '../access/fetchs'

export const RegisterAction=async (user)=>{
    const resp=await fetchs('register', user, 'POST')
    const body=await resp.json()
    if(body.ok){
        console.log("Registrado con exito")
    }
    else{
        console.log("Error registro")
    }
    return body
}