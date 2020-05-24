import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TaskForm from "../task-form";
import { toogleModal } from "../../redux/modal/actions";
import { ModalContainer, ModalOverlay } from "./styles";

const Modal = () => {
  const { isModalOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  return (
    <>
      {isModalOpen && (
        <ModalContainer>
          <ModalOverlay onClick={() => dispatch(toogleModal())} />
          <TaskForm toogleModal={() => dispatch(toogleModal())} />
        </ModalContainer>
      )}
    </>
  );
};

export default Modal;
