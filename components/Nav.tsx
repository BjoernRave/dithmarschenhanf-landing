import Link from "next/link";
import { FC } from "react";
import Headroom from "react-headroom";
import styled from "styled-components";

const Logo = styled.img`
  width: auto;
  height: 32%;
  cursor: pointer;
  position: absolute;
  top: 5%;
  left: 1%;
`;

const TopWave = styled.img`
  width: 100vw;
`;

const NavWrapper = styled.header`
  position: relative;
`;

const NavItem = styled.span`
  font-size: 20px;
  color: black;
  cursor: pointer;
  margin: 0 25px;
`;

const Actions = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  top: 8%;
  right: 8%;
`;

const Nav: FC<Props> = ({}) => {
  return (
    <Headroom>
      <NavWrapper>
        <TopWave src="/TopWave.png" />
        <Link href="/">
          <Logo src="/logo_sin.png" alt="logo" />
        </Link>
        <Actions>
          <Link href="/wir">
            <NavItem>Über Uns</NavItem>
          </Link>
          <Link href="/aktuelles">
            <NavItem>Aktuelles</NavItem>
          </Link>
          <a
            style={{ textDecoration: "none" }}
            href=" mailto:info@dithmarschenhanf.de"
          >
            <NavItem>Kontakt</NavItem>
          </a>
          <Link href="/galerie">
            <NavItem>Galerie</NavItem>
          </Link>
        </Actions>
      </NavWrapper>
    </Headroom>
  );
};

export default Nav;

interface Props {}
