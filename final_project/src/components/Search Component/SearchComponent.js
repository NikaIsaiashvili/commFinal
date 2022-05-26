import * as styles from "./Search.module.css";
import { useState } from "react";
import Card from "../cards/Cards";
import axios from "axios";

function SearchComponent() {
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);

  async function nameInput(e){
    const value = e.target.value;
    setName(value);
  }

  async function FetchUsers() {
    const { data } = await axios.get(
      "https://api.github.com/search/users?q=" + name
    );
    return data?.items;
  }

    async function SearchUsers(e){
      e.preventDefault();
      if(name) {
        const items = await FetchUsers();
        setUsers(items);
      } else {
       alert("Please fill the input for search....");
      }
    }
  return (
    <div className={styles.SearchContainer}>
      <div className={styles.SearchInput}>
        <input
          type="text"
          name="search"
          value={name}
          onChange={nameInput}
          placeholder="Enter Username Here..."
        ></input>
        <button type="button" className={styles.SearchBtn} onClick={SearchUsers}>
          Search
        </button>
        <div className={styles.BorderBottom}></div>
      </div>

      <div className={styles.SearchOutput}>
      {users.map((user) => {
          return <Card gitUser={user} key={user.id} />;
        })}
      </div>
    </div>
  );
}

export default SearchComponent;
