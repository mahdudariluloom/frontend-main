import Header from "./Header";
import Footer from "./Footer"

function BodyLayout({children,navNeeded}:{children:any, navNeeded:boolean}) {
    return (
        <main>
            { navNeeded ? <Header /> : ""}
                 <div className="px-1 lg:px-20"> {children} </div>
            { navNeeded ? <Footer /> : ""}
        </main>
    )
}

export default BodyLayout;