import * as styles from "./Organisation.module.css"

function Organisations({orgImg, orgName}) {
    return (
        <div className={styles.orgContainer}>
          <h1>{orgName}</h1>
          <img
            src={orgImg}
            alt="org avatar"
          ></img>
        </div>
    
    );
  }
  
  export default Organisations;