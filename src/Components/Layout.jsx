import Footer from "./Footer"
import Header from "./Header"

export const Layout = ({children}) => {
    return (
        <div>
             <Header/>
             <div>{children}</div>
             <Footer/>
        </div>
    )
}