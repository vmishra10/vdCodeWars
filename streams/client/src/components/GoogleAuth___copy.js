import React from 'react';

class GoogleAuth extends React.Component {
    state = { isSignedIn: null };
    componentDidMount() {
        window.gapi.load('client:auth2', ()=> {
            window.gapi.client.init({
                clientId: '269937991032-r0qp9b2lvfbggp8jrkgij2boldqcj2hh.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange();
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }
    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    };

    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    };

    renderAuthButton() {
        if(this.state.isSignedIn === null) {
            return null;
        } else if(this.state.isSignedIn) {
            return (
                <button className="ui red google button" onClick={this.onSignOutClick}>
                    <i className="google icon"></i>
                    Sign Out
                </button>
            );
        } else {
            return (
                <button className="ui green google button" onClick={this.onSignInClick}>
                    <i className="google icon"></i>
                    Sign In with Google!
                </button>
            );
        }
    }

    render() {
        return (
            <div> {this.renderAuthButton()}</div>
        )
    }
}

export default GoogleAuth;