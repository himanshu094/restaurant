import axios from "axios";

const serverURL='http://localhost:5000';

const getData=async(url)=>{
  try{
    const response=await axios.get(`${serverURL}/${url}`);
    const result=await response.data;
    return(result)
  }
  catch(e)
  {
     console.log(e);
     return(null)
  }
}

const postData=async(url,body)=>{
  try{
    const response=await axios.post(`${serverURL}/${url}`,body);
    const result=await response.data;
    return(result)
  }
  catch(e)
  {
     console.log(e);
     return(null)
  }
}

export {serverURL,getData,postData}
