import React from "react";

export const ButtonModal = ({ toggleOpen }) => {
  return (
    <div className="flex justify-end mt-9 mb-32">
      <button
        className="max-w-72 h-12 rounded-md bg-sky-500 hover:bg-sky-700 px-5 py-3 tracking-wide leading-6 text-white"
        type="button"
        onClick={() => toggleOpen()}
        width={200}
        height={50}
      >
        SEE MORE PROJECTS
      </button>
    </div>
  );
};
