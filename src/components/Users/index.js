import User1 from "../../assets/images/User1.jpg";
import User2 from "../../assets/images/User2.jpg";
import User3 from "../../assets/images/User3.jpg";
import User4 from "../../assets/images/User4.jpg";
import User5 from "../../assets/images/User5.png";
import styles from "./users.module.css";

export default function Users({ users, width, height, offset, overlap }) {
  const count = users.length > 4 ? users.length - 4 : 0;
  const usersMapping = {
    User1: User1,
    User2: User2,
    User3: User3,
    User4: User4,
    User5: User5,
  };

  return (
    <div className={styles.usersList}>
      {users.map((user, idx) => {
        const styles =
          overlap === "right"
            ? {
                zIndex: 20 - idx,
                marginLeft: offset === "4" ? "-4px" : "-8px",
              }
            : {
                zIndex: 20 + idx,
                marginRight: offset === "4" ? "-4px" : "-8px",
              };
        return (
          <img
            src={usersMapping[user]}
            alt={user}
            className={styles.profile}
            width={width}
            height={height}
            style={styles}
            key={user}
          />
        );
      })}
      {count !== 0 && (
        <span className={styles.count} style={{ width: width, height: height }}>
          +{count}
        </span>
      )}
    </div>
  );
}
