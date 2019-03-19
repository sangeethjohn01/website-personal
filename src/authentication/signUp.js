import React, { Component } from 'react';
import './signUp.css';
import history from '../history';
import Input from '../UI/Input';

class signUp extends Component {
    state = {
        signUpForm: {
            firstName: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "First Name"
                },
                value: ''
            },
            lastName: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Last Name"
                },
                value: ''
            },
            userName: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "User Name"
                },
                value: ''
            },
            password: {
                elementType: "input",
                elementConfig: {
                    type: "password",
                    placeholder: "Password"
                },
                value: ''
            },
            confirmpassword: {
                elementType: "input",
                elementConfig: {
                    type: "password",
                    placeholder: "Confirm Password"
                },
                value: ''
            }
        }
    }
    pathToLogin() {
        history.push('/');
    }
    inputChangeHandler = (event, elementIdentifier) => {
        const updatedSignUpForm = {
            ...this.state.signUpForm
        };
        const updatedFormElement = {
            ...updatedSignUpForm[elementIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedSignUpForm[elementIdentifier] = updatedFormElement;
        this.setState({signUpForm: updatedSignUpForm});
    }
    render() {
        const formElemetArray = [];
        for(let key in this.state.signUpForm) {
            formElemetArray.push({
                id: key,
                config: this.state.signUpForm[key]
            });
        }
        return (
            <div className="signinMain">
                <div className="signinMainDiv">
                    <div className="signinForm">
                        <div className="mtmbs mainHeading">SignUp</div>
                        <form>
                            {formElemetArray.map(formelement => (
                                <Input
                                key={formelement.id}
                                elementType={formelement.config.elementType}
                                elementConfig={formelement.config.elementConfig}
                                value={formelement.config.value}
                                changed={(event) => this.inputChangeHandler(event, formelement.id)}></Input>
                            ))}
                            <button type="button" className="mtmbs btn_Model">SignUp</button>
                        </form>
                        <div className="LinkTo" onClick={() => this.pathToLogin()}>Back to LogIn</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default signUp;