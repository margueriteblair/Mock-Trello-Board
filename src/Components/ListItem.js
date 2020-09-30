import React, { useContext } from 'react'
import { ListContext } from '../Contexts/ListContext'
import Cards from './Cards'

export default function ListItem(props) {

    const {list, setList} = useContext(ListContext);

    const checkItem = () => {
        const newList = [...list];
        list[props.id].checked = !list[props.id].checked;
        setList(newList)
        console.log(newList[0].data)
    }

    const removeItem = () => {
        const newList = [...list];
        newList.splice(props.id, 1);
        setList(newList)
        console.log(newList);
    }

    return (
        <Cards>
        <div>
            <div style={props.checked ? {backgroundColor: '#88f'} : {}}>
                <p onClick={checkItem}>{list[0].data}</p>
                <button onClick={removeItem}>Archive</button>

            </div>
        </div>
        </Cards>
    )
}
