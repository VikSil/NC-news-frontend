import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import {useState} from 'react'

import ArticleCard from "./ArticleCard"



export default function Paginator(props){
    const {items, itemType} = props


    // everything that Paginator needs
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const lastItem = currentPage * itemsPerPage;
    const firstItem = lastItem - itemsPerPage;
    const currentItems = items.slice(firstItem, lastItem);
    const numberOfPages = Math.ceil(items.length/itemsPerPage)

    const handlePagination = (event, page)=>{
        setCurrentPage(page);
    }

    return (
        <main className="d-flex justify-content-center flex-wrap mx-5 mt-4">
            {itemType ==="articles" ?
                currentItems.map((item, index)=> {
                    return (
                       <ArticleCard key = {index} article = {item}/>
                   )
               }
               ):
                null
        }
        
            <Pagination className = "my-4" count={numberOfPages} variant="outlined" shape="rounded" onChange={handlePagination}/>
        </main>
    )
}