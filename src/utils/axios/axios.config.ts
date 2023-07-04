import axios from "axios";


 const config = axios.create({
    baseURL:"http://localhost:8000/",
     signal: new AbortController().signal,
     maxRedirects: 5000
})


config.interceptors.request.use((config):any=>{
    const token = "henshaw";
    config.headers.Authorization = `Bearer ${token}`; 
    config.data = {...config.data }; 
    return config;
},(err)=>{
    console.log(err);
    return Promise.reject(err)
})
config.interceptors.response.use(
    (response) => {
    // Do something with response data
     console.log(response.data);
    return response.data;
  },
  (error) => {
    // Do something with response error
    return Promise.reject(error);
  }
)

export default config;
