import React from "react";
import Image from "next/image";
import IconPlus from "../../images/plus.svg";

export const ButtonPopup = ({ toggleOpen }) => {
  return (
    <div>
      <button
        className="flex justify-center items-center w-24 h-24 bg-lime-500 transition duration-300 ease-in-out hover:bg-lime-600"
        type="button"
        onClick={() => toggleOpen()}
        width={50}
        height={50}
      >
        <Image priority className="w-6 h-6" src={IconPlus} alt="Plus" />
      </button>
    </div>
  );
};
