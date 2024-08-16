import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = ({ children }) => {
    const { pathname } = useLocation();

    const [hide, setHide] = useState(false);

    useEffect(() => {
        setHide(
            pathname?.includes('/error')
            ||
            pathname?.includes('/login')
        )
    }, [pathname]);
    
    return (
        <main className="w-full">
            {!hide && <Sidebar/>}
            <div className={`w-full bg-slate-100 min-h-screen ${!hide?'ps-[330px] pt-[120px] pe-[50px] pb-[70px]': ''}`}>
                {children}
            </div>
            {!hide && <Header/>}
        </main>
    )
}

export default Layout