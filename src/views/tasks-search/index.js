import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ViewHeader, Card } from "../../components";

const TasksSearch = () => {
  const { taskTitle } = useParams();
  const { todos } = useSelector((state) => state.todos);

  const [list, setList] = useState([]);

  useEffect(() => {
    setList(
      todos.filter((todo) =>
        todo.title.toLowerCase().includes(taskTitle.toLowerCase())
      )
    );
  }, [taskTitle, todos]);

  return (
    <>
      <ViewHeader title={`Results for: ${taskTitle}`} count={list.length} />
      {!list.length && "No Results"}
      {list.map((todo) => (
        <Card todo={todo} key={todo.id} />
      ))}
    </>
  );
};

export default TasksSearch;
