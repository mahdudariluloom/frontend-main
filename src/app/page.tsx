"use client"
import Avatar from "root/components/Avatar";
// import { Carousel } from "root/components/Utilities";
import BodyLayout from "../components/BodyLayout";
// import { slidesList } from "root/utils/others/carouselSlides.utils";

function Home(){  
  return (
    <main>
        <BodyLayout navHeaderNeeded={true} navFooterNeeded={true}>
          <div className="block border border-red-600">
            <Avatar 
            style={`mx-auto`}
            alt="" 
            src="/img.jpg" 
            width={365}
            height={243}
            sizes="(min-width: 420px) 365px, calc(75vw + 65px)" />
          {/* <Carousel slides={slidesList}/> */}
          </div>
        </BodyLayout>
      
    </main>
  )
}

export default Home