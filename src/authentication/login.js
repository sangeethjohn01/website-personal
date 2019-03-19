import React, { Component } from 'react';
import './login.css';
import history from '../history';
import axios from 'axios';

class login extends Component {

    async pathToMain() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log('reponse', response);
        history.push('/main');
    }
    pathToSignUp() {
        history.push('/signup');
    }
    render() {
        return (
            <div className="loginMain">
                <div className="loginMainDiv">
                    <div className="loginForm">
                        <div className="mtmb mainHeading">LogIn</div>
                        <form>
                            <div className="mtmb"><input type="text" onFocus={(e) => e.target.placeholder = "sangeeth@gmail.com"} onBlur={(e) => e.target.placeholder = ""} required></input><span className="floating-label">UserName</span></div>
                            <div className="mtmb"><input type="password" required></input><span className="floating-label">Password</span></div>
                            <button type="button" className="mtmb btn_Model" onClick={() => this.pathToMain()}>LogIn</button>
                        </form>
                        <div className="LinkTo" onClick={() => this.pathToSignUp()}>SignUp</div>
                    </div>
                </div>
            </div>
        );
    }
}
export default login;