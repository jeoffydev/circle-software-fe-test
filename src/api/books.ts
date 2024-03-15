import axios from "axios";

if(window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"){ 
    axios.defaults.baseURL = 'http://localhost:8000/books' 
} else {
    axios.defaults.baseURL = 'http://localhost/domain' 
}


export async function getBooksList() { 
    const response = await axios.get('')  
    return  response;
}

export async function getBook(id: number) { 
    const response = await axios.get(`/${id}`)  
    return  response;
}

export async function getBuyBook(id: number) { 
    
    const response = id ?  await axios.post(`/${id}/purchase`) : undefined
    return  response;
}