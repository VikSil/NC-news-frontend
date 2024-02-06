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