import React from "react";


export const ButtonSendForm = ({ onClick }) => {
  
  return (
    <div>
      <button
        className="w-44 h-12 mb-2.5 rounded-md border border-white font-saira text-5xl leading-10 text-white text-left transition duration-300 ease-in-out hover:text-right"
        type="button"
        onClick={onClick}
        // onClick={handleSendFeedback}
        // onClick={() => {
        //   onClick();
        //   
        // }}
        width={50}
        height={50}
      >
        Send
      </button>
    </div>
  );
};
