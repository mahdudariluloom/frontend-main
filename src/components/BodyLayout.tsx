import Header from "./Header";
import Footer from "./Footer"

function BodyLayout({children,navHeaderNeeded, navFooterNeeded}:{children:any, navHeaderNeeded:boolean,navFooterNeeded:boolean}) {
    return (
        <main>
            { navHeaderNeeded ? <Header /> : ""}
                 <div className="px-1 max-w-full"> {children} </div>
            { navFooterNeeded ? <Footer /> : ""}
        </main>
    )
}

export default BodyLayout;