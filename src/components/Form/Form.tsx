// "use client"
import { Form, Formik } from "formik";
import {MyTextInput}  from "./InputFarm";
import { Iform } from "root/interfaces/forms.interfaces";
import { Button } from "../Button";
import { useState } from "react";


const Forms = ({initialValues,validationSchema,formArr, buttonLabel, func,query}:Iform) => {
  const [isLoading, setLoading] = useState(false);
  return (
    <div>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values,{setSubmitting}) =>{
        setLoading(true);
        func({values,setLoading,query})
        setTimeout(() => {
                setSubmitting(false);
        })
      } }
    >
      <Form>
        {
          formArr.map((ele, index)=>(
            <MyTextInput key={index} props={
                {
                    name: ele.name,
                    label: ele.label,
                    type: ele.type,
                    placeholder: ele.placeholder
                }
            }
          />)
          )
          }       
            <div className="py-3">
                <Button 
                type={"submit"}
                name={buttonLabel}
                buttonStyle="border mx-auto border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-gray-600" 
                loading={isLoading} 
                />
            </div>
      </Form>
    </Formik>
  </div>
  )
}

export default Forms;