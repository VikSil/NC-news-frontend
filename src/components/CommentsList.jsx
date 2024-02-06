import {useEffect, useState } from 'react'

import { getComments } from '../utils/api';

import  Loading from './Loading'
import  Error from './Error'
import  Paginator from './Paginator'

export default function CommentsList(props){
    const {article_id} =props

    const [comments, setComments] = useState([{}]);
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null);

    useEffect(()=>{
        getComments(article_id)
        .then((data) => {
            setComments(data.comments);
        })
        .catch((error)=>{
            setError(error);
        })
        .finally(()=>{
            setIsLoading(false);
        })
        
    }, [])

    let content = (<Paginator items = {comments} itemType ="comments"/>)

    if(isLoading) { content =  <Loading /> }      
  
    if (error !== null) { content = <Error error = {error} /> }

    return (
        <>
            {content}
        </>
    )
}