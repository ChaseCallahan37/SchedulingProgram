import React, { useState } from "react";
import Modal from "react-modal";
import Form from "./Form";
import "./CardPopup.css";

Modal.setAppElement("#root");

function CardPopup(props) {
  const { item, update, save, open, onClose } = props;

  const [isOpen, setIsOpen] = useState(open);

  //   const afterOpenModal = () => {
  //     // references are now sync'd and can be accessed.
  //     subtitle.style.color = "#f00";
  //   };

  const closeModal = () => {
    setIsOpen(false);
    onClose();
  };
  const customStyles = {
    content: {
      top: "10%",
      left: "50%",
      right: "auto",
      bottom: "10%",
      marginRight: "-50%",
      transform: "translate(-50%, 0%)",
    },
  };

  return (
    <div>
      <Modal isOpen={isOpen} style={customStyles} contentLabel="Example Modal">
        <button className="button x-button" onClick={closeModal}>
          X
        </button>

        <Form item={item} update={update} />
        <button
          className="button"
          onClick={() => {
            save();
            closeModal();
          }}
        >
          Save
        </button>
      </Modal>
    </div>
  );
}

export default CardPopup;
