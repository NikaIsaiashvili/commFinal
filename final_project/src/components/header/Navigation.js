import { NavLink } from "react-router-dom";
import * as styles from "./Navigation.module.css";
import ROUTES from "../../config/Routes";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Navigation() {
  const { logout } = useContext(AuthContext);
  return (
    <>
      <nav className={styles.NavContainer}>
        <ul className={styles.List}>
          <span className={styles.GitLogo}>
            <ion-icon name="logo-github"></ion-icon>
          </span>

          <li className={styles.ListItem}>
            <NavLink
              to={ROUTES.MAIN}
              className={({ isActive }) =>
                isActive ? styles.ActiveBorder : null
              }
            >
              Dashboard{" "}
              <span className={styles.ListIcon}>
                <ion-icon name="clipboard-sharp"></ion-icon>
              </span>{" "}
            </NavLink>
          </li>
          <li className={styles.ListItem}>
            <NavLink
              to={`/${ROUTES.SEARCH}`}
              className={({ isActive }) =>
                isActive ? styles.ActiveBorder : null
              }
            >
              Search{" "}
              <span className={styles.ListIcon}>
                <ion-icon name="search-sharp"></ion-icon>
              </span>
            </NavLink>
          </li>

          <li className={styles.ListItem}>
            <NavLink
              to={`/${ROUTES.FAVOURITES}`}
              className={({ isActive }) =>
                isActive ? styles.ActiveBorder : null
              }
            >
              Favourites{" "}
              <span className={styles.ListIcon}>
                <ion-icon name="bookmarks-sharp"></ion-icon>
              </span>
            </NavLink>
          </li>

          <button className={styles.LogOutButton} onClick={logout}>
            Logout
          </button>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
