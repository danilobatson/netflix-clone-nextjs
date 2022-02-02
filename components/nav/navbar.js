import styles from "./navbar.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

export const NavBar = ({ username }) => {
  return (

    <div className={styles.container}>
      <div className={styles.wrapper}>
        <a className={styles.logoLink} href="/">
          <div className={styles.logoWrapper}>
            Netflix
          </div>
        </a>

        <ul className={styles.navItems}>
          <li className={styles.navItem}>Home</li>
          <li className={styles.navItem2}> My List</li>
        </ul>
        <nav className={styles.navContainer}>
          <div>
            <button className={styles.usernameBtn}>
              <p className={styles.username}>{username}</p>
              {/* Expand more icon */}
              {/* <Image
                src={"/static/expand_more.svg"}
                alt="Expand dropdown"
                width="24px"
                height="24px"
              /> */}
            </button>
            <div className={styles.navDropdown}>
              <div>
                <a className={styles.linkName} href="">Sign Out</a>
                <div className={styles.lineWrapper}>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}
