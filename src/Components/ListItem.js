import React, { useContext } from 'react'
import { ListContext } from '../Contexts/ListContext'
import Cards from './Cards'

export default function ListItem(props) {

    const {list, setList} = useContext(ListContext);

    const checkItem = () => {
        const newList = [...list];
        list[props.id].checked = !list[props.id].checked;
        setList(newList)
        console.log(list[props.id].data)
    }

    const removeItem = () => {
        const newList = [...list];
        newList.splice(props.id, 1);
        setList(newList)
        console.log(newList);
    }

    return (
        <div id="tasks">
            <div>
                <p onClick={checkItem}>{list[props.id].data}</p>
                <button type="submit" onClick={removeItem} >Archive</button>

            </div>
        </div>
    )
}
