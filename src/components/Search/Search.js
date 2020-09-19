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
            let url = `https://sdamgia-homework-backend.herokuapp.com/api/search?query=${value}`

            fetch(url)
                .then(response => response.json())
                .then(data => console.log(data.subject));
            console.log(value)
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
