import IconAndCount from "./IconAndCount"

export default function ArticleCard(props){
    const {article} = props
    const created = article.created_at.slice(0,10) + " " + article.created_at.slice(11,16)

    return (
        <div className="d-flex flex-column w-100 native-border my-3 mx-4 py-3 px-4 ">
            <p className="text-end author">{article.author}</p>
            <h3 className="text-center mb-4">{article.title}</h3>
            <div className="d-flex flex-row flex-wrap">
                <p className="mb-0 me-auto align-self-end">{created}</p>
                <div>
                    <IconAndCount type = "likes" count = {article.votes}/>
                    <IconAndCount type = "comments" count = {article.comment_count}/>
                </div>
            </div>
        </div>
        
        
    )
}