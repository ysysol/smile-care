// src/routes.ts

import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MailIcon from '@mui/icons-material/Mail';
import Dashboard from './screens/dashboard';
import Contactus from './screens/contactus';

interface Route {
  path: string;
  name: string;
  icon: React.ReactNode; // Use React.ReactElement for icons
  component: React.ComponentType;
}

const routes: Route[] = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: <DashboardIcon />,
    component: Dashboard,
  },
  {
    path: '/contactus',
    name: 'Contact Us',
    icon: <MailIcon />,
    component: Contactus,
  },
];

export default routes;
