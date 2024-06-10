import React from "react";
import Image from "next/image";
import IconDash from "../../images/dash.svg";

export const ButtonClosePopup = ({ toggleOpen }) => {
  return (
    <button
      className="flex justify-center items-center absolute top-0 left-0 w-24 h-24  bg-lime-500 transition duration-300 ease-in-out hover:bg-lime-600"
      type="button"
      onClick={toggleOpen}
      width={50}
      height={50}
    >
      <Image priority src={IconDash} alt="Dash" />
    </button>
  );
};
