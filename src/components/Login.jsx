import React, {Component} from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Container } from '@material-ui/core';
import { UserService } from '../services/UserService';
import { Redirect } from 'react-router-dom';
import MainNav from './MainNav';

class Login extends Component {
    constructor(props){
        super(props);
        console.log(props);
        this.Submit = this.Submit.bind(this);
    }

    state = {
        form: {
            email : React.createRef(),
            password : React.createRef(),
        },
        user: React.createRef(),
        message: React.createRef(),
        navigate: React.createRef()
    }

    Submit(event) {
        event.preventDefault();
        var user = { 
            _id: ' ', 
            person: { 
                firstname: ' ', 
                lastname:' ' }, 
            email: this.state.form.email.current.value, 
            password: this.state.form.password.current.value,
            navigate: false
        };
        
        var email = this.state.form.email.current.value;
        var password = this.state.form.password.current.value;
        UserService.confirmLogin(user)
            .then(resp=>{

                var mes = resp.message;
                
                if(resp.userOK){
                    this.setState({
                        form: {
                            email : email,
                            password : password,
                        },
                        user: resp.userOK,
                        message: mes,
                        navigate: true
                    });
                    //const navigation = useNavigation();
                    //navigation.navigate("projects");
                }else{
                    this.setState({
                        form: {
                            email : email,
                            password : password,
                        },
                        user: {},
                        message: mes,
                        navigate: false
                    });
                }

            })
            .catch(error=>{
                var mes = error.message;

                this.setState({
                    form: {
                        email : email,
                        password : password,
                    },
                    user: {},
                    message: mes,
                    navigate: false
                });
            });
        
    }

    render(){
        var usertest = this.state.navigate;
        console.log(usertest);
        if(this.state.navigate === true){
            return ( <Redirect to ="/projects"></Redirect>)
        }
        return(
            <React.Fragment>
                <MainNav></MainNav>
                <section className="row">
                    <div className="text-center container my-xl-auto">
                        <Container fluid="sm">
                            <h1>Login</h1>
                        </Container>
                        {/* {this.state.message &&
                        <Container fluid="sm">
                            <Container className="alert alert-danger" role="alert">
                                <h3>
                                    {this.state.message}
                                </h3>
                            </Container>
                        </Container>
                        } */}
                        <Container fluid="sm">
                            <Container >
                                <Form className="form-signin" onSubmit={this.Submit}>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>E-mail</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" ref={this.state.form.email}/>
                                    </Form.Group>
                                    <Form.Group >
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" name="password" ref={this.state.form.password}/>
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


export default Login;