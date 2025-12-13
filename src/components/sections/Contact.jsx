import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { staticText } from "../../data/constants";
import { useLanguage } from "../../utils/LanguageContext";

const Contact = () => {
  const { language } = useLanguage();
  const text = staticText[language].contact;
  const form = useRef();

  const handelSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_vp2h9uj",
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "template_96rp7lr",
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "-_lzLN9RhkU57S-aA"
      )
      .then(
        (result) => {
          alert("Message Sent Successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Failed to send message: " + JSON.stringify(error));
        }
      );
  };
  return (
    <div
      id="Contact"
      className="flex flex-col justify-center relative z-10 items-center"
    >
      <div className="relative flex justify-between items-center flex-col w-full max-w-[1100px] gap-[12px]">
        <div className="text-[52px] text-center font-semibold mt-[20px] text-text_primary md:mt-[12px] md:text-[32px]">
          {text.title}
        </div>
        <div className="text-[18px] text-center max-w-[600px] text-text_secondary md:text-[16px] mb-[40px]">
          {text.desc}
        </div>
        <form
          ref={form}
          onSubmit={handelSubmit}
          className="w-[95%] max-w-[600px] flex flex-col bg-[rgba(17,25,40,0.83)] border border-[rgba(255,255,255,0.125)] p-[32px] rounded-[12px] shadow-[0_4px_24px_rgba(23,92,230,0.1)] mt-[28px] gap-[12px]"
        >
          <div className="text-[28px] mb-[6px] font-semibold text-text_primary">
            {text.title}
          </div>
          <input
            placeholder={text.email}
            name="from_email"
            className="flex-1 bg-transparent border border-text_secondary/50 outline-none text-[18px] text-text_primary rounded-[12px] py-[12px] px-[16px] focus:border-primary"
          />
          <input
            placeholder={text.name}
            name="from_name"
            className="flex-1 bg-transparent border border-text_secondary/50 outline-none text-[18px] text-text_primary rounded-[12px] py-[12px] px-[16px] focus:border-primary"
          />
          <input
            placeholder={text.subject}
            name="subject"
            className="flex-1 bg-transparent border border-text_secondary/50 outline-none text-[18px] text-text_primary rounded-[12px] py-[12px] px-[16px] focus:border-primary"
          />
          <textarea
            placeholder={text.message}
            name="message"
            rows={4}
            className="flex-1 bg-transparent border border-text_secondary/50 outline-none text-[18px] text-text_primary rounded-[12px] py-[12px] px-[16px] focus:border-primary"
          />
          <input
            type="submit"
            value={text.send}
            className="w-full text-center bg-[#ff2400] py-[13px] px-[16px] mt-[2px] rounded-[12px] border-none text-text_primary text-[18px] font-semibold cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
