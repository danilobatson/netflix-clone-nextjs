import {Card} from "./card";
import Link from "next/link";
import cls from "classnames";
import styles from "./section-cards.module.css";

export const SectionCard = ({ title, size, videos = [], shouldWrapper = false, shouldScale }) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>
        {title}
      </h2>
      <div className={styles.cardWrapper}>
        {videos.map((video, idx) => {
          return (
            <Card id={idx} imgUrl={video.imgUrl} size={size} />
          )
        })}
      </div>
    </section>
  );
};
