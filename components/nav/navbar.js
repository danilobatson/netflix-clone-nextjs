import styles from "./navbar.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";


export const NavBar = ({ username }) => {
  const [showDropdown, setShowDropdown] = useState(false)
  const router = useRouter()

  const handleOnClickHome = (e) => {
    e.preventDefault();
    router.push("/")
  }

  const handleOnClickMyList = (e) => {
    e.preventDefault();
    router.push("/browse/my-list")
  }

  const handleSignout = (e) => {
    e.preventDefault();
    router.push("/login")
  }

  const handleShowDropDown = (e) => {
    e.preventDefault()
    setShowDropdown(!showDropdown)
  }
  return (

    <div className={styles.container}>
      <div className={styles.wrapper}>
        <a className={styles.logoLink} href="/">
          <div className={styles.logoWrapper}>
            <Image
              src="/static/netflix.svg"
              alt="Netflix logo"
              width="128px"
              height="34px"
            />
          </div>
        </a>

        <ul className={styles.navItems}>
          <li className={styles.navItem} onClick={handleOnClickHome}>
            Home</li>
          <li className={styles.navItem2} onClick={handleOnClickMyList}>
            My List</li>
        </ul>

        <nav className={styles.navContainer}>
          <div>
            <button className={styles.usernameBtn} onClick={handleShowDropDown}>
              <p className={styles.username}>{username}</p>
              {/* Expand more icon */}
              <Image
                src={"/static/expand_more.svg"}
                alt="Expand dropdown"
                width="24px"
                height="24px"
              />
            </button>

            {showDropdown && (<>
              <div className={styles.navDropdown}>
                <div>
                  <Link href="/login">
                    <a className={styles.linkName} onClick="/login">Sign Out</a>
                  </Link>
                  <div className={styles.lineWrapper}>
                  </div>
                </div>
              </div>
            </>)}

          </div>
        </nav>
      </div>
    </div>
  )
}
