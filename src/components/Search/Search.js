import React, { useState } from 'react'
import classes from './Search.module.css'

const Search = () => {
    const [value, setValue] = useState('')

    const onInput = (e) => {
        setValue(e.target.value)
        console.log(e)
    }

    return (
        <div>
            <input
                className={classes.input}
                type="text"
                placeholder="Searching..."
                value={value}
                onChange={onInput}
            />
        </div>
    )
}

export default Search
