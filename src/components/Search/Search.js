import React, { useState, useCallback } from 'react'

const Search = () => {
    const [value, setValue] = useState('')

    const handleChange = useCallback(
        (e) => {
            setValue(e.target.value);
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
        </div>
    )
}

export default Search
