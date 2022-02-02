import { useState } from "react";
import Image from "next/image";

import cls from "classnames";
import { motion } from "framer-motion";

import styles from "./card.module.css";

export const Card = ({ imgUrl, size = 'medium'}) => {

  const [imgSrc, setImgSrc] = useState(imgUrl)

  const classMap = {
    large: styles.lgItem,
    medium: styles.mdItem,
    small: styles.smItem,
  }

  const handleOnError = () => {
    setImgSrc(
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1340&q=80"
    );
  }
  
  return (
    <div className={styles.container}>
      <div className={classMap[size]}>
        <Image src={imgSrc} onError={handleOnError} layout='fill' alt="img" className={styles.cardImg}/>
      </div>
    </div>
  )
}
