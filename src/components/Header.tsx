// import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Dropdown, { IDropdown } from "./Icons/Dropdown";
// import { Button } from "./Button";
import ArrowDown  from "./Icons/ArrowDown";


function Header(){
  const [navbar, setNavbar] = useState(false);
  const [droplist, setDroplist] = useState(false);
  const [dropAcc, setDropAcc] = useState(false);
  // const [login, setLogin] = useState(false);
  // const [signup, setSignup] = useState(false);

  const subnavList:IDropdown[] = [
    {name:"For School", href:"admission?section=school"},
    {name:"For Modrasah", href:"admission?section=modrasah"},
    {name:"For Tahfeez", href:"admission?section=tahfeez"}
  ]
  const subnavListAcc:IDropdown[] = [
    {name:"For School", href:"academic?section=school"},
    {name:"For Modrasah", href:"academic?section=modrasah"},
    {name:"For Tahfeez", href:"academic?section=tahfeez"}
  ]
  // const categoryLogin:IDropdown[] = [
  //   {name:"As a Student", href:"login?role=student"},
  //   {name:"As a Teacher", href:"login?role=teacher"},
  //   {name:"As a Parent", href:"login?role=parent"},
  //   {name:"As an Admin", href:"login?role=admin"}
  // ]
  // const categorySignup:IDropdown[] = [
  //   {name:"As a Student", href:"signup?role=student"},
  //   {name:"As a Teacher", href:"signup?role=teacher"},
  //   {name:"As a Parent", href:"signup?role=parent"},
  //   {name:"As an Admin", href:"signup?role=admin"}
  // ]
   
    return (
        <div>
            <nav className="bg-yellow-600 md:bg-gray-600 sticky top-0 left-0 right-0 z-10 px-1 lg:px-8">
                <div className="xl:flex justify-between items-center">
                  <div className="flex justify-between items-center py-5">

                <div className="w-full block text-center">
                  <Link href={"/"}>
                    <h2 className="text-2xl text-gray-600 md:text-yellow-600 font-bold">DARIL-ULOOM</h2>
                  </Link>
                </div>
                <div className="lg:hidden">
                  <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400"
                  onClick={()=> setNavbar(!navbar)}
                  >
                    {
                      navbar ? <span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                    </svg>
                    </span> : <span className="focus:border-none active:border-none"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg></span>
                    }
                  </button>
                </div>
            </div>
          <div  className={`lg:border-t-2 lg:border-t-yellow-600 xl:border-none`}>
            <div className={`${navbar ? "absolute z-20 bg-yellow-600 md:bg-gray-600 w-full left-0" :"hidden lg:block"}`}>
                  <ul className="h-auto px-4 lg:flex md:items-center lg:justify-center py-2"> 
                        <Link href={'/'}>
                          <li className="py-4 lg:py-0 md:px-5 text-gray-600 md:text-yellow-600 hover:text-gray-600 md:hover:text-yellow-600 hover:font-bold hover:transition hover:duration-1000 hover:ease-in-out">HOME</li>
                        </Link>
                        <Link href={'/blogs'}>
                          <li className="py-4 lg:py-0 md:px-5 text-gray-600 md:text-yellow-600 hover:text-gray-600 md:hover:text-yellow-600 hover:font-bold hover:transition hover:duration-1000 hover:ease-in-out">NEWS</li>
                        </Link>

                 <div>
                 <li 
                      onClick={()=> setDroplist(!droplist)}
                      id="dropdownDefaultButton" 
                      data-dropdown-toggle="dropdown" 
                      className="py-4 lg:py-0 md:px-5 inline-flex items-center hover:cursor-pointer text-gray-600 md:text-yellow-600 md:hover:text-yellow-600 hover:text-gray-600 hover:font-bold hover:transition hover:duration-1000 hover:ease-in-out">
                          ADMISSION  <ArrowDown />
                          </li>
                          <Dropdown style="lg:top-28 xl:top-14" setlist={setDroplist} droplist={droplist} dropdownArry={subnavList} />
                 </div>
                    <div>
                        <li 
                      onClick={()=> setDropAcc(!dropAcc)}  
                      id="dropdownDefaultButton" 
                      data-dropdown-toggle="dropdown" 
                      className="py-4 lg:py-0 md:px-5 inline-flex items-center hover:cursor-pointer text-gray-600 md:text-yellow-600 md:hover:text-yellow-600 hover:text-gray-600 hover:font-bold hover:transition hover:duration-1000 hover:ease-in-out">
                          ACADEMICS <ArrowDown />
                          </li>
                          <Dropdown style="lg:top-28 xl:top-14" setlist={setDropAcc} droplist={dropAcc} dropdownArry={subnavListAcc} />
                        </div>
                        
                        <Link href={"/about-us"}> 
                          <li className="py-4 lg:py-0 md:px-5 text-gray-600 md:text-yellow-600 md:hover:text-yellow-600 hover:text-gray-600 hover:font-bold hover:transition hover:duration-1000 hover:ease-in-out">ABOUT</li>
                        </Link>
                        <Link href={"/contact"}>
                          <li className="py-4 lg:py-0 md:px-5 text-gray-600 md:text-yellow-600 md:hover:text-yellow-600 hover:text-gray-600 hover:font-bold hover:transition hover:duration-1000 hover:ease-in-out">CONTACT</li>
                        </Link>

                        {/* <li className="py-4 lg:py-0 sm:flex sm:gap-2 md:px-5">
                          <div>
                        <Button click={{fxn:setLogin,param: !login}}  name="Login" type={`submit`} buttonStyle=" border border-gray-600 md:border-yellow-600 text-gray-600 md:text-yellow-600 gap-0" dropdown={true} />
                            <Dropdown style="lg:top-28 xl:top-14" setlist={setLogin} droplist={login} dropdownArry={categoryLogin} />
                          </div>
                          <div className="my-3 sm:my-0">
                          <Button click={{fxn:setSignup,param: !signup}} name="Signup" type={`submit`} buttonStyle=" border border-gray-600 md:border-yellow-600 text-gray-600 md:text-yellow-600 gap-0" dropdown={true} />
                          <Dropdown style="lg:top-28 xl:top-14" setlist={setSignup} droplist={signup} dropdownArry={categorySignup} />
                          </div>
                        </li> */}
                  </ul>
                </div>
                
            </div>
               </div>
            </nav>
        </div>
      )
}

export default Header