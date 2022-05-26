import * as styles from "./NotFound.module.css";

function NotFound() {
  return (
    <div className={styles.PAGE_NOT_FOUND}>
      <h1 className={styles.Not_Found_Text}>
        PAGE NOT FOUND <span>:(</span>
      </h1>
    </div>
  );
}

export default NotFound;
