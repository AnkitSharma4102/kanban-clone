import { Calendar2 } from "../../assets/icons/Calendar2";
import { MessageQuestion } from "../../assets/icons/MessageQuestion";
import { Notification } from "../../assets/icons/Notification";
import styles from "./settings.module.css";

const Settings = () => {
    return (
        <span className={styles.settingsMenu}>
            <Calendar2/>
            <MessageQuestion />
            <Notification />
        </span>
    )
}

export default Settings