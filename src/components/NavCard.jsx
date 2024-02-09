import { useContext } from 'react';
import {TbCategory2} from 'react-icons/tb';
import { UserContext } from '../contexts/UserContext';


export default function NavCard(props){
    const { user } = useContext(UserContext);
    const {contentType, helperFunction} = props;

    const content = contentType ==="avatar"?
                    <>
                        <img className = "avatar-img flex-shrink-0" src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Happy_smiley_face.png"></img>
                        <p className="mb-0 mx-2">{user}</p>
                    </>
                    :
                    <>

                         <TbCategory2 / >
                    </>


    return (

        <aside className="avatar d-flex flex-column align-items-center justify-content-center native-border mx-4 py-2" onClick = {helperFunction} >
            {content}
        </aside>

    )
}