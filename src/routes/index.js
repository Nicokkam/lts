// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// import ContentPaste from "@material-ui/icons/ContentPaste";
// import LibraryBooks from "@material-ui/icons/LibraryBooks";
// import BubbleChart from "@material-ui/icons/BubbleChart";
// import LocationOn from "@material-ui/icons/LocationOn";
// import Notifications from "@material-ui/icons/Notifications";

// core components/views
import  DashboardContainer from '../containers/DashboardContainer';
import  StationContainer from '../containers/StationContainer';


// import TableList from "views/TableList/TableList.jsx";
// import Typography from "views/Typography/Typography.jsx";
// import Icons from "views/Icons/Icons.jsx";
// import Maps from "views/Maps/Maps.jsx";

//views



// const menus = [
//   'DASHBOARD',
//   'POSTOS',
//   'EQUIPAMENTOS',
//   'RELATÓRIOS',
//   'ACESSO',
//   'BUSCAR LT',
//   'ORGANIZAÇÃO',
//   'AJUDA'
// ]

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
  // {
  //   path: "/relatorios",
  //   sidebarName: "Table List",
  //   navbarName: "Table List",
  //   icon: "content_paste",
  //   component: TableList
  // },
  // {
  //   path: "/acesso",
  //   sidebarName: "Typography",
  //   navbarName: "Typography",
  //   icon: LibraryBooks,
  //   component: Typography
  // },
  // {
  //   path: "/buscaLT",
  //   sidebarName: "Icons",
  //   navbarName: "Icons",
  //   icon: BubbleChart,
  //   component: Icons
  // },
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
