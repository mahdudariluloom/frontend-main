function Input({field,props,meta}:{field:any,props:any,meta:any}){
    return (
        <>
            <div className="my-3">
             <div className="my-1 text-yellow-600 md:text-gray-600">
                <label className="">{props.label}</label>
            </div>   
            <input 
            className="py-4 px-3 text-gray-600 outline-none shadow-sm shadow-yellow-600 w-full" 
            {...field} 
            {...props}
            />
            {meta.touched && meta.error ? (
                            <small className="error text-red-700">{meta.error}</small>
                ) : null}
        </div>
        </>
    )
}
export default Input;