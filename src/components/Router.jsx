import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Login from './Login';
import Register from './Register';
import CreateProject from './CreateProject';
import Projects from './Projects';
import Calendar from './Calendar';
import EditProject from './EditProject';
import MyTeam from './MyTeam';
import Error from './Error';
import MainNav from './MainNav';
import Agenda from './Agenda';


class Router extends Component{
    render(){
        return(
            <React.Fragment>
                
                <BrowserRouter>
                {/* <MainNav></MainNav> */}
                    <Switch>
                        
                        <Route exact path="/" component={Home}></Route>
                        <Route exact path="/home" component={Home}></Route>

                        <Route exact path="/login" component={Login}></Route>
                        <Route exact path="/register" component={Register}></Route>
                        <Route exact path="/createproject/:id?" component={CreateProject}></Route>
                        <Route exact path="/projects" component={Projects}></Route>
                        <Route exact path="/calendar" component={Calendar}></Route>
                        <Route exact path="/editproject/:id?" component={EditProject}></Route>
                        <Route exact path="/myteam" component={MyTeam}></Route>
                        <Route exact path="/agenda" component={Agenda}></Route>
                        <Route component={Error}></Route>

                    </Switch>
                
                </BrowserRouter>
            </React.Fragment>
        );
    }
}

export default Router;