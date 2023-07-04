export interface Signup{
    name:string,
    email:string,
    phoneNo: string
    password:string
}

export interface ILogin{
    email:string,
    password:string
}

export interface IVerifyCode{
    verifyCode:string,
}

export interface IForgetPassword{
    email:string,
    phoneNo: string
}

export interface IconfirmPassword{
    newPassword:string
}