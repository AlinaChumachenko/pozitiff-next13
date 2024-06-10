import React, { useState } from "react";
import { UserForm } from "../UserForm/UserForm.js";
import { ButtonModal } from "../Button/ButtonModal.js";

export const ModalBlock = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleOpenModal = () => {
    setIsOpenModal((prev) => !prev);
  };
  return (
    <div>
      <ButtonModal toggleOpen={() => setIsOpenModal(true)} />
      <UserForm isOpen={isOpenModal} closeModal={handleOpenModal} />
    </div>
  );
};
