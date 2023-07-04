// import { Signup } from "root/interfaces/signup.interface"
// import { postData } from "../services/signup";

// const user:any = localStorage.getItem("user")
// const fromLS:any = JSON.parse(user)



// export const submit=(values:any, {setSubmitting }:{ setSubmitting:any}, setLoading:any,url:string):any=> {
//   if (url === "verifyCode") {
//     url = url + `?email=${fromLS.email}`;
//   }
//   if (url === "cpass") {
//     url = url + `?email=${fromLS.email}&isConfirmed=${fromLS.isConfirmed}`
//   }
//     postVal(url,values, setLoading)

//     setTimeout(() => {
//       setSubmitting(false);
//     })
//   }

//  function postVal(url:string,values:any, setLoading:any){
//   postData<Signup>(url, values).subscribe(
//     {
//       next:(val:any) => {
//         console.log(val)
//         localStorage.setItem('user', JSON.stringify(val))
//         setLoading(false)
//       },
//       error:(err:any) => {
//         setLoading(false)
//         console.log(err)
//       }
//     }
//   )
//  }