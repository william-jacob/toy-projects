import React from "react";
import styles from "../../styles/shared/Menu.module.css";
import { Link } from "react-router-dom";
import { TiHome } from "react-icons/ti"; //유튜브 홈
import { FaRegCompass } from "react-icons/fa"; //유튜브 나침반
import { MdSubscriptions } from "react-icons/md"; //유튜브 구독

const Menu = ({ activeMenu }) => {
  console.log("activeMenu:", activeMenu);

  return (
    <div className={styles.menu}>
      <Link
        to="/"
        className={activeMenu === "home" ? styles.focused : styles.link}
      >
        <TiHome className={styles.icon} />홈
      </Link>
      <Link
        to="/explore"
        className={activeMenu === "explore" ? styles.focused : styles.link}
      >
        <FaRegCompass className={styles.icon} />
        탐색
      </Link>
      <Link
        to="/subscription"
        className={activeMenu === "subscription" ? styles.focused : styles.link}
      >
        <MdSubscriptions className={styles.icon} />
        구독
      </Link>
    </div>
  );
};

export default Menu;
