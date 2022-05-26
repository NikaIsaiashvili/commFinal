import * as styles from "./Card.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Organisations from "../UserOrganisations/Organisation";

const GIT_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

function Card() {
  const { name } = useParams();
  const [user, setUser] = useState([]);
  const [orgs, setOrgs] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${name}`, {
      headers: {
        Authorization: `token ${GIT_TOKEN}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  useEffect(() => {
    fetch(`https://api.github.com/users/${name}/orgs?per_page=4`, {
      headers: {
        Authorization: `token ${GIT_TOKEN}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setOrgs(data));
  }, []);

  return (
    <section className={styles.UserContainer}>
      <div className={styles.LeftSide}>
        <img src={user.avatar_url} alt="userAvatar"></img>
        <button className={styles.AddRemoveBtn}>Add/Remove Favourites</button>
        
          <p>Name: {name} </p>
          <p>Bio: {user.bio}</p>
          <p>Repositories: {user.followers} </p>
          <p>Following: {user.following}</p>
        
      </div>
      <div className={styles.UserOrganisations}>
        {orgs.map((org) => {
          return (
            <Organisations
              key={org.id}
              orgImg={org.avatar_url}
              orgName={org.login}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Card;
