import {useState} from 'react'

import default_icon from '../assets/img/default_icon.png';
import heart_icon from '../assets/img/heart.png';
import heart_hover_icon from '../assets/img/heart_hover.png';
import comment_icon from '../assets/img/comment.png';

import { patchArticleVotes } from '../utils/api';

export default function IconAndCount(props){
    const {type, count, active, parentType, parentId} = props 

    const [optimisticCount, setOptimisticCount] = useState(count)
    const [error, setError] = useState(false);

    let icon = default_icon
    let altText = "icon in a shape of a red X"
    let icon_hover = default_icon
    let altText_hover = altText

    if (type === "likes") {
        icon = heart_icon
        altText = "heart icon"
        icon_hover = heart_hover_icon 
        altText_hover = "growing heart icon"
    }
    if (type === "comments") {
        icon = comment_icon
        altText = "icon of a pencil and paper"
    }

    if (active){console.log("The like button is enabled")}

    function handleLike() {
        if (parentType === "article"){
            setOptimisticCount(optimisticCount +1 );
            setError(null);
            patchArticleVotes(parentId)
            .catch((err)=>{
                setOptimisticCount(optimisticCount +1 );
                setError(null);
            })
        }

    }

    return (
        <div className='icon-and-count ms-3 p-1'>
            {active?
                <>
                    <div className='d-flex flex-column'>
                        <div className='d-inline-flex'>
                            <img className = "icon-active align-self-center" src= {icon} alt = {altText}/>
                            <img className = "icon-hover align-self-center" src= {icon_hover} alt = {altText_hover} onClick = {handleLike}/>
                            <p className="lead mb-0 align-self-center" >{optimisticCount}</p>
                        </div>
                        {error? <p className='text-danger'>Error occured</p>: null}
                    </div>
                </>
            :
                <>
                    <div className='d-inline-flex'>
                        <img className = "icon align-self-center" src= {icon} alt = {altText}/>
                        <p className="lead mb-0 align-self-center" >{count}</p>
                    </div>
                </>
            }

            
        </div>
    )
}