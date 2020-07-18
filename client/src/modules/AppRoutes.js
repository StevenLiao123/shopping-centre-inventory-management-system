//router.js
import { Login, Signup, Home, CreateOrUpdate } from '../pages';

const routes = [
  {
    path: "/login",
    component: Login
  },
  {
    path: "/signup",
    component: Signup
  },
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/createOrUpdate/:centreId?/:centreName?/:centreStreetName?/:centreSuburb?/:centreState?/:centrePostCode?",
    component: CreateOrUpdate
  }
];

export default routes;
