import React, { useContext } from 'react'
import { ListContext } from '../Contexts/ListContext'

export default function ListItem(props) {

    const {list, setList} = useContext(ListContext);

    const checkItem = () => {
        const newList = [...list];
        list[props.id].checked = !list[props.id].checked;
        setList(newList)
    }

    const removeItem = () => {
        const newList = [...list];
        newList.splice(props.id, 1);
        setList(newList)
    }

    return (
        <div>
            
        </div>
    )
}
