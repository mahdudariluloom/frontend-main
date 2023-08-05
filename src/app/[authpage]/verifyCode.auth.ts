import { baseURL } from "../../../environment";
import { IVerifyCode } from "./auth.interface";
import { postData } from "../../utils/services/signup";
const url = ""
// const url = baseURL + `/verifyCode?email=${email}`;
function verifycode({values,setLoading,query}:{values:any, setLoading:any,query:any}){
    const url = `verifyCode?email=${query.email}`;
    console.log(url);
    
     const val = postData<IVerifyCode>(url,values).pipe().subscribe(
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
export default verifycode;