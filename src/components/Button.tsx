"use client"
import dynamic from "next/dynamic";
// import { ArrowDown } from "./Icons";
import Image from "next/image";


interface Ibutton{
    type?:any,
    name: string;
    loading?: boolean,
    buttonStyle?: string,
    iconStyle?: {src:string | any,style:string,width:number,height:number},
    icon?:boolean,
    click?:any,
    dropdown?:boolean
}
export function Button({
  type,
  name,
  icon,
  click,
  dropdown,
  iconStyle,
  loading,
  buttonStyle,
}: Ibutton){

  const Spinner = dynamic(()=> import("root/components/Icons/Spinner"),{ssr:false})
  const ArrowDown = dynamic(()=> import("root/components/Icons/ArrowDown"),{ssr:false})
  return (
    <>
    {
      click ?
      <button 
        type={type}
        id="button"
        disabled ={loading}
        className={`px-5 rounded-bl-lg rounded-tr-lg py-2 flex items-center gap-1 ${buttonStyle}`}
        onClick={click}
      >
        {icon ? 
        <Image 
        src={iconStyle?.src} 
        alt="icon" 
        width={iconStyle?.width} 
        height={iconStyle?.height} 
        /> :
        ""
        }
        <span>{name}</span>
        {dropdown ? <ArrowDown /> : "" }
        {loading ? <Spinner />  : ""}
      </button>

      :
        <button 
        type={type}
        id="button"
        disabled ={loading}
        className={`px-5 rounded-bl-lg rounded-tr-lg py-2 flex items-center gap-1 ${buttonStyle}`}
      >
        {icon ? 
        <Image 
        src={iconStyle?.src} 
        alt="icon" 
        width={iconStyle?.width} 
        height={iconStyle?.height} 
        /> :
        ""
        }
        <span>{name}</span>
        {dropdown ? <ArrowDown /> : "" }
        {loading ? <Spinner />  : ""}
      </button>
    }

    </>

  );
}
