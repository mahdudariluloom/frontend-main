import { useField } from "formik";
import Input from "../Input";
import { Iprops } from "root/interfaces/forms.interfaces";


export const MyTextInput = ({props}:{props:Iprops}) => {
    const [field, meta] = useField(props);
    return (
      <div>
          <Input 
          meta={meta} 
          field={field} 
          props={props}
          />
      </div>
    );
  };