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
                
            </div>
        </div>
    )
}
