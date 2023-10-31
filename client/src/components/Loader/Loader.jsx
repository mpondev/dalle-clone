import styles from './Loader.module.scss';

function Spinner() {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}></div>
    </div>
  );
}

export default Spinner;
