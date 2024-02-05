import default_icon from '../assets/img/default_icon.png';
import heart_icon from '../assets/img/heart.png';
import comment_icon from '../assets/img/comment.png';

export default function IconAndCount(props){
    const {type, count} = props 

    let icon = default_icon
    let altText = "icon in a shape of a red X"

    if (type === "likes") {
        icon = heart_icon
        altText = "heart-shaped icon"
    }
    if (type === "comments") {
        icon = comment_icon
        altText = "icon of a pencil and paper"
    }

    return (
        <div className='d-inline-flex ms-3 p-1'>
            <img className = "icon align-self-center" src= {icon} alt = {altText}/>
            <p className="lead mb-0 align-self-center" >{count}</p>
        </div>
    )
}