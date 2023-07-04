export interface Iprops{
    placeholder?:string,
    name:string,
    type:string ,
    label:any
  }

  export interface Iform{
    initialValues:any, 
    validationSchema:any,
    formArr:Iprops[],
    buttonLabel:string,
    func:any,
    role?:string,
    query?: Object 
  }