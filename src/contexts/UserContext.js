// guardar la información del usuario autenticado

import React, { createContext,useState } from "react";
import { loginAction } from "../actions/LoginAction";


const UserContext=createContext()

/**
 * este usercontext tiene 2 propiedades utiles 
 * un provider y un consumer
 * cuando usamos hooks nos importa el provider, porque react nos brida un hook para manejarla
 * 
 */


const UserProvider=({children})=>{
    const [user, setUser]=useState({})
    
    const login=async (puser)=>{
      console.log("usercontext")
      const res=await loginAction(puser)
      debugger;
      if(res!=null){
        setUser(res)
        return true
      }
      return false
    }
    const logout=()=>setUser(null)
    const data={user, login, logout}

    return (
      <UserContext.Provider value={data}>
        {children}
      </UserContext.Provider>
    ) 
}

export {UserProvider}
export default UserContext;
