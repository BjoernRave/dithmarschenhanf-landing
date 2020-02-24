import Link from "next/link";
import { FC } from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  position: relative;
  margin-top: 150px;
`;

const FooterWave = styled.img`
  width: 100vw;
`;

const TopSection = styled.div`
  display: flex;
  width: 100%;
  height: 360px;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  right: 20%;
  bottom: 20%;

  @media (max-width: 840px) {
    right: 5%;
  }
`;

const Copyright = styled.span`
  color: white;
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 500px;
  text-align: center;

  @media (max-width: 840px) {
    width: 300px;
  }
`;

const FooterLink = styled.a`
  color: white;
  cursor: pointer;
  margin: 15px 0;
  font-size: 18px;

  :hover {
    text-decoration: underline;
  }
`;

const LeftSection = styled.div`
  position: absolute;
  color: white;
  bottom: 20%;
  left: 10%;
`;

const SocialLink = styled.a`
  color: white;
  margin: 0 10px;
`;

const SocialIcon = styled.img`
  width: 50px;
  height: 50px;
`;

const Footer: FC<Props> = ({}) => {
  return (
    <FooterWrapper>
      <TopSection>
        <FooterWave src="/FooterWave.png" />
        <LeftSection>
          <SocialLink
            target="_blank"
            href="https://www.instagram.com/dithmarschenhanf/"
          >
            <SocialIcon alt="instagram" src="/instagram.svg" />
          </SocialLink>
        </LeftSection>
        <RightSection>
          <Link href="/datenschutz">
            <FooterLink>Datenschutzerklärung</FooterLink>
          </Link>
          <Link href="/impressum">
            <FooterLink>Impressum</FooterLink>
          </Link>
        </RightSection>
      </TopSection>
      <Copyright>
        Copyright © 2020 Dithmarschenhanf, Alle Rechte vorbehalten
      </Copyright>
    </FooterWrapper>
  );
};

export default Footer;

interface Props {}
