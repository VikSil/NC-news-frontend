import {useState, useContext} from "react";

import { postComment } from '../utils/api';
import { UserContext } from '../contexts/UserContext';

export default function CommentForm(props){
    const {article_id, setComments} = props;

    const { user } = useContext(UserContext);
    
    const [newCommentBody, setNewCommentBody] = useState('');
    const [commentPending, setCommentPending] = useState(false);
    const [error, setError] = useState(null);

    // used to generate a unique temporary id for an optimistically 
    // rendered comment that will be replaced with the actual id
    // once POST request responds  
    const generateId= (length) => {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
        return result;
    }

    const handleNewComment = (event) =>{

        event.preventDefault();

        if (newCommentBody.length===0){
            setError({"message":"Comment cannot be empty"})
        }
        else {
            // set everything locally
            const rightNow = new Date(Date.now())
            const randomId = generateId(12)
            const newComment = {
                comment_id: randomId,
                body: newCommentBody,
                article_id: 0,
                author: user.username,
                votes: 0,
                created_at: rightNow.toISOString()
            }
            setCommentPending(true)
            setComments((currentComments) =>{
                return [newComment, ...currentComments]
            });
            setNewCommentBody('');
            setError(null);

            // send API request and process response
            postComment(article_id, {username: user.username, body:newCommentBody})
            .then((data) => {
                setError(null);
                setComments((currentComments) =>{
                    const commentPosition = currentComments.findIndex(comment => comment.comment_id === randomId);
                    const refreshedComments = [...currentComments]
                    refreshedComments[commentPosition] = data.comment;
                    return refreshedComments
                });
            })
            .catch((error)=>{
                setError(error);
            })
            .finally(()=>{
                setCommentPending(false);
                setComments((currentComments)=> {return currentComments});
            })
        }    
    }

    return (
        <>  
            <section className="native-border mx-4">
                <form className = "my-3 mx-4" onSubmit = {handleNewComment}>
                    <label className = "float-start" htmlFor = "comment-box" >Comment:</label>
                    <textarea id = "comment-box" className="form-control" rows= "3" value={newCommentBody} onChange={(event) => setNewCommentBody(event.target.value)}></textarea>
                    {error && <p className = "float-start mt-3">An error occured: {error.message}</p>}
                    <button type = "submit" className="native-button native-border float-end my-3" disabled = {commentPending}>Add Comment</button>
                </form>
            </section>
        </>
    )
}