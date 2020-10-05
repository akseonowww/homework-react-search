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
        // console.log(data.subject)

        return data.subject
      }

      let data = fetchData()
      let { name, title } = data
      // alert(name + ' ' + title)
      console.log(name + ' ' + title)
      console.log(data)

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
