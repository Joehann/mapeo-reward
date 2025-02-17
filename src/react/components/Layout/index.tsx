import {MapeoNavbar} from "../Navbar";
import {Outlet} from "react-router-dom";

export const Layout = () => {
    return (
        <>
            <MapeoNavbar/>
            <div className={"py-5"}>
                <Outlet/>
            </div>
        </>
    )
}