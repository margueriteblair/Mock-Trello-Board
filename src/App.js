import React from 'react';
import Navbar from './Components/Navbar'
import Body from './Components/Body'
import ListContentProvider from './Contexts/ListContext'


function App() {
  return (
    <div className="App">
      <ListContentProvider>
      <Navbar/>
      <Body/>
      </ListContentProvider>
    </div>
  );
}

export default App;
