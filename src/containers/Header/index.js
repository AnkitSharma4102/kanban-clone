import Settings from "../../components/Settings";
import UserProfile from "../../components/UserProfile";
import Search from "../../components/Search";
import styles from "./header.module.css";

const Header = () => {
    return (
        <div className={styles.headerSection}>
            <Search/>
            <div className={styles.rightHeader}>
                <Settings/>
                <UserProfile/>
            </div>
        </div>
    )
}

export default Header