import Link from 'next/link'
import React, { FC } from 'react'
import styled from 'styled-components'
import Wave from './Wave'

export const FooterHeight = 386

const Wrapper = styled.div`
  margin-top: 50px;
  position: relative;
`

const Content = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: space-around;
  margin-top: -20px;
  padding-bottom: 50px;

  @media (max-width: 767px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`

const SocialSection = styled.div`
  color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const SocialLink = styled.a`
  color: white;
  margin: 0 10px;
`

const ItemSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 767px) {
    align-items: center;
  }
`

const FooterLink = styled.a`
  color: white;
  cursor: pointer;
  margin: 15px 0;
  font-size: 18px;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`

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
`

const SocialIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`

const EmailLink = styled.a`
  color: white;
  cursor: pointer;
  margin-top: 20px;
`

const Footer: FC<Props> = (props) => {
  return (
    <Wrapper {...props}>
      <Wave color='#01621f' />
      <Content>
        <SocialSection>
          <div>
            <SocialLink
              rel='noreferrer'
              target='_blank'
              href='https://www.facebook.com/Dithmarschenhanf.de'>
              <SocialIcon alt='facebook' src='/facebook.svg' />
            </SocialLink>
            <SocialLink
              rel='noreferrer'
              target='_blank'
              href='https://www.instagram.com/dithmarschenhanf/'>
              <SocialIcon alt='instagram' src='/instagram.svg' />
            </SocialLink>
          </div>
          <EmailLink href='mailto:info@dithmarschenhanf.de'>
            info@dithmarschenhanf.de
          </EmailLink>
        </SocialSection>

        <ItemSection>
          <Link href='/datenschutz'>
            <FooterLink>Datenschutzerklärung</FooterLink>
          </Link>
          <Link href='/impressum'>
            <FooterLink>Impressum</FooterLink>
          </Link>
        </ItemSection>
      </Content>
      <Copyright>
        Copyright © 2020 Dithmarschenhanf, Alle Rechte vorbehalten
      </Copyright>
    </Wrapper>
  )
}

export default Footer

interface Props {}
