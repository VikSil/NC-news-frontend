import { Link } from "react-router-dom"

export default function TitleBar(){
    return (
        <>
            <Link to="/" className="undecorated-link">
                <h1 className=" display-4 text-center">HOME TO ALL THE BUZZ</h1>
            </Link>
        </>
    )
}

{/* <div className="header d-flex m-4"> 
<Link to="/" className="align-self-center ps-5" id ="home-link" >Home</Link>
<h1 className="flex-fill text-primary">Northcoders Marketplace</h1>
</div> */}