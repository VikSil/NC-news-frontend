import { Link } from "react-router-dom"

export default function TitleBar(){
    return (
        <section className="align-self-center align-content-stretch">

            <Link to="/" className="undecorated-link">
                <h1 className=" display-4 text-center mb-0">HOME TO ALL THE BUZZ</h1>
            </Link>
        </section>
    )
}