import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ViewHeader, Card, Spinner } from "../../components";
import { getTodos } from "../../api/todos";
import {
  getTodosError,
  getTodosSuccess,
  getTodosLoading,
} from "../../redux/todos/actions";

const Todos = () => {
  const { todos, loading, hasFailed } = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const addFavAttr = (list) => list.map((elem) => ({ ...elem, isFav: false }));

  useEffect(() => {
    const setupView = async () => {
      dispatch(getTodosLoading());
      try {
        const todos = await getTodos();
        const todosWithFav = addFavAttr(todos);
        dispatch(getTodosSuccess(addFavAttr(todosWithFav)));
      } catch (err) {
        dispatch(getTodosError());
        console.error(err);
      }
    };
    if (!todos.length) setupView();
  }, []);
  return (
    <>
      <ViewHeader title="Todos list" />
      {loading && <Spinner />}
      {!loading && todos.map((todo) => <Card todo={todo} key={todo.id} />)}
      {hasFailed && "nope"}
    </>
  );
};

export default Todos;
