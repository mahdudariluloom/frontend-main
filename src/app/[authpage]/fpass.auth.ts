import { IForgetPassword } from "./auth.interface";
import { postData } from "root/utils/services/signup";
const url = "";
function forgetpassword({values,setLoading}:{values:any, setLoading:any}){
    const url = "forgetPassword";
    const val = postData<IForgetPassword>(url,values).pipe().subscribe(
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
export default forgetpassword;