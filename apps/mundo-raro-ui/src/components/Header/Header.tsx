import React, { FC } from "react";
import FaceBookIcon from "../Icons/FacebookIcon";
import MainLogo from "../Icons/MainLogo";
import TiktokIcon from "../Icons/TiktokIcon";
import WhatsAppIcon from "../Icons/WhatsAppIcon";
import styles from "./Header.module.css";

const Logo: FC = () => {
  return (
    <div className={styles.LogoBox}>
      <MainLogo />
      <h1>Benymar</h1>
    </div>
  );
};

const IconsItems: FC = () => {
  return (
    <div className={styles.IconsItemsBox}>
      <FaceBookIcon />
      <TiktokIcon />
      <WhatsAppIcon />
    </div>
  );
};

const Nav: FC = () => {
  return (
    <nav>
      <ul className={styles.NavItemsBox}>
        <li>Inicio</li>
        <li>Guías</li>
        <li>
          <IconsItems />
        </li>
      </ul>
    </nav>
  );
};

const Header: FC = () => {
  return (
    <header className={styles.HeaderBox}>
      <Logo />
      <div className={styles.NavBox}>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
