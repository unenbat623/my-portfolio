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
          className="w-[95%] max-w-[600px] flex flex-col bg-[rgba(17,25,40,0.83)] border border-[rgba(255,255,255,0.125)] p-[32px] rounded-[16px] shadow-[0_4px_24px_rgba(23,92,230,0.15)] mt-[28px] gap-[12px] backdrop-blur-[10px] bg-gradient-to-br from-[rgba(23,92,230,0.05)] to-transparent relative overflow-hidden ring-1 ring-white/10 hover:ring-primary/50 transition-all duration-500"
        >
          <div className="text-[28px] mb-[6px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-primary">
            {text.title}
          </div>
          <div className="absolute w-[200px] h-[200px] bg-primary/20 rounded-full blur-[100px] -top-[50px] -right-[50px] pointer-events-none"></div>
          <div className="absolute w-[200px] h-[200px] bg-secondary/20 rounded-full blur-[100px] -bottom-[50px] -left-[50px] pointer-events-none"></div>

          <input
            placeholder={text.email}
            name="from_email"
            className="flex-1 bg-transparent border border-text_secondary/50 outline-none text-[18px] text-text_primary rounded-[12px] py-[16px] px-[16px] focus:border-primary focus:bg-primary/5 transition-all duration-200 placeholder-text_secondary/60"
          />
          <input
            placeholder={text.name}
            name="from_name"
            className="flex-1 bg-transparent border border-text_secondary/50 outline-none text-[18px] text-text_primary rounded-[12px] py-[16px] px-[16px] focus:border-primary focus:bg-primary/5 transition-all duration-200 placeholder-text_secondary/60"
          />
          <input
            placeholder={text.subject}
            name="subject"
            className="flex-1 bg-transparent border border-text_secondary/50 outline-none text-[18px] text-text_primary rounded-[12px] py-[16px] px-[16px] focus:border-primary focus:bg-primary/5 transition-all duration-200 placeholder-text_secondary/60"
          />
          <textarea
            placeholder={text.message}
            name="message"
            rows={4}
            className="flex-1 bg-transparent border border-text_secondary/50 outline-none text-[18px] text-text_primary rounded-[12px] py-[16px] px-[16px] focus:border-primary focus:bg-primary/5 transition-all duration-200 placeholder-text_secondary/60 resize-none"
          />
          <input
            type="submit"
            value={text.send}
            className="w-full text-center bg-gradient-to-r from-primary to-[#ff2400] py-[16px] px-[16px] mt-[8px] rounded-[12px] border-none text-white text-[18px] font-bold cursor-pointer transition-all duration-300 transform hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(133,76,230,0.6)]"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
