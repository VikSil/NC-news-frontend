import { useState, useContext } from 'react';
import { deleteComment } from '../utils/api';
import { UserContext } from '../contexts/UserContext';

import IconAndCount from "./IconAndCount"

export default function Post(props){
    const {post, postType, refreshComments} = props
    const { user } = useContext(UserContext);
    
    const [deletePending, setDeletePending] = useState(false)
    const [error, setError] = useState(null);
    
    const created = post.created_at.slice(0,10) + " " + post.created_at.slice(11,16)

    const differentUser = !(post.author === user)

    const rootClassName = `${postType} flex-fill native-border my-3 mx-4 py-3 px-4 `

    const removeComment = (event) => {
        event.preventDefault();

        setDeletePending(true);
        deleteComment(post.comment_id)

        .then((data)=>{
            setDeletePending(false);
            refreshComments(post.comment_id);

        })
        .catch((error)=>{
            setError(error);
        })
    }

    return (
            <article className={rootClassName} >
                {error && <p className = "w-100 mt-3 ">An error occured: {error}</p>}

                <section className="d-flex flex-wrap justify-content-between">
                    <p className="author text-start">{post.author}</p>
                    {postType=== "article"?
                        <IconAndCount type = "likes" count = {post.votes} active = {differentUser} parentType = {postType} parentId = {post.article_id}/>
                    : <IconAndCount type = "likes" count = {post.votes} /> 
                    }
                </section>

                {postType=== "article"?
                        <h2 className="text-center mb-md-4 mx-auto">{post.title}</h2>
                :   <></>}

                {postType=== "article"?
                    <section className="d-flex flex-row flex-xxl-column">
                        <img id = "article-img" className = "rounded me-4 mb-3 mx-xxl-auto" src= {post.article_img_url} alt = "" />
                        <p className="article text-start">{post.body}</p>
                    </section>   
                :   <p>{post.body}</p>
                }
                
                {postType ==="comment" && !differentUser?
                    <button className="delete-comment-btn native-button native-border float-start me-2 mb-2" disabled = {deletePending} onClick = {removeComment}>Delete Comment</button>
                    
                    :
                    null    
                }
                <p className="timestamp mb-0 align-self-end text-end">{created}</p>
            </article > 
    )
}