import Link from 'next/link'
import { FC, useState } from 'react'
import Headroom from 'react-headroom'
import styled from 'styled-components'

const Logo = styled.img`
  width: auto;
  height: 80px;
  cursor: pointer;
  padding: 5px 0;
`

const NavWrapper = styled.header`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: ${({ theme }) => theme.boxShadows.normal};
  padding: 0 20px;
`

const NavItem = styled.span`
  font-size: 20px;
  color: black;
  cursor: pointer;
  margin: 0 25px;

  @media (max-width: 1000px) {
    margin: 0 15px;
  }

  @media (max-width: 767px) {
    margin: 20px 0;
  }
`

const Actions = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 767px) {
    display: none;
  }
`

const MenuButton = styled.img`
  cursor: pointer;
  display: none;
  height: 30px;
  width: 30px;

  @media (max-width: 767px) {
    display: block;
  }
`

const Menu = styled.nav`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;

  box-shadow: ${({ theme }) => theme.boxShadows.normal};
`

const Dimmer = styled.div`
  position: fixed;
  height: 200vh;
  width: 200vw;
  background-color: black;
  z-index: 4000;
  top: 0;
  left: 0;
  opacity: 0.3;
`

const ExLink = styled.a`
  text-decoration: none;

  @media (max-width: 767px) {
    margin: 10px 0;
  }
`

const CloseIcon = styled.img`
  height: 30px;
  width: 30px;

  position: fixed;
  top: 10px;
  right: 12px;
  cursor: pointer;
`

const Navigation = () => (
  <>
    {/* <Link href='/aktuelles'>
      <NavItem>Aktuelles</NavItem>
    </Link> */}
    <Link href='/verkaufstellen'>
      <NavItem>Verkaufstellen</NavItem>
    </Link>
    <Link href='/produkte'>
      <NavItem>Produkte</NavItem>
    </Link>
    <Link href='/erstesjahr'>
      <NavItem>Das erste Jahr</NavItem>
    </Link>
    <Link href='/wir'>
      <NavItem>Über Uns</NavItem>
    </Link>

    <Link href='/galerie'>
      <NavItem>Galerie</NavItem>
    </Link>
    <Link href='/warumhanf'>
      <NavItem>Warum Hanf?</NavItem>
    </Link>
    <ExLink href=' mailto:info@dithmarschenhanf.de'>
      <NavItem>Kontakt</NavItem>
    </ExLink>
  </>
)

const Nav: FC<Props> = ({}) => {
  const [isMenu, setIsMenu] = useState(false)
  return (
    <>
      <Headroom>
        <NavWrapper>
          <Link href='/'>
            <Logo src='/logo.png' alt='Dithmarschenhanf Logo' />
          </Link>
          <Actions>
            <Navigation />
          </Actions>
          <MenuButton
            onClick={() => setIsMenu(true)}
            alt='open-mobile-menu'
            src='/menu.svg'
          />
        </NavWrapper>
      </Headroom>
      {isMenu && (
        <>
          <Menu onClick={() => setIsMenu(false)}>
            <CloseIcon
              onClick={() => setIsMenu(false)}
              src='/x.svg'
              alt='menu-close-button'
            />
            <Navigation />
          </Menu>
          <Dimmer onClick={() => setIsMenu(false)} />
        </>
      )}
    </>
  )
}

export default Nav

interface Props {}
