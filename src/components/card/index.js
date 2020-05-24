import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  FaRegStar,
  FaRegEdit,
  FaRegTrashAlt,
  FaRegCheckCircle,
  FaRegTimesCircle,
} from "react-icons/fa";
import {
  addFav,
  addNote,
  completeTask,
  removeTask,
} from "../../redux/todos/actions";
import {
  CardContainer,
  CardHeader,
  CardBody,
  CardRow,
  CardFooter,
} from "./styles";
import Button from "../button";

const Card = ({ todo: { title, completed, isFav, id, notes = [] } = {} }) => {
  const dispatch = useDispatch();

  const [animateRemove, setAnimateRemove] = useState(false);
  const [note, setNote] = useState("");

  const removeItem = () => {
    setAnimateRemove(true);
    setTimeout(() => dispatch(removeTask(id)), 1000);
  };

  const handleNoteAdd = () => {
    dispatch(addNote({ id, note }));
    setNote("");
  };

  const isOdd = (number) => number % 2;

  return (
    <CardContainer animateRemove={animateRemove}>
      <CardHeader isFav={isFav}>
        <div>{title}</div>
        <div className="icons-container">
          <FaRegEdit />
          <FaRegTrashAlt onClick={removeItem} />
          <FaRegStar onClick={() => dispatch(addFav(id))} />
        </div>
      </CardHeader>
      <CardBody>
        <CardRow grayRow>
          <span>Completed: </span>
          {completed ? <FaRegCheckCircle /> : <FaRegTimesCircle />}
        </CardRow>
        <CardRow>
          <span>Description: </span>
        </CardRow>
        {!notes.length && (
          <CardRow grayRow>
            <span>Notes: Empty</span>
          </CardRow>
        )}
        {notes.map((note, index) => (
          <CardRow grayRow={!isOdd(index)}>
            {`Note ${index + 1}: ${note}`}
          </CardRow>
        ))}
      </CardBody>
      <CardFooter>
        <div>
          <input
            onChange={(event) => setNote(event.target.value)}
            placeholder="Note text here.."
            type="text"
            value={note}
          />
          <Button
            title="Add Note"
            onClick={handleNoteAdd}
            disabled={!note.length}
          />
        </div>
        <Button
          disabled={completed}
          onClick={() => dispatch(completeTask(id))}
          title={completed ? "Task Completed" : "Complete Task"}
        />
      </CardFooter>
    </CardContainer>
  );
};

export default Card;
