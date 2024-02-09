import './App.css'

import {useState } from 'react'
import {Routes, Route} from 'react-router-dom';

import NavBar from './components/NavBar'
import Article from './components/Article';
import ArticlesList from './components/ArticlesList';
import OffCanvas from './components/OffCanvas';


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
      </Routes>
     
    </>
  )
}

export default App
