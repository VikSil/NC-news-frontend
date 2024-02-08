import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

import IconAndCount from "./IconAndCount"

export default function Post(props){
    const {post, postType} = props
    const { user } = useContext(UserContext);
    
    const created = post.created_at.slice(0,10) + " " + post.created_at.slice(11,16)

    const active = !(post.author === user)

    const className = `${postType} flex-fill native-border my-3 mx-4 py-3 px-4 `
 
    return (
        <article className={className} >

            {postType=== "article"?
                <p className="author text-end">{post.author}</p>
            :   <p className="author text-start">{post.author}</p>
            }

            {postType=== "article"?
                <section className="d-flex flex-column flex-md-row justify-content-end">
                    <h2 className="text-center mb-md-4 mx-auto">{post.title}</h2>
                    <IconAndCount type = "likes" count = {post.votes} active = {active} parentType = {postType} parentId = {post.article_id}/>
                </section> 
            :   <section className="d-flex justify-content-end">
                   <IconAndCount type = "likes" count = {post.votes} /> 
                </section>}

            {postType=== "article"?
                <section className="d-flex flex-row flex-xxl-column">
                    <img id = "article-img" className = "rounded me-4 mb-3 mx-xxl-auto" src= {post.article_img_url} alt = "" />
                    <p className="text-start">{post.body}</p>
                </section>   
            :   <p>{post.body}</p>
            }

            <p className="timestamp mb-0 align-self-end flex-fill text-start">{created}</p>

        </article >        
    )
}