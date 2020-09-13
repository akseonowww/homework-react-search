import React, { useState } from 'react'
import classes from './Search.module.css'

const Search = () => {
    const [value, setValue] = useState('')

    return (
        <div>
            <input
                className={classes.input}
                type="text"
                placeholder="Searching..."
                value={value}
                onChange={() => {
                    setValue(value)
                    console.log(value)
                }}
            />
        </div>
    )
}

export default Search
