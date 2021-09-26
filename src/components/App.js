import React, { useState, useEffect } from 'react'
import HeaderBlock from './Header'
import NavBar from './NavBar'
import Home from './Home'
import InventoryPage from './InventoryPage'
import ItemForm from './ItemForm'

function App() {
  const [inventory, setInventory] = useState([])

  useEffect(() => {
    fetch('http://localhost:3004/inventory')
    .then(r => r.json())
    .then(setInventory)
  }, [])

  function handleAddItem(item) {
    setInventory([ ...inventory, item ])
  }

  function handleItemEdit(itemEdit) {
    setInventory(inventory.map(item => {
      if (item.id === itemEdit.id) {
        return itemEdit
      }
      return item
    }))
  }

  return (
    <div className="App">
      <HeaderBlock />
      <NavBar />
      {/*Initialize some routes here */}
      <Home inventory={inventory}/>
      <InventoryPage inventory={inventory} />
      <ItemForm onAddItem={handleAddItem} inventory={inventory}/>
    </div>
  );
}

export default App;
