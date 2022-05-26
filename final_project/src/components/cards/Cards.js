import * as styles from "./Cards.module.css";
import ROUTES from "../../config/routes";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Cards({ gitUser }) {
  const [user, setUser] = useState([]);
  const GIT_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

  useEffect(() => {
    fetch(`https://api.github.com/users/${gitUser.login}`,
    {
      headers: {
          "Authorization" : `token ${GIT_TOKEN}`
      }
  })
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <section className={styles.CardContainer}>
        <div className={styles.Card}>
          <img
            src={gitUser.avatar_url}
          alt="userImg"
          ></img>
          <div className={styles.TextBox}>
          <p>Username: <span>{`${gitUser.login}`}</span></p>
          <p>Repositories: <span>{`${user.public_repos}`}</span></p>
          <p>Followers: <span>{`${user.followers}`}</span></p>
          <p>Following: <span>{`${user.following}`}</span> </p>
          </div>
          <Link to={`/${ROUTES.USER_PAGE}`.replace(":name", `${gitUser.login}`)}>See More</Link>
        </div> 
    </section>
  );
}

export default Cards;
