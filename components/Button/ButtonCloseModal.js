import React from "react";
import Image from "next/image";
import IconClose from "../../images/closex.svg";

export const ButtonCloseModal = ({ toggleOpen }) => {
  return (
    <div>
      <button type="button" onClick={toggleOpen} className="w-3.5 h-12">
        <Image
          className="filter grayscale"
          priority
          src={IconClose}
          alt="Close"
        />
      </button>
    </div>
  );
};
