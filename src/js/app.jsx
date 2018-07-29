import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import Intro from './components/intro';
import Experience from './components/experience';

const App = () => {
    return (
        <Router>
            <div className="pageSections">
                <Navbar />
                <div className="navContent">
                    <Route exact path="/" component={Intro}/>
                    <Route path="/experience" component={Experience}/>
                    {/* <Route path="/profile" component={Profile}/> */}
                    {/* <Route path="/contact" component={Contact}/> */}
                </div>
            </div>
        </Router>
    );
}

export default App;