import React, { useState, useEffect } from 'react'

export const ListContext = React.createContext();
//export const ListContext = createContext()

export default function ListContextProvider(props) {

    
    const [state, setState] = useState(() => {
        return JSON.parse(localStorage.getItem('Todo-List')) ?? [{data: "Sample Text", checked: false}]
    //use of the null coalescing operator
    //if the left hand arg is null or undefined, it returns the right hand
    //if defined, returns the left hand
    
    });

    useEffect(() => {
        localStorage.setItem("Todo-List", JSON.stringify(state))
    }, [state])

    return (
        <ListContext.Provider value={{list: state, setList: setState}}>
            { props.children }
        </ListContext.Provider>
    )
}
