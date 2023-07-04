"use client"
import { useState } from "react";
import { Spinner, ArrowDown } from "./Icons";
import Image from "next/image";


interface Ibutton{
    type?:any,
    name: string;
    loading?: boolean,
    buttonStyle?: string,
    iconStyle?: {src:string | any,style:string,width:number,height:number},
    icon?:boolean,
    click?:{fxn:any,param?:any,},
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

  return (
    <>
    {
      click ?
      <button 
        type={type}
        id="button"
        disabled ={loading}
        className={`px-5 rounded-bl-lg rounded-tr-lg py-2 flex items-center gap-1 ${buttonStyle}`}
        onClick={()=>{click.param  ? click.fxn(): click.fxn(!click.param)}}
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
