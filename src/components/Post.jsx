import IconAndCount from "./IconAndCount"

export default function Post(props){
    const {post, postType} = props
    
    const created = post.created_at.slice(0,10) + " " + post.created_at.slice(11,16)
 
    return (
        <article className="w-100 native-border my-3 mx-4 py-3 px-4 ">

            <p className="author text-end">{post.author}</p>
            
            {postType=== "article"?
                <section className="d-flex flex-column flex-md-row justify-content-end">
                    <h2 className="text-center mb-md-4 mx-auto">{post.title}</h2>
                    <IconAndCount type = "likes" count = {post.votes}/>
                </section> 
            : <IconAndCount type = "likes" count = {post.votes}/> }

            {postType=== "article"?
                <section className="d-flex flex-row flex-xxl-column">
                    <img id = "article-img" className = "rounded me-4 mb-3 mx-xxl-auto" src= {post.article_img_url} alt = "" />
                    <p className="text-start">{post.body}</p>
                </section>   
            : <p>{post.body}</p>
            }

            <p className="timestamp mb-0 align-self-end flex-fill text-start">{created}</p>

        </article >        
    )
}