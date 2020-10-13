import React, { Component } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login';


const CLIENT_ID = '719397545800-j6cku35d299252morr8eug19dolbntks.apps.googleusercontent.com';


class GoogleBtn extends Component {
   constructor(props) {
    super(props);

    this.state = {
      isLogined: false,
      accessToken: "",
      name:"",
      picture:""
    };

    this.login = this.login.bind(this);
    this.handleLoginFailure = this.handleLoginFailure.bind(this);
    this.logout = this.logout.bind(this);
    this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
  }

  login (response) {
    if(response.accessToken){
      console.log(response)
      this.setState(state => ({
        isLogined: true,
        accessToken: response.accessToken,
        name:response.profileObj.name,
        picture: response.profileObj.imageUrl
      }));
    }
  }

  logout (response) {
    this.setState(state => ({
      isLogined: false,
      accessToken: ''
    }));
  }

  handleLoginFailure (response) {
    alert('Failed to log in')
  }

  handleLogoutFailure (response) {
    alert('Failed to log out')
  }
  render() {
    return (
    <div>
      { this.state.isLogined ?
      <div>
         <img src={this.state.picture} alt={this.state.name} />
        <h2>Welcome {this.state.name}</h2>
        <GoogleLogout 
          clientId={ CLIENT_ID }
          buttonText='Logout'
          onLogoutSuccess={ this.logout }
          onFailure={ this.handleLogoutFailure }
        >
         
        </GoogleLogout> </div>: <GoogleLogin
          clientId={ CLIENT_ID }
          onSuccess={ this.login }
          onFailure={ this.handleLoginFailure }
          cookiePolicy={ 'single_host_origin' }
          responseType='code,token'
          buttonText="Login with Google"
        />
      }
      

    </div>
    )
  }
}

export default GoogleBtn;