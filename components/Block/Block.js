import React, { useState } from "react";
import Image from "next/image";

import Popup from "../Popup/Popup.js";
import { ButtonPopup } from "../Button/ButtonPopup.js";
import Heading from "../Heading.js";

const Block = ({
  title,
  imagePath,
  link,
  width,
  height,
  background,
  padding,
  description,
  service,
}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const hundleTogglePopup = () => {
    setIsPopupOpen((prev) => !prev);
  };
  return (
    <div
      className={`relative max-w-lg h-119 mx-auto lg:mx-0 xl:w-full ${background}`}
    >
      <Popup
        isOpen={isPopupOpen}
        closePopup={hundleTogglePopup}
        title={title}
        description={description}
        service={service}
        link={link}
      />
      <div className="flex justify-between">
        <ButtonPopup toggleOpen={() => setIsPopupOpen(true)} />
        <Heading
          className="text-right mt-12 mr-12 text-3xl tracking-wide text-indigo-900"
          text={title}
        />

        {/* <h3 className="text-right mt-12 mr-12 text-3xl tracking-wide text-indigo-900">
          {title}
        </h3> */}
      </div>
      <div className={`flex justify-center ${padding}`}>
        <Image src={imagePath} alt="Circles" width={width} height={height} />
      </div>
    </div>
  );
};

export default Block;
