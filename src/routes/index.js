// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";

// core components/views
import  DashboardContainer from '../containers/DashboardContainer';
import  StationContainer from '../containers/StationContainer';
import EquipmentsContainer from "../containers/EquipmentsContainer";
import IPContainer from '../containers/IPContainer';


const routes = [
  {
    path: "/dashboard",
    sidebarName: "DASHBOARD",
    navbarName: "DASHBOARD",
    icon: Dashboard,
    component: DashboardContainer
  },
  {
    path: "/postos",
    sidebarName: "POSTOS",
    navbarName: "POSTOS",
    icon: Person,
    component: StationContainer
  },
  {
    path: "/equipamentos",
    sidebarName: "EQUIPAMENTOS",
    navbarName: "EQUIPAMENTOS",
    icon: Person,
    component: EquipmentsContainer
  },
  {
    path: "/ips",
    sidebarName: "IPS",
    navbarName: "IPs",
    icon: Person,
    component: IPContainer
  },
  {
    path: "/buscaLT",
    sidebarName: "Icons",
    navbarName: "Icons",
    icon: Person,
    component: IPContainer
  },
  // {
  //   path: "/organizacao",
  //   sidebarName: "Maps",
  //   navbarName: "Map",
  //   icon: LocationOn,
  //   component: Maps
  // },
  // {
  //   path: "/ajuda",
  //   sidebarName: "Notifications",
  //   navbarName: "Notifications",
  //   icon: Notifications,
  //   component: NotificationsPage
  // },
  // { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default routes;
