import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { IoMdClose } from "react-icons/io";
import Button from "../button";
import ProgressBar from "../progress-bar";
import ErrorCard from "../error-card";
import { FormContainer } from "./styles";
import { addTask } from "../../redux/todos/actions";

const TaskForm = ({ toogleModal }) => {
  const [task, setTask] = useState({
    completed: false,
    userId: 1,
    notes: [],
  });
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleClick = (event) => {
    event.preventDefault();

    setHasError(false);
    if (!task.title) return setHasError(true);

    setLoading(true);
    setTimeout(() => {
      toogleModal();
      dispatch(addTask(task));
    }, 1500);
  };
  return (
    <FormContainer>
      <ProgressBar loading={loading} />
      <div className="content">
        <div className="header">
          <span>Create Task</span>
          <IoMdClose cursor="pointer" onClick={toogleModal} />
        </div>
        <div>
          <label>Title</label>
          <input
            onChange={(event) =>
              setTask({
                ...task,
                title: event.target.value,
              })
            }
            placeholder="Title.."
            type="text"
            value={task.title}
          />
        </div>
        <div>
          <label>Description</label>
          <input
            onChange={(event) =>
              setTask({
                ...task,
                description: event.target.value,
              })
            }
            placeholder="Description.."
            type="text"
            value={task.description}
          />
        </div>
        <Button title="Apply" onClick={handleClick} />
        {hasError && <ErrorCard title="Please add a title." />}
      </div>
    </FormContainer>
  );
};

export default TaskForm;
