import React, { Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";

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
              <Link to="/">
                <i className="System" class="fas fa-system">
                  {" "}
                  <span>Activity Report System</span>
                  <span>Sophia Technology</span>
                </i>
              </Link>
            </div>
          </div>
          <div className="section space">
            <div className="navLinks border">
              <ul className="flex">
                <li>
                  <Link to="/">
                    <i class="fas fa-home"></i> Home
                  </Link>
                </li>

                <li>
                  <Link to="/Dailyreport">
                    <i class="fas fa-import"></i> Dailyreport
                  </Link>
                </li>


                <li>
                  <Link to="/Officer">
                    <i class="fas fa-people-arrows"></i> Officer
                  </Link>
                </li>

                <li>
                  <Link to="/create">
                    <i class="fas fa-dollar-sign"></i> Supervisor
                  </Link>
                </li>

                <li>
                  <Link to="/register">
                    <i class="fas fa-user-plus"></i> Register
                  </Link>
                </li>

                <li>
                  <Link to="/login" onClick={this.handleLogout}>
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