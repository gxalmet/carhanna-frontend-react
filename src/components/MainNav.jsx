import React, { Component } from 'react';
import PersonIcon from '@material-ui/icons/Person';
import { Nav, Navbar, Container } from 'react-bootstrap';
import User from '../models/user';
import { Redirect, Link } from 'react-router-dom';
import { UserService } from '../services/UserService';

// function MenuLinks(user){
//     console.log(user);
//     if(user){
//         console.log('value');
//         return ( 
//             <React.Fragment>
//                 <Nav.Link >
//                     <Container>
//                     <PersonIcon>
//                     </PersonIcon>
//                     <h4>
//                         {user.person.firstname} {user.person.lastname}
//                     </h4>
//                     </Container>
//                 </Nav.Link>
//                 <Nav.Link><h4>LogOut</h4></Nav.Link>
//             </React.Fragment> );
//     }else{
//         console.log('no value');
//         return ( <React.Fragment></React.Fragment> );
//     }
// }




class MainNav extends Component {

    constructor(props) {

        super(props);
        
        this.state = {
            userLogIn: React.createRef(),
            user: new User(),
            exit: null
        }
    
        this.logOut = this.logOut.bind(this);  
    }

    componentWillMount(){
        
        this.UserIsLogged();
        
    }

    logOut(){     
        
        UserService.logOut();
        
        this.setState(
            {
                userLogIn: false,
                user: new User(),
                exit: true
            }
        );  
 
    }

    UserIsLogged = () => {

        UserService.loggedIn()
        .then( res=>{
            // console.log('UserIsLogged');
            // this.setState(
            //     {
            //         userLogIn: true,
            //         user: {}
            //     }
            // );   
            UserService.getUserByToken()
            .then(res=>{
                
                if(res.status === '401'){
                    this.setState(
                        {
                            userLogIn: false,
                            user: new User(),
                            exit: false
                        }
                    ); 
                }else{
                    this.setState(
                        {
                            userLogIn: true,
                            user: res.user,
                            exit: false
                        }
                    ); 
                }
                

                
                
                // this.setState(
                //     {
                //         userLogIn: true,
                //         user: res.User
                //     }
                // ); 
            })
            .catch(err=>{
                
                this.setState(
                    {
                        userLogIn: false,
                        user: new User(),
                        exit: false
                    }
                ); 
            });  
            }
        );

 


    }
   
    render() {
        
        
        if(this.state.exit == true){
            return ( <Redirect to ="/home"></Redirect>)
        }
        
        return (
            <Navbar collapseOnSelect expand="lg" >
                <Navbar.Brand href="/home"><h1>CARHANNA</h1></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        {this.state.userLogIn === true &&
                        <React.Fragment>
                            <Nav.Link href="/projects"><h4>Projects</h4></Nav.Link>
                            <Nav.Link href="/myteam"><h4>My team</h4></Nav.Link>
                            <Nav.Link href="/calendar"><h4>Calendar</h4></Nav.Link>
                            <Nav.Link href="/agenda"><h4>Agenda</h4></Nav.Link>
                        </React.Fragment>
                        }
                        {!(this.state.userLogIn === true) &&
                        <React.Fragment>
                            <Nav.Link href="/login"><h4>Log In</h4></Nav.Link>
                            <Nav.Link href="/register"><h4>Sign Up</h4></Nav.Link>
                        </React.Fragment>
                        }
                    </Nav>
                    <Nav>
                        {this.state.userLogIn === true &&
                            <Nav.Link >
                                <Container>
                                    <PersonIcon>
                                    </PersonIcon>
                                    <h4>
                                        {this.state.user.person.firstname} {this.state.user.person.lastname}
                                    </h4>
                                    </Container>
                            </Nav.Link>
                        }
                        {this.state.userLogIn === true &&
                            <Nav.Link onClick={this.logOut}><h4>LogOut</h4></Nav.Link>
                        }  
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default MainNav;