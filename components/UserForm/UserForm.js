import React, { useState } from "react";
import { toast } from "react-toastify";
import { ButtonCloseModal } from "../Button/ButtonCloseModal.js";
import { ButtonSendForm } from "../Button/ButtonSendForm.js";
import { classNames } from "../../helpers/index.js";

export const UserForm = ({ isOpen, closeModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    // alert("Thanks for your feedback!");

    e.preventDefault();

    try {
      const response = await fetch("/api/formSubmit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form submitted successfully");
        toast.success("Thanks for your feedback!");

        closeModal();

        setFormData({
          name: "",
          email: "",
          tel: "",
          message: "",
        });
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-lime-500 bg-opacity-50 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div
          className={classNames(
            "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-[409px] bg-slate-400 p-5",
            isOpen ? "block" : "none"
          )}
          // style={{ display: isOpen ? "block" : "none" }}
        >
          <>
            <div className="flex justify-between">
              <ButtonSendForm onClick={handleSubmit} />
              <ButtonCloseModal toggleOpen={closeModal} />
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-2.5 mt-1"
            >
              <label>
                <input
                  className="w-full h-12 p-2.5 font-lato hover:outline hover:outline-2 hover:outline-offset-2 hover:outline-white"
                  type="text"
                  name="name"
                  placeholder="Your Name..."
                  pattern="^(?! )[^0-9]+$"
                  title="Name may contain only letters, apostrophe, dash and spaces."
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </label>
              <label>
                <input
                  className="w-full h-12 p-2.5 font-lato hover:outline hover:outline-2 hover:outline-offset-2 hover:outline-white"
                  type="email"
                  name="email"
                  placeholder="Your Email ..."
                  pattern="^[^\s]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                  title="Email may contain letters, numbers, an apostrophe, and must be followed by '@' domain name '.' domain suffix."
                  value={formData.email}
                  onChange={handleChange}
                />
              </label>
              <label>
                <input
                  className="w-full h-12 p-2.5 font-lato hover:outline hover:outline-2 hover:outline-offset-2 hover:outline-white"
                  type="tel"
                  name="tel"
                  placeholder="Your Contact Number +XXXXXXX..."
                  pattern="^\+\d{7,}$"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
                  value={formData.tel}
                  onChange={handleChange}
                />
              </label>
              <label>
                <textarea
                  className="w-full h-[109px] p-2.5 font-lato hover:outline hover:outline-2 hover:outline-offset-2 hover:outline-white"
                  name="message"
                  rows="8"
                  placeholder="Enter you message here..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </label>
            </form>
          </>
        </div>
      </div>
    </div>
  );
};
