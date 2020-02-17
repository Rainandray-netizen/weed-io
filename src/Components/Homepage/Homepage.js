import React,{ useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import SingleStrain from '../SingleStrain/SingleStrain'

function Homepage() {
  const [searchResults, handleSearchResults] = useState()

  console.log('homepage rerendered')
  searchResults && console.log(searchResults)

  const handleSearch = async (weed) => {
    const apiCallRaw = await fetch(`http://strainapi.evanbusse.com/QYMhHVO/strains/search/name/${weed}`)
    const apiCallJson = await apiCallRaw.json()
    handleSearchResults(apiCallJson)
  }

  return (
    <Router>
      <SearchBar handleSearch={handleSearch}/>
      <Switch>
        <Route exact path='/'>
          {searchResults && searchResults.map((strain)=>(
          <Link  key={strain.id} to={`/strain/${strain.id}/${strain.name}`}>
            <p>{strain.name} </p>
          </Link>
          ))}
        </Route>
        <Route path='/strain/:id/:name'>
          {/* todo:fix this */}
          <SingleStrain /> 
        </Route>
      </Switch>

    </Router>
  );
}

export default Homepage