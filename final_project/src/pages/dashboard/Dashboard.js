import Cards from "../../components/cards/Cards";
import styles from "./Dashboard.module.css";
import { UserContext } from "../../context/UserInfo";
import { useContext } from "react";
import "./Dashboard.module.css";
import Navigation from "../../components/header/Navigation";
import LoadingRing from "../../components/Loading/Loading";

function Dashboard() {
  const { gitUsers, loading, error, perPage, setPerPage } =
    useContext(UserContext);
  return (
    <>
      <Navigation />
      {error && <h1>{error}</h1>}
          {loading ? (
            <LoadingRing/>
          ) : (
            gitUsers.map((gitUser) => {
              return <Cards key={gitUser.id} gitUser={gitUser}/>;
            })
          )}
      
      <div className={styles.LoadBtnContainer}>
        <button className={styles.LoadBtn}  onClick={() => {
            setPerPage(perPage + 20);
          }}>Load More</button>
      </div>
    </>
  );
}
export default Dashboard;
