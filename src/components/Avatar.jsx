import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

export default function Avatar(){
    const { user } = useContext(UserContext);


    return (
        <aside className="avatar d-flex flex-column align-items-center native-border mx-4 py-2 float-end">
            <img className = "avatar-img flex-shrink-0" src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Happy_smiley_face.png"></img>
            <p className="mb-0 mx-2">{user}</p>
        </aside>
    )
}