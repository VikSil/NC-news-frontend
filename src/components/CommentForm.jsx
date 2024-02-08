import {useState, useContext} from "react";

import { postComment } from '../utils/api';
import { UserContext } from '../contexts/UserContext';

export default function CommentForm(props){
    const {article_id, setComments} = props;

    const { user } = useContext(UserContext);
    
    const [newCommentBody, setNewCommentBody] = useState('');
    const [commentPending, setCommentPending] = useState(false);
    const [error, setError] = useState(null);

    const handleNewComment = (event) =>{

        event.preventDefault();

        // set everything locally
        const rightNow = new Date(Date.now())
        const newComment = {
            comment_id: 0,
            body: newCommentBody,
            article_id: 0,
            author: user,
            votes: 0,
            created_at: rightNow.toISOString()
        }
        setCommentPending(true)
        setComments((currentComments) =>{
            return [newComment, ...currentComments]
        });
        setNewCommentBody('');

        // send API request and process response
        postComment(article_id, {username: user, body:newCommentBody})
        .then((data) => {
            setError(null);
        })
        .catch((error)=>{
            setError(error);
        })
        .finally(()=>{
            setCommentPending(false);
            setComments((currentComments)=> {return currentComments});
        })
    }

    const buttonDisabled = (newCommentBody.length===0 || commentPending)

    return (
        <>  
            <section className="native-border mx-4">
                <form className = "my-3 mx-4" onSubmit = {handleNewComment}>
                    <label className = "float-start" htmlFor = "comment-box" >Comment:</label>
                    <textarea id = "comment-box" className="form-control" rows= "3" value={newCommentBody} onChange={(event) => setNewCommentBody(event.target.value)}></textarea>
                    {error && <p className = "float-start mt-3">An error occured: {error}</p>}
                    <button type = "submit" className="native-button native-border float-end my-3" disabled = {buttonDisabled}>Add Comment</button>
                
                </form>

            </section>
        </>
    )
}