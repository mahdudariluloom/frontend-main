import { Signup } from "./auth.interface";
import { postData } from "root/utils/services/signup";

function signup({values,setLoading}:{values:any, setLoading:any}){
    const url = "users"
    const val = postData<Signup>(url,values).subscribe(
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
export default signup;