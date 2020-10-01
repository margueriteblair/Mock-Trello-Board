import React from 'react';
import Navbar from './Components/Navbar'
import Body from './Components/Body'
import ListContentProvider from './Contexts/ListContext'


function App() {

  // const addCard = () => {
  //   console.log(Body);
    
  // }


  return (
    <div className="App">
      <ListContentProvider>
      <Navbar/>
      <Body/>
      {/* <button style={{marginTop: 20}}
      onClick={addCard}
      >Create New Work Flow?</button> */}
      </ListContentProvider>
    </div>
  );
}

export default App;
