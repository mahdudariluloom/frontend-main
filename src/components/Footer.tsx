import Link from "next/link";
import Image from "next/image";

function Footer(){ 
    const list = [
        {header: "Quick Links", program:[
            {li:'Home', link:'/'},
            {li:'Admission', link:'admission'},
            {li:'Academics', link:'academics'},
            {li:'Admin', link:'login?role=admin'},
          ]},
        {header: "Programs", program:[
          {li: 'Modrasah',link:'about?role=modrasah'},
          {li: 'Schools',link:'about?role=schools'},  
          {li: 'Tahfeez',link:'about?role=tahfeez'},  
        ]},
        {header: "Company", program:[
          {li:'About', link:'about'},
          {li:'News', link:'news'},
          {li:'Contact Us', link:'contact-us'},
        ]},
      
      ]
    return (
        <>
            <footer>
    <div className="py-5">
        <div className="lg:flex lg:justify-around">
            <div className= "hidden lg:block">
                    <div className="">
                       <h1 className="text-3xl font-bold"> MDU</h1>
                        {/* <Image alt="" src={""} width={20} height={20} /> */}
                    </div>
            </div>
            <div className="w-full sm:w-9/12 mx-auto lg:mx-0">
                <div>
                    <div className="sm:flex justify-around">
                        {
                            list.map((e:any,i:number)=>(
                                <ul key={i} className="text-center sm:text-left mt-5 sm:mt-0">
                                <h5 className="my-3 font-bold">{e.header}</h5>
                                <div>
                                    {
                                         e.program.map((e:any,i:number)=>(
                                            <div className="my-3" key={i}>
                                            <Link href={e.link}><li>{e.li}</li></Link>
                                            </div>
                                            )
                                         )
                                    }
                                    
                                </div>
                            </ul>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="">
        <div className="text-center my-5">
            <span className="">
                &copy; {
                 new Date().getFullYear()
                } Mahad Daril-Uloom. All Right Reserved
            </span>
        </div>
    </div>
</footer>
        </>
    )
}

export default Footer