
import { postData } from "../../utils/services/signup";
import { IconfirmPassword } from "./auth.interface";


function confirmpassword({values,setLoading,query}:{values:any,setLoading:any,query:any}){
    const url = `confirmPassword?email=${query.email}&isConfirm=${query.isConfirm}`
    const val = postData<IconfirmPassword>(url,values).pipe().subscribe(
        {
            next:(data)=>{
                console.log(data);
                setLoading(false)
            },
            error:(err)=>{
                console.log(err);
                setLoading(false)
            },
            complete:()=>{
                console.log("");
                setLoading(false)
            }
        }
    )

    val.unsubscribe()
}
export default confirmpassword;