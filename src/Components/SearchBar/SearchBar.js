import React,{ useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const SearchBar = (props) =>{

  const [searchText,handleSearchText] = useState('')
  const { handleSearch } = props

  const updateWeed =(event) => {
    handleSearchText(event.target.value)
  }

  return(
    <form>
      <TextField id="outlined-basic" label="Search for Strain" variant="outlined" onChange={updateWeed} />
      <Button type='button' onClick={() => handleSearch(searchText)}>Search</Button>
    </form>
  )
}

export default SearchBar