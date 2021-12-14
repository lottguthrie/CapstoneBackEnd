import Login from "./Login";
import OfficerView from "./Officer";
import DailyReport from "./DailyReport";
import SupervisorReport from "./SupervisorReport";
import Registration from "./Registration";
import Logout from "./Logout";
import Supervisor from "./Supervisor";
import SurveyJSReactApplication from "./survey/App"
import Dashboard from "./Home";

const AppRoutes = [
  {
    path: "/",
    name: "Home",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/App",
  },
  {
    path: "/Login",
    name: "Login",
    icon: "nc-icon nc-circle-09",
    component: Login,
    layout: "/App",
  },
  {
    path: "/Officer",
    name: "Officer Profile",
    icon: "nc-icon nc-notes",
    component: OfficerView,
    layout: "/App",
  },
  {
    path: "/DailyReport",
    name: "Daily Report",
    icon: "nc-icon nc-paper-2",
    component: DailyReport,
    layout: "/App",
  },
  {
    path: "/Supervisor",
    name: "Supervisor",
    icon: "nc-icon nc-atom",
    component: Supervisor,
    layout: "/App",
  },
  {
    path: "/SupervisorReport",
    name: "Supervisor Report",
    icon: "nc-icon nc-pin-3",
    component: SupervisorReport,
    layout: "/App",
  },
  {
    path: "/Registration",
    name: "Registration",
    icon: "nc-icon nc-bell-55",
    component: Registration,
    layout: "/App",
  },
  {
    path: "/survey/App",
    name: "Survey",
    icon: "nc-icon nc-atom",
    component: SurveyJSReactApplication,
    layout: "/App",
  },
  {
    path: "/Logout",
    name: "Logout",
    icon: "nc-icon nc-circle-09",
    component: Logout,
    layout: "/App",
  },
];

export default AppRoutes;



