import './App.css'

import {useState } from 'react'
import {Routes, Route} from 'react-router-dom';

import NavBar from './components/NavBar'
import Article from './components/Article';
import ArticlesList from './components/ArticlesList';
import UsersList from './components/UsersList';
import OffCanvas from './components/OffCanvas';
import Error from './components/Error';


function App() {
 
  const [showNav, setShowNav] = useState(false);

  const navToggle = () =>{
    setShowNav(!showNav)
  }

  return (
    <>
      <NavBar navToggle = {navToggle}/>
      <OffCanvas visible = {showNav} navToggle = {navToggle}/>
      <Routes>
        <Route path="/" element={<ArticlesList />}/>
        <Route path="/article/:article_id" element={<Article />} />
        <Route path="/articles/:category" element={<ArticlesList/>} />
        <Route path="/users" element={<UsersList/>} />
        <Route path="*" element={<Error errorCode={404}/>} />
      </Routes>
     
    </>
  )
}

export default App
