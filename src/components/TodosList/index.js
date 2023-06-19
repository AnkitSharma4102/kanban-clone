import { Droppable } from "react-beautiful-dnd";
import { Bullet } from "../../assets/icons/Bullet";
import { AddSquare } from "../../assets/icons/AddSquare";
import TodoItem from "../TodoItem";
import styles from "./todosList.module.css";

const TodosList = ({ todosList, type, id }) => {
  const colors = {
    'todo' : '#5030E5',
    'inprogress': '#FFA500',
    'completed': '#76A5EA'
  }
  const titles = {
    'todo': 'To Do',
    'inprogress': 'On Progress',
    'completed': 'Done'
  }
    return (
        <div className={styles.todosContainer}>
          <div
            className={`${styles.todoHeader} ${styles[type]}`}
          >
            <Bullet color={colors[type]}/>
            <span>{titles[type]}</span>
            <span className={styles.count}>{todosList.length}</span>
            {type === "todo" && (
              <span className={styles.addTodoButton}>
                <AddSquare />
              </span>
            )}
          </div>
          <Droppable droppableId={id}>
            {(provided, snapshot) => {
              return (
                <div
                  className={styles.droppableArea}
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  isDraggingOver={snapshot.isDraggingOver}
                >
                  {todosList.map((todo, index) => (
                    <TodoItem
                      key={todo.id}
                      id={todo.id.toString()}
                      todo={todo}
                      index={index}
                    />
                  ))}
                  {provided.placeholder}
                </div>
              );
            }}
          </Droppable>
        </div>
    )
}

export default TodosList