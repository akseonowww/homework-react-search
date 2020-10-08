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
        const url = `https://sdamgia-homework-backend.herokuapp.com/api/search?query=${value}`
        const response = await fetch(url)
        const data = await response.json()

        return data.subject
      }

      async function alertData() {
        const response = await fetchData()
        const { name, title } = response
        alert(name + ' - ' + title)
      }

      alertData()

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
