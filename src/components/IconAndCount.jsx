import {useState} from 'react'

import icon_like from '../assets/img/heart.png';
import icon_like_hover from '../assets/img/heart_hover.png';
import icon_dislike from '../assets/img/sad.png'
import icon_dislike_hover from '../assets/img/angry.png'
import icon_comment from '../assets/img/comment.png';

import { patchArticleVotes } from '../utils/api';

export default function IconAndCount(props){
    const {type, count, active, parentType, parentId} = props 

    const [optimisticCount, setOptimisticCount] = useState(count)
    const [error, setError] = useState(false);

    const altText_like = "red heart icon"
    const altText_like_hover = "growing heart icon"
    const altText_dislike = "sad face icon"
    const altText_dislike_hover = "angry face icon"

    let icon = icon_like;
    let icon_hover = icon_like_hover;
    let altText  = altText_like;
    let altText_hover = altText_like_hover;

    if (type === "likes") {
        icon = count>=0 ? icon_like : icon_dislike;
        altText = count >= 0 ? altText_like : altText_dislike
        icon_hover = count>=0 ? icon_like_hover : icon_dislike_hover;
        altText_hover = count >= 0 ? altText_like_hover : altText_dislike_hover
    }

    if (type === "comments") {
        icon = icon_comment
        altText = "icon of a pencil and paper"
    }

    function handleLike(vote_count) {
        if (parentType === "article"){
            setOptimisticCount(optimisticCount + vote_count );
            setError(null);
            patchArticleVotes(vote_count, parentId) 
            .catch((error)=>{
                setOptimisticCount(optimisticCount + vote_count );
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
                            <div className='icon-left'>
                                <img className = "icon align-self-center" src= {icon_like} alt = {altText_like} onClick = {() => handleLike(1)}/>
                                <img className = "icon-hover align-self-center" src= {icon_like_hover} alt = {altText_like_hover} onClick = {() => handleLike(1)}/>
                            </div>
                            
                                <p className="lead mb-0 align-self-center" >{optimisticCount}</p>
                            <div className='icon-right'>
                                <img className = "icon align-self-center" src= {icon_dislike} alt = {altText_dislike} onClick = {() => handleLike(-1)}/>
                                <img className = "icon-hover align-self-center" src= {icon_dislike_hover} alt = {altText_dislike_hover} onClick = {() => handleLike(-1)}/>
                            </div>
                        </div>
                        {/* Not going to render the exact error message, it will distort the CSS*/}
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