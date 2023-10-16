import styles from './Header.module.css';

import igniteLogo from "./../Assets/Ignite simbol.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logotipo ignite" />
    </header>
  )
}

export default Header