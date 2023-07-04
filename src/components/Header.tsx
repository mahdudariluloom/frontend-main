import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Dropdown, { IDropdown } from "./Dropdown";
import { Button } from "./Button";
import { ArrowDown } from "./Icons";


function Header(){
  const [navbar, setNavbar] = useState(false);
  const [droplist, setDroplist] = useState(false);
  const [dropAcc, setDropAcc] = useState(false);
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);

  const subnavList:IDropdown[] = [
    {name:"For School", href:""},
    {name:"For Modrasah", href:""},
    {name:"For Tahfeez", href:""}
  ]
  const category:IDropdown[] = [
    {name:"As a Student", href:""},
    {name:"As a Teacher", href:""},
    {name:"As a Parent", href:""},
    {name:"As an Admin", href:""}
  ]
   
    return (
        <div>
            <nav className="bg-yellow-600 transition duration-1000 md:bg-gray-600 sticky top-0 left-0 right-0 z-10 px-1 lg:px-15">
                  <div className="flex justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:px-8">
                  <div className="flex items-end py-3 md:py-5 md:flex-row-reverse md: gap-5">

                <div className="xl:hidden">
                  <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400"
                  onClick={()=> setNavbar(!navbar)}
                  >
                    {
                      navbar ? <span>❌</span> : <span className="focus:border-none active:border-noneS">||||</span>
                    }
                  </button>
                </div>
                <div className="">
                  <Link href={"/"}>
                    <h2 className="text-2xl text-gray-600 md:text-yellow-600 font-bold">DARIL-ULOOM</h2>
                  </Link>
                </div>
            </div>
          <div className="flex items-center">
            <div className={`flex gap-4 justify-self-center pb-3 xl:block md:pb-0 md:mt-0 ${navbar ? " absolute right-0 bg-yellow-600 w-full" : "hidden"}`}>
                  <ul className="h-screen md:h-auto items-center justify-center md:flex">
                        <Link href={''}>
                          <li className="md:px-5 text-gray-600 md:text-yellow-600 hover:text-gray-600 md:hover:text-yellow-600 hover:font-bold hover:transition hover:duration-1000 hover:ease-in-out">HOME</li>
                        </Link>
                        <Link href={''}>
                          <li className="md:px-5 text-gray-600 md:text-yellow-600 hover:text-gray-600 md:hover:text-yellow-600 hover:font-bold hover:transition hover:duration-1000 hover:ease-in-out">NEWS</li>
                        </Link>

                 <div>
                 <li 
                      onClick={()=> setDroplist(!droplist)}
                      id="dropdownDefaultButton" 
                      data-dropdown-toggle="dropdown" 
                      className="md:px-5 inline-flex items-center hover:cursor-pointer text-white md:text-yellow-600 md:hover:text-yellow-600 hover:text-gray-600 hover:font-bold hover:transition hover:duration-1000 hover:ease-in-out">
                          ADMISSION  <ArrowDown />
                          </li>
                          <Dropdown setlist={setDroplist} droplist={droplist} dropdownArry={subnavList} />
                 </div>
                    <div>
                        <li 
                      onClick={()=> setDropAcc(!dropAcc)}  
                      id="dropdownDefaultButton" 
                      data-dropdown-toggle="dropdown" 
                      className="md:px-5 inline-flex items-center hover:cursor-pointer text-white md:text-yellow-600 md:hover:text-yellow-600 hover:text-gray-600 hover:font-bold hover:transition hover:duration-1000 hover:ease-in-out">
                          ACADEMICS <ArrowDown />
                          </li>
                          <Dropdown setlist={setDropAcc} droplist={dropAcc} dropdownArry={subnavList} />
                        </div>
                        
                        <Link href={""}> 
                          <li className="md:px-5 text-gray-600 md:text-yellow-600 md:hover:text-yellow-600 hover:text-gray-600 hover:font-bold hover:transition hover:duration-1000 hover:ease-in-out">ABOUT</li>
                        </Link>
                        <Link href={""}>
                          <li className="md:px-5 text-gray-600 md:text-yellow-600 md:hover:text-yellow-600 hover:text-gray-600 hover:font-bold hover:transition hover:duration-1000 hover:ease-in-out">CONTACT</li>
                        </Link>
                  </ul>
                </div>
                <div className="flex md:gap-2 md:px-5 border">
                  <div className="">
                 <Button  name="Login" type={`submit`} buttonStyle=" border border-gray-600 lg:border-yellow-600 text-gray-600 lg:text-yellow-600 gap-0" dropdown={true} />
                    <Dropdown setlist={setLogin} droplist={login} dropdownArry={category} />
                  </div>
                  <div>
                  <Button name="Signup" type={`submit`} buttonStyle=" border border-gray-600 lg:border-yellow-600 text-gray-600 lg:text-yellow-600 gap-0" dropdown={true} />
                  <Dropdown setlist={setSignup} droplist={signup} dropdownArry={category} />
                  </div>
                 </div>
            </div>
               </div>
            </nav>
        </div>
      )
}

export default Header