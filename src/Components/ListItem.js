import React, { useContext } from 'react'
import { ListContext } from '../Contexts/ListContext'

export default function ListItem(props) {

    const {list, setList} = useContext(ListContext);

    const checkItem = () => {
        const newList = [...list];
        list[props.id].checked = !list[props.id].checked;
        setList(newList)
    }

    return (
        <div>
            
        </div>
    )
}
