import React from 'react';
import { Link, HashRouter } from 'react-router-dom';

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      authenticated: false
    };
    this.logout = this.logout.bind(this);
  }
  /**
   * @memberof Header logs out the user when invoked
   */
  logout() {
    localStorage.removeItem('userProfile');
    location.reload();
  }
/**
 * @returns {component}
 * @memberof Header  renders UI  for the Header component
 */
  render() {
    const user = JSON.parse(localStorage.getItem('userProfile'));
    return (
            <nav>
              <HashRouter>
              <div className="navBar">
                <div className="navbar-header">
                  <a href="" className="brand-logo center" to="/">
                    Articles Hub</a>
                </div>
                  <ul id="nav-mobile" className="left">
                    <li><Link to="/sources" >Latest News</Link></li>
                    <li> {user.name}</li>
                    <li ><Link to="/" onClick={this.logout}>Logout</Link></li>
                  </ul>
            </div>
            </HashRouter>
          </nav>
    );
  }
}

export default Header;
