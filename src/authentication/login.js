import React, { Component } from 'react';
import './login.css';
import history from '../history';

class login extends Component {
    pathToMain() {
        history.push('/main');
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
                            <button className="mtmb btn_Model" onClick={() => this.pathToMain()}>LogIn</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default login;