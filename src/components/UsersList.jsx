
import {useEffect, useState } from 'react'
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

import { getUsers } from '../utils/api';

import NavCard from "./NavCard";
import Loading from './Loading'
import Error from './Error'

export default function UsersList(){
    const {user, setUser} = useContext(UserContext)

    const [allUsers, setAllUsers] = useState([{}])

    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null);

    useEffect(()=>{
        getUsers()
        .then((data) => {
            setAllUsers(data.users);
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
            <h2 className="text-center mb-md-4 mx-auto">Choose User</h2>
            <section className="d-flex flex-row justify-content-center flex-wrap">
    {
        allUsers.map((user, index)=> {
                    const helperFunction = () =>{
                        setUser(user)
                    }
                    return (                        
                        <NavCard contentType = "avatar" helperFunction = {helperFunction} linkTo={"/"} user = {user}/> 
                   )
               })
            }
            </section>    
        </section>
    
    )

    if(isLoading) { content =  <Loading /> }      
  
    if (error !== null) { content = <Error errorCode = {error.response.status} /> }
  
    return (
      <>
        {content}       
      </>
    )
}