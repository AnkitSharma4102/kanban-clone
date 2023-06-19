import ProjectHeader from "../../components/ProjectHeader";
import Filters from "../../components/Filters";
import TodosBoard from "../../components/TodosBoard";
import styles from "./mainContent.module.css";

export default function MainContent() {
  return (
  <div className={styles.container}>
    <ProjectHeader />
    <Filters />
    <TodosBoard />
  </div>
  )
}
