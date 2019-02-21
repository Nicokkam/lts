// core components/views
import  DashboardContainer from '../containers/DashboardContainer';
import  StationContainer from '../containers/StationContainer';
import EquipmentsContainer from "../containers/EquipmentsContainer";
import IPContainer from '../containers/IPContainer';


// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import Help from "@material-ui/icons/Help";
// import Storage from '@material-ui/icons/Storage'
import DevelopmentBoard from '@material-ui/icons/DeveloperBoard'
import Router from '@material-ui/icons/Router';
import LocalLibrary from '@material-ui/icons/LocalLibrary'
// import Style from '@material-ui/icons/Style'
// import Power from '@material-ui/icons/Power'
// import Public from '@material-ui/icons/Public'
 import EventNote from '@material-ui/icons/EventNote'
import ReportContainer from '../containers/ReportContainer';



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
    icon: LocalLibrary,
    component: StationContainer
  },
  {
    path: "/equipamentos",
    sidebarName: "EQUIPAMENTOS",
    navbarName: "EQUIPAMENTOS",
    icon: Router,
    component: EquipmentsContainer
  },
  {
    path: "/ips",
    sidebarName: "IPS",
    navbarName: "IPs",
    icon: DevelopmentBoard,
    component: IPContainer
  },
  {
    path: "/buscaLT",
    sidebarName: "Buscar LT",
    navbarName: "BUSCAR LT",
    icon: EventNote,
    component: IPContainer
  },
  {
    path: "/organizacao",
    sidebarName: "Organização",
    navbarName: "ORGANIZAÇÃO",
    icon: Person,
    component: IPContainer
  },
  {
    path: "/relatorio",
    sidebarName: "RELATORIO",
    navbarName: "RELATORIO",
    icon: Help,
    component: ReportContainer
  },
  {
    path: "/ajuda",
    sidebarName: "AJUDA",
    navbarName: "AJUDA",
    icon: Help,
    component: IPContainer
  },
  // { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default routes;
