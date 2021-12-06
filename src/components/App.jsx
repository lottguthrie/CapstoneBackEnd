import axios from 'axios';
import './App.css';
import jwtDecode from 'jwt-decode'
import { useState, useEffect } from 'react';
import BookCreator from './BookCreator/BookCreator';
import ShoppingCart from './ShoppingCart/ShoppingCart';
import Registration from './Registration/Registration';
import Login from './Login/Login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Header/Header'
import Home from './Home/Home'
import BookViewer from './BookViewer/BookViewer';
import surveyJSON from './Survey/survey';
import reportcreater from './Supervisor/ReportCreater';


function App() {
    
    const [user, setUser] = useState({})
    const [loginUser, setUserLogin] = useState([])
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

        return (   
          <div>
          <Header logout={logOut}/> 
            <Router>
                    <Route path="/" exact={true}>
                    <div className="sections">
                        <Home user={user}/>
                    </div>
                    </Route>
                    <Route path="/dailyreport">
                    <div className="sections">
                        <DailyReport/>
                    </div>
                    </Route>
                    <Route path="/login">
                    <div className="sections">
                        <Login loginUserCall ={loginUser}/>
                    </div>
                    </Route>
                    <Route path="/dailyreport">
                    <div className="sections">
                        <DailyReport/>
                    </div>
                    </Route>
                    <Route path="/officer">
                    <div className="sections">
                        <Officer/>
                    </div>
                    </Route>
                    <Route path="/supervisor">
                    <div className="sections">
                        <Supervisor/>
                    </div>
                    </Route>
                    <Route path="/reportcreator">
                    <div className="sections">
                      <Reportcreater/>
                    </div>  
                    </Route>
                    <Route path="/register">
                    <div className="sections">
                      <Registration/>
                    </div>
                    </Route>
                    <Route path="/survey">
                    <div id="surveyContainer">
                      <Survey/>
                    </div>
                    </Route>
            </Router>
            </div>
        )
}

export default App;