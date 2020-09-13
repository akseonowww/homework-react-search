import React from 'react'
import classes from './Search.module.css'

document.querySelector('#elastic').oninput = function () {
    let val = this.value.trim()
    let elasticItems = document.querySelectorAll('.elastic li')
    let elasticItemsText = document.querySelectorAll('.elastic .title')

    if (val != '') {
        elasticItems.forEach(function (elem) {

            if (elem.innerText.search(val) == -1) {
                elem.classList.add('hide')
                elem.classList.remove('result')
                elem.innerHTML = elem.innerText

            } else {
                elem.classList.remove('hide')
                elem.classList.add('result')
                let str = elem.innerText
                elem.innerHTML = inserMark(str, elem.innerText.search(val), val.length)
            }
        })
    } else {
        elasticItems.forEach(function (elem) {
            elem.classList.remove('result')
            elem.classList.remove('hide')
            elem.innerHTML = elem.innerText
        })
    }
}

function inserMark(string, pos, len) {
    return string.slice(0, pos) + '<mark>' + string.slice(pos, pos + len) + '</mark>' + string.slice(pos + len)
}

const Search = () => {
    return (
        <div>
            <div class={classes.main}>
                <h1>Search component</h1>
                <div class={classes.search}>
                    <input type="text" name="search" id="elastic" />
                </div>
                <div class={classes.data}>
                    <ul class={classes.elastic}>
                        <li>
                            <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
                                <div class={classes.logo}>
                                    <img src="./img/mini/youtube.svg" alt="YouTube" />
                                </div>
                                <div class={classes.text}>
                                    <strong class={classes.title}>YouTube</strong>
                                    <span class={classes.link}>youtube.com</span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="http://vk.com" target="_blank" rel="noopener noreferrer">
                                <div class={classes.logo}>
                                    <img src="./img/mini/vk.svg" alt="VK" />
                                </div>
                                <div class={classes.text}>
                                    <strong class={classes.title}>Вконтакте</strong>
                                    <span class={classes.link}>vk.com</span>
                                </div>
                            </a>
                        </li><li>
                            <a href="https://figma.com/" target="_blank" rel="noopener noreferrer">
                                <div class={classes.logo}>
                                    <img src="./img/mini/figma.svg" alt="Figma" />
                                </div>
                                <div class={classes.text}>
                                    <strong class={classes.title}>Figma</strong>
                                    <span class={classes.link}>figma.com</span>
                                </div>
                            </a>
                        </li><li>
                            <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">
                                <div class={classes.logo}>
                                    <img src="./img/mini/inst.svg" alt="Inst" />
                                </div>
                                <div class={classes.text}>
                                    <strong class={classes.title}>Instagram</strong>
                                    <span class={classes.link}>instagram.com</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Search
