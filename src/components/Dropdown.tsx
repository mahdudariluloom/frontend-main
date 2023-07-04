import Link from "next/link";;

export interface IDropdown{
   name:string,
   href:string
}
function Dropdown({dropdownArry,droplist,setlist,style}:{dropdownArry:IDropdown[],droplist:boolean,setlist:any,style?:string}) { 
    return (
        <>
            <div id="dropdown" className={`${droplist ? "block": "hidden"} lg:absolute md:z-20 md:top-14 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 ${style}`}>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    {
                        dropdownArry.map((e:IDropdown,i:number)=>(
                            <Link href={`${e.href}`} key={i}>
                            <li onClick={()=> setlist(false)} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                    {e.name}
                            </li>
                            </Link>     
                        ))
                    }                                  
                </ul>
            </div>
        </>
    )
}
export default Dropdown;