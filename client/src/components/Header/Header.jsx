import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="logo" />
      </Link>
      <Link to="/create-post" className={styles.create}>
        Create
      </Link>
    </header>
  );
}

export default Header;
