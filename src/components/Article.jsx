import {useParams} from 'react-router-dom';
import {useEffect, useState} from "react";

import { getArticles } from '../utils/api';

import Post from './Post';
import Loading from './Loading'
import Error from './Error'

export default function Article(){
    const {article_id}  = useParams(); 

    const[currentArticle, setCurrentArticle] = useState({});

    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null);
    
    useEffect(()=>{
        getArticles(article_id)
        .then((data) => {
           setCurrentArticle(data.article);
        })
        .catch((error)=>{
            setError(error);
        })
        .finally(()=>{
            setIsLoading(false);
        })
        
    }, [])

    let content = (
        <main className="d-flex justify-content-center mx-5 mt-4">    
            <Post post = {currentArticle} postType = "article"/>
        </main> 
    )
  
    if(isLoading) { content =  <Loading /> }      
  
    if (error !== null) { content = <Error error = {error} /> }
  
    return (
      <>
        {content}       
      </>
    )

}