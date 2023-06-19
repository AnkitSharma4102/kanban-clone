import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { dummyTasks } from "../../dummyData";
import TodosList from "../TodosList";
import styles from "./todosBoard.module.css";

export default function TodosContainer() {
  const [todoTasks, setTodoTasks] = useState(
    dummyTasks.filter((todo) => todo.status === "todo")
  )
  const [inProgressTasks, setInProgressTasks] = useState(
    dummyTasks.filter((todo) => todo.status === "inprogress")
  )

  const [completedTasks, setCompletedTasks] = useState(
    dummyTasks.filter((todo) => todo.status === "completed")
  )

  const findTaskById = (id, array) => {
    return array.find((todo) => todo.id === id);
  };

  const removeTaskById = (id, array) => {
    return array.filter((todo) => todo.id !== id);
  };

  const handleDrag = (result) => {
    const { destination, source, draggableId } = result;

    if (source.droppableId === destination.droppableId) return;

    if (source.droppableId === "1") {
      setTodoTasks(removeTaskById(draggableId, todoTasks));
    } else if (source.droppableId === "2") {
      setInProgressTasks(removeTaskById(draggableId, inProgressTasks));
    } else {
      setCompletedTasks(removeTaskById(draggableId, completedTasks));
    }

    const todo = findTaskById(draggableId, [
      ...todoTasks,
      ...inProgressTasks,
      ...completedTasks,
    ]);

    if (destination.droppableId === "1") {
      setTodoTasks([
        { ...todo, status: "todo" },
        ...todoTasks,
      ]);
    } else if (destination.droppableId === "2"){
      setInProgressTasks([
        { ...todo, status: "inprogress" },
        ...inProgressTasks,
      ]);
    } else {
      setCompletedTasks([
        { ...todo, status: "completed" },
        ...completedTasks,
      ])
    }
  };

  return (
    <DragDropContext onDragEnd={handleDrag}>
      <div className={styles.todosContainerMain}>
        <TodosList todosList={todoTasks} type="todo" id={"1"} />
        <TodosList todosList={inProgressTasks} type="inprogress" id={"2"} />
        <TodosList todosList={completedTasks} type="completed" id={"3"} />
      </div>
    </DragDropContext>
  );
}
