import { ILogin } from "./auth.interface";
import { postData } from "root/utils/services/signup";
const url = "";
function login({values,setLoading}:{values:any, setLoading:any}){
    const val = postData<ILogin>(url,values).pipe().subscribe(
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
export default login;