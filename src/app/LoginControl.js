import React from 'react';

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        };
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogouClick = this.handleLogouClick.bind(this);
    }


    handleLoginClick() {
        this.setState({
            isLoggedIn: true
        });
    }

    handleLogouClick() {
        this.setState({
            isLoggedIn: false
        });
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        isLoggedIn
            ? button = <LogoutButton onClick={this.handleLogouClick} />
            : button = <LoginButton onClick={this.handleLoginClick} />
        return <div>
            <Greeting isLoggedIn={isLoggedIn} />
            {button}
        </div>
    }

}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    return isLoggedIn
        ? <UserGreeting />
        : <GuestGreeting />;
}

export default LoginControl;