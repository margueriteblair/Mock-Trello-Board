import React, { useContext, useState } from 'react'
import { ListContext } from '../Contexts/ListContext'
import ListItem from './ListItem'
// import Cards from './Cards'

export default function Body() {
    const {list, setList} = useContext(ListContext);
    const [input, setInput] = useState()

    const addCard = () => {
        let newCard = document.createElement('div');
        newCard.innerHTML += `<div className="form">`
        newCard.innerHTML += `<input placeholder="Add Task"/>`
        newCard.innerHTML += `<button>Add!</button>`
    document.getElementById('cards').appendChild(newCard);
    }
    return (
        <div id="cards">
            <h1 style={{backgroundColor: "lightgreen"}}>List of Todos:</h1>
            {
                list.map((value, index) => {
                    return (
                        <ListItem checked={value.checked} data={value.checked}
                        id={index}
                        key={index}
                        ></ListItem>
                    )
                })
            }
        {/* <Cards> */}
        <div className="form">
            {/* <label>Add list item: </label> */}
            <input onChange={(e) => {
                setInput(e.target.value)
            }} value={input} placeholder="Add Task"/>
            
            <button onClick={() => {
                const newList = [...list];
                newList.push({data: input, checked: false})
                console.log('List', typeof(newList[0].data), newList)
               
                setList(newList)
                setInput('');
            }}> Add!</button>
        </div>
        <button style={{marginTop: 20, marginBottom: 20}}
        onClick={addCard}
        >Create New Work Flow?</button>
        </div>
    )
}
