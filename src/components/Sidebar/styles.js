const drawerWidth = 240;

export const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    display: 'flex',
    background: '#2a313d',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9 + 1,
    },
  },
  toolbar: {
    display: 'flex',
    // padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  loginContainer: {
    display: 'flex',
    flex: '1 1 auto',
    // justifyContent: 'flex-end',
  },
  loginButton: {
    maxHeight: '10px',
    alignSelf: 'center',
    margin: 'auto',
    background: 'limegreen',
    color: 'white',
  },
  title: {
    width: '50%'
  },
  loginInput: {
    display: 'flex', 
    width: '80%',
    
  },
  loginButtonContainer: {
    display: 'flex',    
    width: '10%',
    flex: '1 1 auto',
  },
  textField: {
    background: '#fafafa',
    marginLeft:'1%',    
    maxHeight: '3rem'

  }
  
});