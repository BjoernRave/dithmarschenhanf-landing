import Link from "next/link";
import { FC } from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  margin-top: 150px;
  position: relative;
  background: url("/FooterWave.svg");
  background-repeat: no-repeat;
  background-size: cover;
`;

const TopSection = styled.div`
  display: flex;
  padding-top: 150px;
  padding-bottom: 100px;
  justify-content: space-between;
  margin: 0 20%;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 840px) {
    margin-top: 20px;
    align-items: center;
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
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SocialLink = styled.a`
  color: white;
  margin: 0 10px;
`;

const SocialIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

const EmailLink = styled.a`
  color: white;
  cursor: pointer;
  margin-top: 20px;
`;

const Footer: FC<Props> = ({}) => {
  return (
    <FooterWrapper>
      <TopSection>
        {/* <FooterWave src="/FooterWave.svg" /> */}
        <LeftSection>
          <SocialLink
            target="_blank"
            href="https://www.instagram.com/dithmarschenhanf/"
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <SocialIcon alt="instagram" src="/instagram.svg" />
              @Dithmarschenhanf
            </div>
          </SocialLink>
          <EmailLink href="mailto:info@dithmarschenhanf.de">
            info@dithmarschenhanf.de
          </EmailLink>
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
