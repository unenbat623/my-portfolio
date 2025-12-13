import React, { useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { staticText } from "../../data/constants";
import { useLanguage } from "../../utils/LanguageContext";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 32px;
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;
const ContactTitle = styled.div`
  font-size: 28px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;
const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;
const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;
const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: #ff2400;
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;

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
    <Container id="Contact">
      <Wrapper>
        <Title>{text.title}</Title>
        <Desc
          style={{
            marginBottom: "40px",
          }}
        >
          {text.desc}
        </Desc>
        <ContactForm ref={form} onSubmit={handelSubmit}>
          <ContactTitle>{text.title}</ContactTitle>
          <ContactInput placeholder={text.email} name="from_email" />
          <ContactInput placeholder={text.name} name="from_name" />
          <ContactInput placeholder={text.subject} name="subject" />
          <ContactInputMessage placeholder={text.message} name="message" rows={4} />
          <ContactButton type="submit" value={text.send} />
        </ContactForm>
      </Wrapper>
    </Container>
  );
};

export default Contact;
