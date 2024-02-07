import {useEffect, useState } from 'react'

import { getArticles } from '../utils/api';

import  Loading from './Loading'
import  Error from './Error'
import  Paginator from './Paginator'

export default function ArticlesList(){

    const [articles, setArticles] = useState([{}]);
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null);

    useEffect(()=>{
        getArticles()
        .then((data) => {
            setArticles(data.articles);
        })
        .catch((error)=>{
            setError(error);
        })
        .finally(()=>{
            setIsLoading(false);
        })
        
    }, [])

    let content = (
        <section className="mx-5 mt-4">
            <Paginator items = {articles} itemType ="articles"/>
        </section>
    )

    if(isLoading) { content =  <Loading /> }      
  
    if (error !== null) { content = <Error error = {error} /> }

    return (
        <>
            {content}
        </>
    )
}