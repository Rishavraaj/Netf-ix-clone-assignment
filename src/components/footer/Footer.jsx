import React from "react";
import styled from "styled-components";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterDetails>
        <Details>
          <span>Details</span>
          <span>Rishav Raj</span>
          <span>rishavrajpatna7@gmail.com</span>
          <span>+91 7667126993</span>
          <span></span>
        </Details>
        <TechStack>
          <span>Tech stack</span>

          <span>React js / vite</span>
          <span>javaScript</span>
          <span>Redux</span>
          <span>Redux Toolkit</span>
        </TechStack>
        <Socialhandles>
          <span>Social handle</span>

          <span>
            {" "}
            <AiFillGithub size={23} />
          </span>
          <span>
            {" "}
            <AiFillLinkedin size={23} />{" "}
          </span>
          <span>
            <AiOutlineWhatsApp size={23} />{" "}
          </span>
        </Socialhandles>
      </FooterDetails>
      <Copyright>
        {" "}
        <span>styled and devloped by rishav raj </span>
      </Copyright>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  padding: 0 auto;
  border-top: 1px solid gray;
`;

const FooterDetails = styled.div`
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  span {
    cursor: pointer;
  }
  span:first-child {
    font-weight: 700;
    margin-bottom: 30px;
  }

  @media (max-width: 768px) {
    margin-bottom: 50px;
  }
`;

const TechStack = styled(Details)``;

const Socialhandles = styled(Details)``;

const Copyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  padding: 30px 0;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  border-top: 1px solid gray;
`;
