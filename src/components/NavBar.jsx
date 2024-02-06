import TitleBar from "./TitleBar";
import { Link } from "react-router-dom"

export default function NavBar(){
    return (
        <header className="nav-bar d-flex justify-content-center mt-5 mx-5 mb-3 pb-2" >
        <TitleBar />
        </header>
    )
}

