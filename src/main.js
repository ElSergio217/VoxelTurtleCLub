import React, {Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Mint from './pages/Mint';

class App extends Component {  
    render() {
        return ( 
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
            </Routes>
        </Router>
        );
    }
}

export default App;