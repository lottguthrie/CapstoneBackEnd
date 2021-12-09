import axios from 'axios';
import jwtDecode from 'jwt-decode'
import { useState, useEffect } from 'react';
import Registration from './Registration/Registration';
import FilterSearch from './SearchBar/SearchBar';
import Login from './Login/Login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Header/Header'
import Home from './Home/Home'
import surveyJSON from './Survey/Survey';
import SupervisorReport from './Supervisor/SupervisorReport';
import DailyReport from './Officer/DailyReport'
import Officer from './Officer/Officer'
import Supervisor from './Supervisor/Supervisor'
import { withRouter } from "react-router-dom";

function App() {
    
    const [user, setUser] = useState({})
    const [userLogin, setUserLogin] = useState([])
    const [jwt, setJwt] = useState()
    const [loadData, setLoadData] = useState(false)

    
    const getUserJWT = () => {
        const jwt = localStorage.getItem('token');
        try {
          const user = jwtDecode(jwt);
          setUser(user)
          console.log("get user jwt", user)
        } catch {
        }
      }
    
      useEffect(() =>{
        getUserJWT();
        getUserLogin();
        setLoadData(!loadData)   
      },[])

      const getUserLogin = async () => {
        const response = await axios.get('https://localhost:44394/api/authentication/user', { headers: {Authorization: 'Bearer ' + jwt}});
        setUserLogin(response.data);
        console.log(response.data)
      }

      const loginUser = async (loginUser) => {
        let response= await axios.post('https://localhost:44394/api/authentication/login', loginUser);
        localStorage.setItem('token', response.data.token);
        console.log("response axios call", response.data.token)
        setJwt(localStorage.getItem('token'));
      }

       const logOut = ()=>{
          localStorage.removeItem("token");
          setUser({})
          console.log("User has logged out")
        }

        FilterSearch = (filtered) => {
          this.setState({
              officers:filtered
          })
      }

        return (   
          <div>
          <Header logout={logOut}/> 
          <FilterSearch search={this.state.officers} filterAction={this.filterOfficer} refresh={this.makeGetRequest}/>
            <Router>
                    <Route path="/" exact={true}>
                    <div className="sections">
                        <Home user={user}/>
                    </div>
                    </Route>
                    <Route path="/DailyReport">
                    <div className="sections">
                        <DailyReport/>
                    </div>
                    </Route>
                    <Route path="/Login">
                    <div className="sections">
                        <Login loginUserCall ={loginUser}/>
                    </div>
                    </Route>
                    <Route path="/dailyreport">
                    <div className="sections">
                        <DailyReport/>
                    </div>
                    </Route>
                    <Route path="/Officer">
                    <div className="sections">
                        <Officer/>
                    </div>
                    </Route>
                    <Route path="/Supervisor">
                    <div className="sections">
                        <Supervisor/>
                    </div>
                    </Route>
                    <Route path="/SupervisorReport">
                    <div className="sections">
                      <SupervisorReport/>
                    </div>  
                    </Route>
                    <Route path="/Registration">
                    <div className="sections">
                      <Registration/>
                    </div>
                    </Route>
                    <Route path="/Survey">
                    <div id="surveyContainer">
                      <surveyJSON/>
                    </div>
                    </Route>
            </Router>
            </div>
        )
}

export default withRouter(App);