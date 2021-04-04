import React,{useState,useEffect} from 'react'
import { Container} from 'react-bootstrap'
import List from './containers/List'
import SearchBar from './components/SearchBar'

const App = () => {
  const [searchQuery,setSearchQuery]=useState('joker');
  
  useEffect(()=>{
    
  },[]);

  const handleSearch = searchQuery =>{
    setSearchQuery(searchQuery);
  }
  return (
    <Container className="p-5">
      <h1 className="text-center p-3 mb-3">Buscador de películas</h1>
      <SearchBar handleSearch = {handleSearch}/>
      <List search={searchQuery}/>
    </Container >
  )
}

export default App
