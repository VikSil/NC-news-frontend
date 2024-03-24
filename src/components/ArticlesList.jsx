import {useParams} from 'react-router-dom';
import {useEffect, useState } from 'react'

import { getArticles } from '../utils/api';

import  Loading from './Loading'
import  Error from './Error'
import  Paginator from './Paginator'

export default function ArticlesList(){

    const {category} = useParams();

    const [articles, setArticles] = useState([{}]);
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null);

    const loadArticles = (fetchedArticles) => {
        if (category){
            let filteredArticles = [...fetchedArticles];
            filteredArticles = filteredArticles.filter(article => article.topic === category);
            setArticles(filteredArticles);
        }
        else {
            setArticles(fetchedArticles);
        }
    }

    useEffect(()=>{
        getArticles()
        .then((data) => {
            loadArticles(data.articles);
        })
        .catch((error)=>{
            setError(error);
        })
        .finally(()=>{
            setIsLoading(false);
        })
        
    }, [category])

    let content = (
        <section className="mx-5 mt-4">
            {category?
            <p>Latest articles about {category}</p>
            :<p>Latest articles about Everything</p>}
            <Paginator items = {articles} itemType ="articles"/>
        </section>
    )

    if(isLoading) { content =  <Loading /> }      
  
    if (error !== null) { content = <Error errorCode = {error.response.status} />  }

    return (
        <>
            {content}
        </>
    )
}