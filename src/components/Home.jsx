import React, {Component} from 'react';
import MainNav from './MainNav';


class Home extends Component {
    //strong = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>;
    render(){
        return (
            <React.Fragment>
                <MainNav></MainNav>
                <div className="container-md align-content-md-stretch">
                    <br></br>
                    <h2>CARHANNA PROJECT MANAGEMENT</h2>
                    <br></br>
                    <p className="text-initial"><strong>CarHanna</strong> is a free web <strong>API</strong> developed as a personal project in order to manage projects of software. This <strong>API</strong> is developed in <strong>NODEJS</strong> in the backend and with Angular 10 in the
                        <strong>
                            frontend
                        </strong>. The database that is used is 
                        <a className="home-link" target="_blank" rel="noopener noreferrer" href="https:www.mongodb.com/">
                            <strong>
                                MongoDb
                            </strong>
                        </a> .
                        <br></br>
                    </p>
                    <cite title="Wikipedia">
                        <a className="home-link" target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/MongoDB">
                            <strong>
                                Wikipedia
                            </strong>
                        </a>
                    </cite>
                    <br></br>
                    <blockquote className="blockquote">
                        <p className="text-quote">MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License.
                        </p>
                    </blockquote>
                    <br/>
                    <p className="text-initial">If you want to check the code, take a look to the following links to <strong> GITHUB </strong>:
                    </p>
                    <ul>
                        <li className="text-initial-li">
                            <a className="home-link" target="_blank" rel="noopener noreferrer" href="https://github.com/gxalmet/CarHanna-Backend-Node.js"><strong>API</strong></a>
                        </li>
                        <li className="text-initial-li">
                            <a className="home-link" target="_blank" rel="noopener noreferrer" href="https://github.com/gxalmet/CarHanna-Angular-Frontend"><strong>Frontend</strong></a>
                        </li>
                    </ul>
                </div>
            </React.Fragment> 
        );
    }
}

export default Home;