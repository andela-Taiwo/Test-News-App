import React from 'react';
import GoogleLogin from 'react-google-login';
import FontAwesome  from 'react-fontawesome';
import sourceStore from '../stores/SourceStore';
import Header from './Header.jsx';

export  default class Login extends React.Component{
  constructor() {
    super();
    this.responseGoogle = this.responseGoogle.bind(this);
  }
  
  // logIn (e) {
  //  this.props.history.push('/sources');
  // }

  responseGoogle(response) {
    const login_profile = response.getBasicProfile();
    const user_profile = {};
    user_profile.name = login_profile.getName();
    user_profile.email = login_profile.getEmail();
    user_profile.idToken = response.googleId;
    localStorage.setItem('userProfile', JSON.stringify(user_profile));
    location.reload();
  }

  render(){
  
    return(
      <div>
        <div className="section section__hero" id="index-banner">
      <div className="container">
        <div className="row">
          <div className="col s12 m7">
            <h1 className="header">Article Hub</h1>
            <h3 className="header">Get Live Headlines</h3>
            
          </div>
          <div className="col s12 m5 gorilla"> </div>
        </div>
        <div className="row center">
            <a id="cta__main" href="#!" className="btn btn-large"><GoogleLogin
                  className="btn btn-large"
                  clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                  buttonText="Login"
                  onSuccess={this.responseGoogle}
                  onFailure={this.responseGoogle}
                >
                <FontAwesome name="google"/>
                <span> Login with Google</span>
              </GoogleLogin></a>
        </div>
      </div>
    </div>

</div>
      
  );
  }
}