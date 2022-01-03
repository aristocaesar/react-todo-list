import { useState } from "react";
import BackDrop from "./BackDrop";
import Modal from "./Modal";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function removeHandler() {
    if (!modalIsOpen) {
      setModalIsOpen(true);
    }
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  function confirmModal() {
    console.log("ok");
  }

  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div className="actions">
        <button className="btn" onClick={removeHandler}>
          Remove
        </button>
      </div>
      {modalIsOpen && <BackDrop />}
      {modalIsOpen && <Modal onCancel={closeModal} onConfirm={confirmModal} />}
    </div>
  );
}

export default Todo;
