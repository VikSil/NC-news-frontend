import {useEffect, useState } from 'react'

import { getComments } from '../utils/api';

import  Loading from './Loading'
import  Error from './Error'
import  Paginator from './Paginator'

export default function CommentsList(props){
    const {article_id, comments, setComments} =props


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

    let content = (
        <>
          
            <div className="accordion d-md-none mx-4 mt-4" id="comment-accordion">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Comments
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#comment-accordion">
                    <div className="accordion-body">
                        <Paginator items = {comments} itemType ="comments"/>
                    </div>
                    </div>
                </div>
            </div>

            <section className="native-border d-none d-md-inline mx-4 mt-4">
                <Paginator items = {comments} itemType ="comments"/>
            </section>
        </>
    )

    if(isLoading) { content =  <Loading /> }      
  
    if (error !== null) { content = <Error error = {error} /> }

    return (
        <>
            {content}
        </>
    )
}