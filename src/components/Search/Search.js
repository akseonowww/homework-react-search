import React, { useState, useCallback } from 'react'

const Search = () => {
  const [value, setValue] = useState('')

  const handleChange = useCallback(
    (e) => {
      setValue(e.target.value);
    },
    []
  )

  const handleClick = useCallback(
    () => {
      async function fetchData() {
        let url = `https://sdamgia-homework-backend.herokuapp.com/api/search?query=${value}`
        let response = await fetch(url)
        let data = await response.json()
      }
      fetchData()
    },
    [value]
  )

  return (
    <div>
      <input
        type="text"
        placeholder="Searching..."
        value={value}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Поиск</button>
    </div>
  )
}

export default Search
