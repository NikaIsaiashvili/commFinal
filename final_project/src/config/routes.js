import AuthGuard from "../components/AuthGuard/AuthGuard";
import GuestGuard from "../components/GuestGuard/GuestGuard";
import Search from "../pages/Search/Search";
import Dashboard from "../pages/dashboard/Dashboard";
import Favourites from "../pages/Favourites/Favourites";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import User from "../pages/User/User";

const ROUTES = {
  SIGN_UP: "signup",
  SIGN_IN: "signin",
  SEARCH: "search",
  FAVOURITES: "favourites",
  USER_PAGE: "userpage/:name",
  MAIN: "/",
};

const ROUTES_CONFIG = [
  {
    path: ROUTES.SIGN_UP,
    guard: GuestGuard,
    page: SignUp,
  },
  {
    path: ROUTES.SIGN_IN,
    guard: GuestGuard,
    page: SignIn,
  },
  {
    path: ROUTES.SEARCH,
    guard: AuthGuard,
    page: Search,
  },
  {
    path: ROUTES.FAVOURITES,
    guard: AuthGuard,
    page: Favourites,
  },
  {
    path: ROUTES.USER_PAGE,
    guard: AuthGuard,
    page: User,
  },
  {
    path: ROUTES.MAIN,
    guard: AuthGuard,
    page: Dashboard,
  },
];

export default ROUTES;
export { ROUTES_CONFIG };
