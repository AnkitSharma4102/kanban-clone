import { DownArrow } from "../../assets/icons/DownArrow";
import UserAvatar from "../../assets/images/UserAvatar.jpg";
import styles from "./userProfile.module.css";

const UserProfile = () => {
    return (
        <div className={styles.userProfileSection}>
            <div className={styles.userInfo}>
                <span className={styles.userName}>Anima Agrawal</span>
                <span className={styles.userAddress}>U.P, India</span>
            </div>
            <img
                src={UserAvatar}
                alt="Anima Agrawal"
                width="38px"
                height="38px"
                className={styles.userImage}
            />
            <DownArrow />
        </div>
    )
}

export default UserProfile;