import ArticleCard from "./ArticleCard"

export default function Paginator(props){
    const {items, itemType} = props
    return (
        <div className="d-flex justify-content-center flex-wrap mx-5 mt-4">
            {itemType ==="articles" ?
                items.map((item, index)=> {
                    return (
                       <ArticleCard key = {index} article = {item}/>
                   )
               }
               ):
                null
        }
            
            
        </div>
    )
}