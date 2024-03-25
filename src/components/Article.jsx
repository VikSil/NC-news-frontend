import {useParams} from 'react-router-dom';
import {useEffect, useState, useContext} from "react";

import { getArticles } from '../utils/api';
import { UserContext } from '../contexts/UserContext';

import Post from './Post';
import CommentsList from './CommentsList';
import CommentForm from './CommentForm'
import Loading from './Loading'
import Error from './Error'

export default function Article(){
    const {article_id}  = useParams();

    const { user } = useContext(UserContext);

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
        <main className="d-flex flex-column justify-content-center mx-5 mt-4">    
            <Post post = {currentArticle} postType = "article"/>
            {currentArticle.author!==user && <CommentForm setComments= {setComments} article_id={article_id}/>}
            <CommentsList article_id= {article_id} />
        </main> 
    )
  
    if(isLoading) { content =  <Loading /> }      
  
    if (error !== null) { content = <Error errorCode = {error.response.status} /> }
  
    return (
      <>
        {content}       
      </>
    )
}