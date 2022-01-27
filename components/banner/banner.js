import Image from "next/image"
import styles from "./banner.module.css";

export const Banner = ({ imgUrl, title, subtitle }) => {
  const handleOnPlay = () => (
    alert('Handle On Play ')
  )
  return (
    <>
    <h3>{title}</h3>
    <h5>{subtitle}</h5>
      <button onClick={handleOnPlay}>Play Button</button>
    <div style={{ backgroundImage: `url(${imgUrl})`, width: '100%', height: '100%', position: 'absolute', backgroundSize: 'cover', backgroundPosition: '50% 50%' }}></div>
  </>
    )
}
