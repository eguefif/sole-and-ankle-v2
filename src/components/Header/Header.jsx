import React from 'react';
import styled from 'styled-components';

import { COLORS, WEIGHTS, QUERIES } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import Icon from '../Icon';

const Header = () => {
  // Our site features two visual headers, but they should be
  // grouped semantically as a single header.
  return (
    <header>
      <Wrapper>
          <SmallHeaderWrapper>
              <LogoWrapper>
                <Logo />
              </LogoWrapper>
              <Icon id='shopping-bag' />
              <Icon id='search' />
              <Icon id='menu' />
          </SmallHeaderWrapper>
          <BigHeaderWrapper>
              <SuperHeader />
              <MainHeader>
                <LogoWrapper>
                    <Logo />
                </LogoWrapper>
                <Nav>
                  <NavLink href="/sale">Sale</NavLink>
                  <NavLink href="/new">New&nbsp;Releases</NavLink>
                  <NavLink href="/men">Men</NavLink>
                  <NavLink href="/women">Women</NavLink>
                  <NavLink href="/kids">Kids</NavLink>
                  <NavLink href="/collections">Collections</NavLink>
                </Nav>
              </MainHeader>
          </BigHeaderWrapper>
      </Wrapper>
    </header>
  );
};

const Wrapper = styled.div`
    border-bottom: 1px solid ${COLORS.gray[300]};
    margin: 0;
    padding: 0;
`;

const LogoWrapper = styled.div`
    margin-right: auto;
`;

const SmallHeaderWrapper = styled.div`
    display: none; 
    padding: 24px 29px 24px 32px;
    @media (max-width: ${QUERIES.tabletAndDown}) {
        display: flex;
        gap: 34px;
    }
`;

const BigHeaderWrapper = styled.div`
    @media (max-width: ${QUERIES.tabletAndDown}) {
        display: none;
    }
`;

const MainHeader = styled.div`
  padding: 0 32px;
  display: flex;
  align-items: center;
  height: 72px;
  position: relative;
`;

const Nav = styled.nav`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 48px;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
