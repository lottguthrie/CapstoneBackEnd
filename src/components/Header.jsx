import React, { Component } from "react";
import { Link } from "react-router-dom";




class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      logout: "",
    };
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dailyReportSearch(this.state.search);
  };

  handleLogout = async (event) => {
    this.props.logout();
  };

  render() {
    return (
      <nav id="nav-bar">
        <div className="container">
          <div className="section">
            <div className="logo flex">
            <Link to="/" onClick={this.handleLogin}>
                    <i class="fas fa-sign-out-alt"></i> Login Here
              </Link>
              <Link to="/Home">
                <i className="Home" class="fas fa-system">
                  {" "}
                  <span>Activity Report System</span>
                  <div></div>
                  <span>Sophia Technology</span>
                </i>
              </Link>
            </div>
          </div>
          <div className="section space">
            <div className="navLinks border">
              <ul className="flex">
                <li>
                  <Link to="/Officer">
                    <i class="fas fa-people-arrows"></i> Officer
                  </Link>
                </li>
                <li>
                  <Link to="/Dailyreport">
                    <i class="fas fa-import"></i> Dailyreport
                  </Link>
                </li>
                <li>
                  <Link to="/Supervisor">
                    <i class="fas fa-dollar-sign"></i> Supervisor
                  </Link>
                </li>
                <li>
                  <Link to="/SupervisorReport">
                    <i class="fas fa-import"></i> Supervisor Report
                  </Link>
                </li>
                <li>
                  <Link to="/Registration">
                    <i class="fas fa-user-plus"></i> Register
                  </Link>
                </li>

                <li>
                  <Link to="/logout" onClick={this.handleLogout}>
                    <i class="fas fa-sign-out-alt"></i> Logout Here
                  </Link>
                </li>
                  </ul>
            </div>
            <div class="search-container">
              <form>
                <input type="text" placeholder="Search for report.." name="search" />
                <button type="submit">
                  <i class="fa fa-searchengin"></i>
                </button>
              </form>
            </div>

          </div>
        </div>
      </nav>
    );
  }
}
export default Header;
