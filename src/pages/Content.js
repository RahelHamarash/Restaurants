import React , {Component} from 'react' ;
import {BrowserRouter as Router , Switch , Route } from 'react-router-dom' ;
import Home from './KrdPages/Home' ;
import Level from './KrdPages/Level' ;
class Content extends Component {

    render(){
        
        return (
            
            <Router>
                <Switch>
                    <Route exact path="/dashboard" component={Home}/>
                    <Route exact path="/level" component={Level}/>    
                </Switch>
            </Router>
        )
    }
}

export default Content ;