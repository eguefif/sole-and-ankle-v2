import React from 'react';
import styled from 'styled-components';

import { WEIGHTS, QUERIES } from '../../constants';

import Breadcrumbs from '../Breadcrumbs';
import Select from '../Select';
import Spacer from '../Spacer';
import ShoeSidebar from '../ShoeSidebar';
import ShoeGrid from '../ShoeGrid';

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <LeftColumn>
        <Breadcrumbs>
          <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale/shoes">
            Shoes
          </Breadcrumbs.Crumb>
        </Breadcrumbs>
        <Spacer size={42} />
        <ShoeSidebar />
      </LeftColumn>
      <MainColumn>
        <WrapperMainBreadcrumbs>
            <Breadcrumbs>
              <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
              <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
              <Breadcrumbs.Crumb href="/sale/shoes">
                Shoes
              </Breadcrumbs.Crumb>
            </Breadcrumbs>
        </WrapperMainBreadcrumbs>
        <Header>
          <Title>Running</Title>
            <WrapperSelect>
              <Select
                label="Sort"
                value={sortId}
                onChange={(ev) => setSortId(ev.target.value)}
              >
                <option value="newest">Newest Releases</option>
                <option value="price">Price</option>
              </Select>
            </WrapperSelect>
        </Header>
        <Spacer size={34} />
        <ShoeGrid />
      </MainColumn>
    </Wrapper>
  );
};

const WrapperSelect = styled.div`
    @media (max-width: ${QUERIES.mobilAndDown}) {
        display: none;
    }
`

const WrapperMainBreadcrumbs = styled.div`
    display: none;
    @media (max-width: ${QUERIES.tabletAndDown}) {
        display: block;
    }
`;

const Wrapper = styled.div`
    display: flex;
    padding: 32px 0px;
    align-items: flex-start;
`;

const LeftColumn = styled.div`
    flex: 1;
    max-width: 248px;
    position: sticky;
    top: 0;

    @media (max-width: ${QUERIES.tabletAndDown}) {
    display: none;
    }
`;

const MainColumn = styled.div`
    flex: 3;
`;

const Header = styled.header`
    display: flex;
    justify-content: space-between;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`;

export default ShoeIndex;
