import './App.css'

import axios from "axios";

import {useEffect, useState } from 'react'
import {Routes, Route} from 'react-router-dom';

import  NavBar from './components/NavBar'
import  Paginator from './components/Paginator'
import  Loading from './components/Loading'
import  Error from './components/Error'

import { getAllArticles } from './utils/api';

function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [articles, setArticles] = useState([{}]);

  useEffect(()=>{
    getAllArticles()
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
    <Routes>
      <Route path="/" element={<Paginator items = {articles} itemType ="articles"/>} />
    </Routes>
  )

  if(isLoading) { content =  <Loading /> }
    

  if (error !== null) { content = <Error error = {error} /> }

  return (
    <>
      <NavBar/>
      {content}
     
    </>
  )
}

export default App
