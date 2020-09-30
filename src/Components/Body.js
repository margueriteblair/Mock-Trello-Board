import React from 'react'
import ListItem from './ListItem';
import { ListContext } from '../Contexts/ListContext'

export default function Body() {
    return (
        <div>
            <h1>List of Todos:</h1>
            {
                list.map((value, index) => {
                    return (
                        <ListItem checked={value.checked} data={value.checked} id={index} key={index}></ListItem>
                    )
                })
            }

            <div className="form">
                <label>Add task:</label>
                <input
                onChange={(e) => {
                    setInput(e.target.value)
                }} value={input}
                ></input>
                <button onClick={() => {
                    const newList = [...list]
                    newList.push({data: input, checked: false})
                    console.log(newList)
                    setList(newList)
                    setInput('')
                }}
                >Add task</button>
            </div>
        </div>
    )
}
