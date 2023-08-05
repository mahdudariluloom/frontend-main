"use client"
import { useSearchParams, useParams } from "next/navigation";
import {useEffect,useState} from 'react'
import Card from "../../components/Form/Card";
import Form from "../../components/Form/Form";
import { initialSignupValues, loginValidation, initialLoginValues, signupValidation, vcValidation,fpValidation,passchangeValidation,initialvcValues, initpasschangeValues, initialfpValues } from "root/components/Form/Validation/authpage.validation";
import dynamic from "next/dynamic";


 function Auth() {
    const { authpage } = useParams();
    const [page, setPage] = useState({default:""})
    const [data, setData] = useState({default:[]})

    useEffect(()=>{
        const pageLoad = async () => {
            setData(await import(`./Data/${authpage}.data`))
            setPage(await import(`./${authpage}.auth`))
        }
        pageLoad()
    },[authpage])

    const Link = dynamic(()=>import('next/link'))
    const NotFound = dynamic(()=>import('root/utils/notfound'))

    const whiteList: Array<string> = ["login", 'signup', "fpass", "cpass", "verifyCode"]
    const roles: Array<string> = ["student", "admin", "parent"]

    const getrole: any = useSearchParams().get("role");
    const email:string | any = useSearchParams().get("email");
    const isConfirm:boolean | any = useSearchParams().get("isConfirm");

    return (
        <>
            {
                whiteList.includes(authpage) && roles.includes(getrole)
                    ?
                    <div className="grid grid-cols-none w-full md:grid-cols-3">
                        <div className="bg-yellow-600 px-5 hidden md:block ">
                            <h1 className="text-3xl tracking-wide text-gray-600 font-bold my-4">{authpage === "signup" ? "Welcome" : 'Welcome back'}</h1>
                        </div>
                        <div className={`bg-gray-600 md:bg-white flex justify-center col-span-2 items-center 
                        ${authpage != "signup" ? "h-[100vh]" :"" }  w-full py-7`}>
                            <Card style="w-full md:shadow-sm md:shadow-yellow-600 sm:w-3/4 md:w-1/2">
                                <div className="text-center pb-6">
                                    <h1 className="text-3xl tracking-wide text-yellow-600 font-bold my-4">
                                        {
                                            authpage === "signup" ? 'Sign Up' :
                                                authpage === "login" ? 'Login' :
                                                authpage === "verifyCode" ? "Verify Code" :
                                                    authpage === "cpass" ? "Change Password" :
                                                        authpage === "fpass" ? "Forget Password" : ""
                                        }
                                    </h1>
                                    <div className="my-5">       
                                    {
                                        authpage === "verifyCode" ? <div>
                                        <h1 className="mb-5 text-yellow-600">Enter the verification below</h1>
                                        <span className="text-yellow-600 text-xl border font-bold">{"verifition code"}</span>
                                        </div>
                                        :
                                    <span className="text-yellow-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit.hshjdhjs</span>
                                    }
                                    </div>
                                </div>
                    
                                <Form
                                query={{email,isConfirm,role:getrole}}
                                    func={page.default}
                                    buttonLabel={
                                        authpage === "signup" ? 'Sign Up' :
                                            authpage === "login" ? 'Login' :
                                                authpage === "verifyCode" ? "Verify Code" :
                                                    authpage === "cpass" ? "Change Password" :
                                                        authpage === "fpass" ? "Forget Password" : ""
                                    }
                                    initialValues={
                                        authpage === "signup" ? initialSignupValues :
                                        authpage === "login" ? initialLoginValues :
                                        authpage === "verifyCode" ? initialvcValues :
                                        authpage === "cpass" ? initpasschangeValues :
                                        authpage === "fpass" ? initialfpValues  : ""
                                    }
                                    validationSchema={
                                        authpage === "signup" ? signupValidation :
                                        authpage === "login" ? loginValidation :
                                        authpage === "verifyCode" ? vcValidation :
                                        authpage === "cpass" ? passchangeValidation :
                                        authpage === "fpass" ? fpValidation  : ""
                                    }
                                    formArr={data.default}
                                />
                                <div className={`flex justify-between mt-4 py-4 border-t-2 border-yellow-600 ${getrole=="admin"? "hidden" : ""}`}>
                                    {
                                     authpage === "login" ? 
                                     <span>
                                        Dont have an account... <Link href={`signup?role=${getrole}`}>Sign Up</Link>
                                     </span>
                                       :
                                     authpage === "signup" ?
                                     <span>
                                        Already have an account... <Link href={`login?role=${getrole}`}>Login</Link>
                                     </span>  :
                                     ""
                                    }
                                    { authpage === "login" ?
                                        <Link href={`fpass?role=${getrole}`}>Forget Password</Link>
                                        : ""
                                    }
                                    
                                </div>
                            </Card>
                        </div>
                    </div>
                    : <NotFound />
            }
        </>
    )
}

export default Auth;