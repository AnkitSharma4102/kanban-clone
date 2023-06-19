import React from "react";
import { dummyProjects } from "../../dummyData";
import { Bullet } from "../../assets/icons/Bullet";
import { AddSquare } from "../../assets/icons/AddSquare";
import { Menu1 } from "../../assets/icons/Menu1";
import styles from "./myProjects.module.css";

const MyProjects = () => {
    return (
        <div>
            <header className={styles.myProjects}>
                <span className={styles.myProjectsText}>MY PROJECTS</span>
                <AddSquare />
            </header>
            <ul className={styles.myProjectsList}>
            {
                dummyProjects.map((project) => (
                    <li
                        key={project.id}
                        className={`${styles.projectItem} ${
                            project.id === dummyProjects[0].id && styles.active
                          }`}
                    >
                        <span className={styles.projectInfo}>
                            <Bullet color={project.color} />
                            <span className={styles.projectName}>
                                {project.name}
                            </span>
                        </span>
                            {project.id === dummyProjects[0]?.id && (
                                <span className={styles.activeIcon}>
                                    <Menu1 />
                                </span>
                            )}
                    </li>
            ))}
            </ul>
        </div>
    )
}

export default MyProjects