import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ViewHeader, Card } from "../../components";

const Todos = () => {
  const { todos } = useSelector((state) => state.todos);

  const [favsTodos, setFavsTodos] = useState([]);


  useEffect(() => {
    const favs = todos.filter((todo) => todo.isFav === true );
    setFavsTodos(favs);
  }, [todos]);
  return (
    <>
      <ViewHeader title="Favorites" count={favsTodos.length} />
      {favsTodos.map((todo) => (
        <Card todo={todo} key={todo.id} />
      ))}
      {!favsTodos.length && 'No Favorite Taks'}
    </>
  );
};

export default Todos;
