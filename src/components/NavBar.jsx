import TitleBar from "./TitleBar";
import NavCard from "./NavCard";



export default function NavBar(props){
    const {navToggle} = props;

    return (
        <header className="nav-bar d-flex align-items-center  justify-content-around justify-content-lg-between mt-5 mx-5 pb-2" >
            <NavCard contentType = "nav-button" helperFunction = {navToggle}/>
            <TitleBar />
            <NavCard contentType = "avatar" />            
         </header>
    )
}

