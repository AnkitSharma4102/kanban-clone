import { Home } from "../../assets/icons/Home";
import { Messages } from "../../assets/icons/Messages";
import { Tasks } from "../../assets/icons/Tasks";
import { Members } from "../../assets/icons/Members";
import { Settings } from "../../assets/icons/Settings";
import styles from "./menu.module.css";

const NavMenu = () => {
  const menus = [
    {component: <Home/>, text: 'Home'},
    {component: <Messages/>, text: 'Messages'},
    {component: <Tasks/>, text: 'Tasks'},
    {component: <Members/>, text: 'Members'},
    {component: <Settings/>, text: 'Settings'}
  ]
  return (
    <ul className={styles.navMenu}>
      {
        menus.map((item)=>{
          return (
            <li key={item.text} className={styles.navMenuItem}>
              {item.component}
              <span className={styles.navItemText}>{item.text}</span>
            </li>
          )
        })
      }
    </ul>
  );
}

export default NavMenu

