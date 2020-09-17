import React, {Component} from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Container } from '@material-ui/core';
import { UserService } from '../services/UserService';
import { Redirect } from 'react-router-dom';
import MainNav from './MainNav';
import User from '../models/user';

class Register extends Component {
   
    email = React.createRef();
    password = React.createRef();
    firstname = React.createRef();
    lastname = React.createRef();
    
    constructor(props){
        super(props);
        
        this.Submit = this.Submit.bind(this);
        
        this.state = {
            user: {},
            message: '',
            navigate: Boolean,
            
        }
    }

    

    Submit(event) {
        event.preventDefault();
        console.log(this.firstname.current.value);
        

        var firstnameForm = this.firstname.current.value;
        var lastnameForm = this.lastname.current.value;
        var emailForm = this.email.current.value;
        var passwordForm = this.password.current.value;
 
        var userSend = {
            _id: '',
            person: {
                firstname: firstnameForm,
                lastname: lastnameForm
            },
            email: emailForm,
            password: passwordForm
        };
        
        UserService.createUser(userSend).then(response=>{
            console.log(response);
            var mes = '';
            if(response.message){
                mes = response.message;
            }
            var userOK = {};
            if(response.user){
                userOK = response.user;
            }
            
            var newState = {
                user: userOK,
                message: mes,
                navigate: this.state.navigate,                
            }
            this.setState(newState);
        })
        
    }

    render(){

        return(
            <React.Fragment>
                            
                <MainNav></MainNav>
                
                <section className="row">
                    <div className="text-center container my-xl-auto">
                        <Container fluid="sm">
                            <h1>Sign Up</h1>
                        </Container>
                        {this.state.message &&
                        <Container fluid="sm">
                            <Container className="alert alert-danger" role="alert">
                                <h3>
                                    {this.state.message}
                                </h3>
                            </Container>
                        </Container>
                        }
                        <Container fluid sm>
                            <Container >
                                <Form className="form-signin" onSubmit={this.Submit}>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Firstname</Form.Label>
                                        <Form.Control type="text" placeholder="Firstname" ref={this.firstname}/>
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Lastname</Form.Label>
                                        <Form.Control type="text" placeholder="Lastname" ref={this.lastname}/>
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>E-mail</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" ref={this.email}/>
                                    </Form.Group>
                                    <Form.Group >
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" name="password" ref={this.password}/>
                                    </Form.Group >
                                    <Button variant="primary"  type="submit">Submit</Button>
                                </Form>
                            </Container>
                        </Container>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}



export default Register;