import {string,object, number} from "yup";

export const signupValidation = 
object({
    name: string()
      .max(20, 'Must be 15 characters or less')
      .required('Required'),
    email: string()
      .email('Invalid email address')
      .required('Required'),
    phoneNo: string()
      .min(9, "Not a Phone Number")
      .max(11,"Not a Phone Number")
      .required('Required'),
    password: string()
      .required('Required')
  })

  export const initialSignupValues = {
    name: "",
    email:"",
    phoneNo: "",
    password:""
  }
  
  export const loginValidation = object({
    email: string()
      .email('Invalid email address')
      .required('Required'),
    password: string()
      .required('Required')
  })

  export const initialLoginValues = {
    email:"",
    password:""
  }


  export const vcValidation = object({
    verifyCode: string()
      .min(6,"Code length not less than six")
      .max(6,"Code length not more than six")
      .required('Required')
  })

  export const initialvcValues = {
    verifyCode:"",
  }

  export const fpValidation = object({
    email: string()
      .email('Invalid email address')
      .required('Required'),
    phoneNo: string()
      .min(9, "Not a Phone Number")
  })

  export const initialfpValues = {
    email:"",
    phoneNo: "",
  }
  export const passchangeValidation = object({
    newPassword: string()
      .required('Required')
  })

  export const initpasschangeValues = {
    newPassword:""
  }