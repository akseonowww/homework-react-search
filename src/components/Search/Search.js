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
            console.log(value)
        },
        []
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
