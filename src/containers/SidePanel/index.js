import { MainLogo } from "../../assets/icons/MainLogo";
import { LeftArrow } from "../../assets/icons/LeftArrow";
import Menu from "../../components/Menu";
import MyProjects from "../../components/MyProjects";
import Thoughts from "../../components/Thoughts";
import styles from "./sidepanel.module.css";

const SidePanel = () => {
  return (
    <div className={styles.sidePanel}>
      <header className={styles.sidePanelHeader}>
        <span className={styles.sidePanelHeaderText}>
          <MainLogo />
          <h2 className={styles.projectLogoText}>Project M.</h2>
        </span>
        <span className={styles.arrow}>
            <LeftArrow />
        </span>
      </header>
      <div>
        <Menu />
        <MyProjects />
        <Thoughts />
      </div>
    </div>
  );
}

export default SidePanel