import React from "react";

import { ButtonClosePopup } from "@/components/Button/ButtonClosePopup.js";
import { ButtonProdject } from "@/components/Button/ButtonProdject.js";
import Heading from "../Heading";
import { classNames } from "../../helpers/index.js";

const Popup = ({ isOpen, closePopup, title, description, service, link }) => {
  return (
    <div
      className={classNames(
        "absolute w-full h-full mx-auto p-12 bg-lime-500 bg-opacity-50 transition-all duration-100",
        isOpen ? "grid" : "hidden"
      )}
      // style={{ display: isOpen ? "grid" : "none" }}
    >
      <ButtonClosePopup toggleOpen={closePopup} />
      <div className="text-right">
        <Heading
          className="text-3xl tracking-wide text-white mb-2.5"
          text={title}
        />
        {/* <h3 className="text-3xl tracking-wide text-white mb-2.5">{title}</h3> */}

        <p className="leading-6 text-white">{description}</p>
      </div>
      <Heading
        className="flex self-center text-center mx-auto text-5xl text-white"
        tag="h2"
        text={service}
      />
      {/* <h2 className="flex self-center text-center mx-auto text-5xl text-white">
        {service}
      </h2> */}
      <ButtonProdject link={link} />
    </div>
  );
};

export default Popup;
