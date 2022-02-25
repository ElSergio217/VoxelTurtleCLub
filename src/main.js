import React, {Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Metaverse from './pages/Metaverse';

class App extends Component {  
    render() {
        return ( 
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                {/* <Route exact path="/metaverse" element={<Metaverse/>}/> */}
            </Routes>
        </Router>
        );
    }
}

export default App;