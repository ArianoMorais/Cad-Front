import DashboardIcon from '@mui/icons-material/Dashboard';
import LoginIcon from '@mui/icons-material/Login';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import EditIcon from '@mui/icons-material/Edit';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { createTheme } from '@mui/material/styles';

export const API_URL = 'http://localhost:5157/api';

export const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

export const getNavigation = (isLoggedIn) => [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: 'home',
    title: 'Home',
    icon: <DashboardIcon />,
  },
  ...(isLoggedIn
    ? [
        {
          segment: 'dashboard',
          title: 'Dashboard',
          icon: <DashboardIcon />,
        },
        {
          segment: 'edit',
          title: 'Edit Profile',
          icon: <EditIcon />,
        },
      ]
    : []),
  ...(isLoggedIn
    ? []
    : [
        {
          segment: 'login',
          title: 'Login',
          icon: <LoginIcon />,
        },
        {
          segment: 'register',
          title: 'Cadastro',
          icon: <PersonAddIcon />,
        },
      ]),
  {
    segment: 'contact',
    title: 'Contact',
    icon: <ContactMailIcon />,
  },
];