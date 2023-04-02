import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home} from "./PAges/main/Home"
import {Login} from "./PAges/Login"
import {Navbar} from "./component/navbar" 
import './App.css';
import { CreatePost } from './PAges/createPost/createPost';

function App() {
  return (
    <div className="App">
     <Router>
      <Navbar />
       <Routes>
         <Route  path="/" element={<Home/>}/>
         <Route  path="/login" element={<Login/>}/>
         <Route  path="/createpost" element={<CreatePost/>}/>
       </Routes>
     </Router>
    </div>
  );
}

export default App;
