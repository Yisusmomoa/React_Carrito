const baseUrl=process.env.REACT_APP_API_URL

const fetchs=(endpoint, data, method)=>{
    const url=`${baseUrl}/users/${endpoint}`
    if (method==='GET') {
        return fetch(url)   
    }
    else {
        return fetch(url, {
            method,
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
    }
    
}

export {
    fetchs
}