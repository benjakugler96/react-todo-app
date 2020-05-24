import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ViewHeader, Card } from "../../components";

const Todos = () => {
  const { todos } = useSelector((state) => state.todos);

  const [incompleteTodos, setIncompleteTodos] = useState([]);


  useEffect(() => {
    const incTodos = todos.filter((todo) => todo.completed !== true );
    setIncompleteTodos(incTodos);
  }, [todos]);
  return (
    <>
      <ViewHeader title="Incomplete" />
      {incompleteTodos.map((todo) => (
        <Card todo={todo} key={todo.id} />
      ))}
      {!incompleteTodos.length && 'No Incomplete Taks'}
    </>
  );
};

export default Todos;
