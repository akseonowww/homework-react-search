import React, { useState, useCallback } from 'react'
import classes from './Search.module.css'

const Search = () => {
    const [value, setValue] = useState('')
    console.log('render')
    console.log(value)

    const onInput = useCallback(
        (e) => {
            setValue(e.target.value);
        },
        []
    )

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
