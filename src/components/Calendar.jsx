import React, {Component} from 'react';
import MainNav from './MainNav';

class Calendar extends Component {
    render(){
        return(
            <React.Fragment>
                <MainNav></MainNav>
                <h1>Calendar</h1>
            </React.Fragment>
        );
    }
}


export default Calendar;