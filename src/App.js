import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import './App.css'

function App() {
  return (
    <>

        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route path="/category/:categoryId" element={<ItemListContainer />} />                
            </Routes>
        </BrowserRouter>

    </>
  );
}

export default App;
