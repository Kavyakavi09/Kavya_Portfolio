import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from './FooterStyles';
import Button from '../../styles/GlobalComponents/Button';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:7708475752'>7708475752</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:kavyakaruppusamy09@gmail.com'>
            contact@kavyakaruppusamy09@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            {' '}
            <a
              href='https://drive.google.com/file/d/154ULCDAI8iQOs4RdUeJzdZoRFnR8k_2r/view?usp=sharing'
              target='_blank'>
              <Button>View Resume</Button>
            </a>
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href='https://github.com/Kavyakavi09' target={'_blank'}>
            <AiFillGithub size='3rem' />
          </SocialIcons>
          <SocialIcons
            href='https://www.linkedin.com/in/kavyakaruppusamy/'
            target={'_blank'}>
            <AiFillLinkedin size='3rem' />
          </SocialIcons>
          <SocialIcons
            href='https://www.instagram.com/kavyakaruppusamy09/'
            target={'_blank'}>
            <AiFillInstagram size='3rem' />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
