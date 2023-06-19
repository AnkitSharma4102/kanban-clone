import { DownArrow } from "../../assets/icons/DownArrow";
import { Filter } from "../../assets/icons/Filter";
import { Calendar1 } from "../../assets/icons/Calendar1";
import { Members } from "../../assets/icons/Members";
import { Menu } from "../../assets/icons/Menu";
import { Pause } from "../../assets/icons/Pause";
import styles from "./filters.module.css";

const Filters = () => {
    return (
        <div className={styles.tabsContainer}>
        <div className={styles.left}>
          <div className={styles.tab}>
            <Filter />
            <span>Filter</span>
            <DownArrow />
          </div>
          <div className={styles.tab}>
            <Calendar1 />
            <span>Today</span>
            <DownArrow />
          </div>
          <span className={styles.shareTab}>
            <div className={styles.tab}>
              <Members />
              <span>Share</span>
            </div>
          </span>
        </div>
        <div className={styles.right}>
          <div className={styles.tab}>
            <Members />
            <span>Share</span>
          </div>
          <div className={styles.separator}></div>
          <Pause />
          <Menu />
        </div>
      </div>
    )
}

export default Filters
