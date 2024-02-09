import TitleBar from "./TitleBar";
import NavCard from "./NavCard";



export default function NavBar(props){
    const {navToggle} = props;

    return (
        <header className="nav-bar d-flex flex-row-reverse align-items-center  justify-content-around justify-content-lg-between mt-5 mx-5 pb-2" >
            <NavCard contentType = "avatar" />
            <TitleBar />
            <NavCard contentType = "nav-button" helperFunction = {navToggle}/>
         </header>
    )
}

