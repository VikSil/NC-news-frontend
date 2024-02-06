import './App.css'

import {Routes, Route} from 'react-router-dom';

import NavBar from './components/NavBar'
import Article from './components/Article';
import ArticlesList from './components/ArticlesList';

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ArticlesList />}/>
        <Route path="/articles/:article_id" element={<Article />} />
      </Routes>
     
    </>
  )
}

export default App
