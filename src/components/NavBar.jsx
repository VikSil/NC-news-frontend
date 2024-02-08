import TitleBar from "./TitleBar";
import Avatar from "./Avatar";
import { Link } from "react-router-dom"

export default function NavBar(){
    return (
        <header className="nav-bar d-flex flex-row-reverse flex-align-end align-items-center justify-content-between mt-5 mx-5 mb-3 pb-2" >
        <Avatar />
        <TitleBar />
        
        </header>
    )
}

