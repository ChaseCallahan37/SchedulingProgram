import React, { useState } from "react";
import Modal from "react-modal";
import Form from "./Form";

function CardPopup(props) {
  const [modalIsOpen, setIsOpen] = useState(true);

  const { item, update, save } = props;

  const handleUpdate = (data) => {
    update(data);
  };

  //   const afterOpenModal = () => {
  //     // references are now sync'd and can be accessed.
  //     subtitle.style.color = "#f00";
  //   };

  const closeModal = () => {
    setIsOpen(false);
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Form item={item} update={handleUpdate} />
      </Modal>
    </div>
  );
}

export default CardPopup;
