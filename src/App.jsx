import React from 'react';

import Router from './components/Router'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/App.css';

function App() {
    return (< div className="App" >
                
                <Router></Router>

                {/* < header className="App-header" >
                    <img src={logo}
                    className="App-logo"
                    alt="logo" />
                    < p >
                        Edit <code> src / App.js </code> and save to reload. 
                    </p> 
                    <a className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer" >
                        Learn React 
                        </a> 
                </header>  */}
            </div> );
}

export default App;