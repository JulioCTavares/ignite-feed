import styles from "./Avatar.module.css";

const Avatar = ({ hasBorder = true, imgUrl }) => {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={imgUrl}
    />
  );
};

export default Avatar;
