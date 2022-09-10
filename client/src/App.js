import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './home';
import PostView from './postView';
import Form from './form';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/postView' element={<PostView />}></Route>
        <Route path='/form' element={<Form />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
