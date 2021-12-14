import React, { Component } from "react";
import { Router, Routes } from "react-router";
import { createBrowserHistory } from "history";
import axios from "axios";
import { useLocation, Route } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import Sidebar from "./Sidebar";
import FixedPlugin from "./FixedPlugin";
import sidebarImage from "./Sidebar";
import routes from "./Routes";


const history = createBrowserHistory();
function  App() {
  const [image, setImage] = React.useState(sidebarImage);
  const [color, setColor] = React.useState("black");
  const [hasImage, setHasImage] = React.useState(true);
  const location = useLocation();
  const mainPanel = React.useRef(null);
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            render={(props) => <prop.component {...props} />}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainPanel.current.scrollTop = 0;
    if (
      window.innerWidth < 993 &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      var element = document.getElementById("bodyClick");
      element.parentNode.removeChild(element);
    }
  }, [location]);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      localToken: "",
      OfficerView: [],
      DailyReport: [],
      Supervisor: [],
      SupervisorReport: [],
      Survey: [],
    };
    this.getAllOfficerView = this.getAllOfficerView.bind(this)
    this.deleteOfficerView = this.deleteOfficerView.bind(this)
    this.getAllDailyReport = this.getAllDailyReport.bind(this)
    this.deleteDailyReport = this.deleteDailyReport.bind(this)
    this.getAllSupervisor = this.getAllSupervisor.bind(this)
    this.deleteSupervisor = this.deleteSupervisor.bind(this)
    this.getAllSupervisorReport = this.getAllSupervisorReport.bind(this)
    this.deleteSupervisorReport = this.deleteSupervisorReport.bind(this)
    this.getAllSurvey = this.getAllSurvey.bind(this)
    this.deleteSurvey = this.deleteSurvey.bind(this)
  }

  componentDidMount() {
    this.getCurrentUser();
    this.getAllOfficerView();
    this.getAllDailyReport();
    this.getAllSupervisor();
    this.getAllSupervisorReport();
    this.getAllSurvey();

  }

  getCurrentUser = async () => {
    try {
      const jwt = localStorage.getItem("token");
      if (jwt) {
        this.setState({
            loggedIn: true,
          });
      } else {
        this.setState({
            loggedIn: false,
          });
      }
    } catch (err) {
      console.log(err);
      this.setState({
        loggedIn: false,
      });
    }
  };

  loginUser = () => {
    this.setState({
        loggedIn: true,
      });
  }

  getAllOfficerView = async () => {
    let response = await axios.get('http://127.0.0.1:8000/drf_jwt_capstone_backend/authentication/migrations/views/', {headers:{Authorization: "Bearer " + localStorage.getItem('token')}});
    this.setState({
        OfficerView: response.data
    })
  }

  deleteOfficerView = async (id) => {
    try{
      await axios.delete('http://127.0.0.1:8000/drf_jwt_capstone_backend/authentication/migrations/views/${id}/', {headers:{Authorization: "Bearer " + localStorage.getItem('token')}});
      this.getAllOfficerView();
    }
    catch(event){
    }
  }

  getAllDailyReport = async () => {
    let response = await axios.get('http://127.0.0.1:8000/drf_jwt_capstone_backend/dailyreport/migrations/views/', {headers:{Authorization: "Bearer " + localStorage.getItem('token')}});
    this.setState({
        DailyReport: response.data
    })
  }

  deleteDailyReport = async (id) => {
    try{
      await axios.delete('http://127.0.0.1:8000/drf_jwt_capstone_backend/dailyreport/migrations/views/${id}/', {headers:{Authorization: "Bearer " + localStorage.getItem('token')}});
      this.getAllDailyReport();
    }
    catch(event){
    }
  }

  getAllSupervisor = async () => {
    let response = await axios.get('http://127.0.0.1:8000/drf_jwt_capstone_backend/supervisor/migrations/views/', {headers:{Authorization: "Bearer " + localStorage.getItem('token')}});
    this.setState({
        Supervisor: response.data
    })
  }

  deleteSupervisor = async (id) => {
    try{
      await axios.delete('http://127.0.0.1:8000/drf_jwt_capstone_backend/supervisor/migrations/views/${id}/', {headers:{Authorization: "Bearer " + localStorage.getItem('token')}});
      this.getAllSupervisor();
    }
    catch(event){
    }
  };

  getAllSurvey = async () => {
    let response = await axios.get('http://127.0.0.1:8000/drf_jwt_capstone_backend/survey/migrations/views/', {headers:{Authorization: "Bearer " + localStorage.getItem('token')}});
    this.setState({
        Surveyr: response.data
    })
  }

  deleteSurvey = async (id) => {
    try{
      await axios.delete('http://127.0.0.1:8000/drf_jwt_capstone_backend/survey/migrations/views/${id}/', {headers:{Authorization: "Bearer " + localStorage.getItem('token')}});
      this.getAllSurvey();
    }
    catch(event){
    }
  };


  render() {
    return (
      <div>
        <Navbar />
        <Router history={history}>
      <div className="wrapper">
        <Sidebar color={color} image={hasImage ? image : ""} routes={routes} />
        <div className="main-panel" ref={mainPanel}>
          <AdminNavbar />
          <div className="content">
            <Route>{getRoutes(routes)}</Route>
          </div>
        </div>
      </div>
      <FixedPlugin
        hasImage={hasImage}
        setHasImage={() => setHasImage(!hasImage)}
        color={color}
        setColor={(color) => setColor(color)}
        image={image}
        setImage={(image) => setImage(image)}
        />
        </Router>
      </div>
    );
  }
}
}

export default App;
