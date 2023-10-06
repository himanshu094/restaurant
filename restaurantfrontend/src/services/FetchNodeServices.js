import axios from "axios";

const serverURL='http://localhost:5000';

const getData=async(url)=>{
  try{
    let headers={}
    if(localStorage.getItem("TOKEN")){
      headers={headers:{Authorization:localStorage.getItem("TOKEN")}};
    }
    const response=await axios.get(`${serverURL}/${url}`,headers);
    const result=await response.data;

    return result;
  }
  catch(e)
  {
     console.log(e);
     return(null)
  }
}

const postData=async(url,body)=>{
  try{
    let headers={};
    if(localStorage.getItem("TOKEN")){
      headers={headers:{Authorization:localStorage.getItem("TOKEN")}};
    }
    const response=await axios.post(`${serverURL}/${url}`,body,headers);
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
