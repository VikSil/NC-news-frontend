import { Link } from "react-router-dom"
import { useEffect, useState } from 'react'

import { getTopics } from '../utils/api';

import  Error from './Error'

export default function OffCanvas(props){
    const {visible, navToggle} = props

    const [error, setError] = useState(null);
    const [topics, setTopics] = useState([{}]);

    useEffect(()=>{
        getTopics()
        .then((data) => {
            setTopics(data.topics);
            
        })
        .catch((error)=>{
            setError(error);
        })
        .finally(()=>{
        })
        
    }, [])

    let content = (
        <ul className="list-group list-group-flush p-0">
            <li className = "list-group-item py-4" key = {0} >
                <Link to={`/`} className="undecorated-link" onClick = {navToggle}>
                            <p className="mb-0 display-6">All Categories</p>
                </Link>
            </li>
            {topics.map ((topic, index) =>{
                return <li className = "list-group-item py-4" key = {index}>
                        <Link to={`/articles/${topic.slug}`} className="undecorated-link" onClick = {navToggle}>
                            <p className="mb-0 display-6">{topic.slug}</p>
                        </Link>
            </li>
            })}
        </ul>

    )
   
    if (error !== null) { content = <Error errorCode = {error.response.status} /> }

    return (
        <nav className={visible? 'sidenav active px-4': 'sidenav'}>
            {content}
        </nav>
    )
}