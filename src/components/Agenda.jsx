import React, {Component} from 'react';
import MainNav from './MainNav';

class Agenda extends Component{
    render(){
        return (
            <React.Fragment>
            <MainNav></MainNav>
            <h4>Agenda</h4>
        </React.Fragment>
        );
    }
}

export default Agenda;