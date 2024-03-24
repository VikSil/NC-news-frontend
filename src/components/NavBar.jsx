import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

import TitleBar from "./TitleBar";
import NavCard from "./NavCard";

export default function NavBar(props){
    const {navToggle} = props;
    const  {user}  = useContext(UserContext);

    return (
        <header className="nav-bar d-flex align-items-center  justify-content-around justify-content-lg-between mt-5 mx-5 pb-2" >
            <NavCard contentType = "nav-button" helperFunction = {navToggle} />
            <TitleBar />
            <NavCard contentType = "avatar" linkTo = "/users" user = {user}/>            
         </header>
    )
}

