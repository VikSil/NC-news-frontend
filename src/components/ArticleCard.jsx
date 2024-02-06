import IconAndCount from "./IconAndCount"

export default function ArticleCard(props){
    const {article} = props
    const created = article.created_at.slice(0,10) + " " + article.created_at.slice(11,16)

    return (
        <div className="d-flex flex-column w-100 native-border my-3 mx-4 py-3 px-4 ">
            <p className="author text-end">{article.author}</p>
            <h3 className="text-center mb-4">{article.title}</h3>
            <div className="d-flex flex-row flex-wrap justify-content-between">
                <p className="timestamp mb-0 align-self-end flex-fill text-start">{created}</p>
                <div className = "icon-and-count-pair">
                    <IconAndCount type = "likes" count = {article.votes}/>
                    <IconAndCount type = "comments" count = {article.comment_count}/>
                </div>
            </div>
        </div>
        
        
    )
}