import {TbCategory2} from 'react-icons/tb';
import { Link } from "react-router-dom"

export default function NavCard(props){

    const {contentType, helperFunction, linkTo, user} = props;

    const content = contentType ==="avatar"?
                    <>
                       <Link to={linkTo} className="undecorated-link">
                            <img className = "avatar-img flex-shrink-0" src={user.avatar_url}></img>
                            <p className="mb-0 mx-2">{user.username}</p>
                        </Link>
                    </>
                    :
                    <>
                         <TbCategory2 / >
                    </>

    return (
        <aside className="avatar d-flex flex-column align-items-center justify-content-center native-border mx-4 my-1 py-2" onClick = {helperFunction} >
            {content}
        </aside>
    )
}