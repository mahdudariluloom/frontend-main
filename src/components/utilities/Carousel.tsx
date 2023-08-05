"use client"
import { useState, useEffect } from "react"
import Image from "next/image";
// export function Carousel() {
export function Carousel({slides, autoslide=false, autoslideInterval=3000}:{slides:Array<string>,autoslide?:boolean,autoslideInterval?:number}) {

    const [curr, setCurr] = useState(0)

    const prev = () => setCurr(curr == 0 ? slides.length -1 : curr - 1)

    const next = () =>setCurr(curr == slides.length -1 ? 0 : curr + 1); 

    useEffect(()=>{
        if (!autoslide) return
        const slideInterval = setInterval(next,autoslideInterval)
        return ()=> clearInterval(slideInterval)
    })
    return (
       <div>
         <div className="overflow-hidden relative">
         <div 
           className="flex transition-transform ease-out duration-500 h-screen"
        //    style={{transform: `translateX(-${curr * 100}%)`}}
           >    
           <Image sizes="100vw" fill alt="image" src={`/carousel/${slides[curr]}.jpg`}/>
           </div>

           <div className="flex justify-between items-center px-4 absolute inset-0">
            <button 
            onClick={prev} 
            className="bg-transparent shadow-md rounded-full border">
            <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
            </svg>
            </button>
            <button 
            onClick={next}
            >
            <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
            </svg>
            </button>
            </div>
            <div className="absolute bottom-4 right-0 left-0">
                <div className="flex justify-center items-center gap-3">
                    {slides.map((_:any,i:number)=>(
                        <div key={i} className={`transition-all w-3 h-3 bg-red-700 rounded-full ${curr == i ? "p-2": " bg-opacity-50"}`}></div>
                    ))}
                </div>
            </div>
        </div>
       </div>
        
      )
}