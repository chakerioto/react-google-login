import React from 'react'
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import { GoogleLogout } from 'react-google-login';

const Private = () => {

    const logout = () => {
        console.log("logout")
    }

    const responseGoogle = (response) => {
        console.log(response);
        console.log(123123123)
    }
    return (
        <div>
            private
            <GoogleLogin
                clientId="570332658602-ls38epbc5f0hoomf85lihbmd182cktb1.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                isSignedIn={true}
                cookiePolicy={'single_host_origin'}
            />

            <GoogleLogout
                clientId="570332658602-ls38epbc5f0hoomf85lihbmd182cktb1.apps.googleusercontent.com"
                buttonText="Logout"
                onLogoutSuccess={logout}
            >
            </GoogleLogout>

        </div>
    )
}

export default Private
