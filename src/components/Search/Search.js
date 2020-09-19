import React, { useState, useCallback } from 'react'

const Search = () => {
    const [value, setValue] = useState('')
    let url = `https://sdamgia-homework-backend.herokuapp.com/api/search?query=${value}`

    const handleChange = useCallback(
        (e) => {
            setValue(e.target.value);
        },
        []
    )
    
    const handleClick = useCallback(
        () => {
            let promise = fetch(url)
            promise.then(promise => promise.json())
            promise.then(commits => console.log(commits.subject));
            console.log(value)
            // console.log(promise)
        },
        [value, url]
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
