import React from 'react';
import styled from 'styled-components';

import { COLORS, WEIGHTS } from '../../constants';
import { formatPrice, pluralize, isNewShoe } from '../../utils';
import Spacer from '../Spacer';

const ShoeCard = ({
  slug,
  name,
  imageSrc,
  price,
  salePrice,
  releaseDate,
  numOfColors,
}) => {
  // There are 3 variants possible, based on the props:
  //   - new-release
  //   - on-sale
  //   - default
  //
  // Any shoe released in the last month will be considered
  // `new-release`. Any shoe with a `salePrice` will be
  // on-sale. In theory, it is possible for a shoe to be
  // both on-sale and new-release, but in this case, `on-sale`
  // will triumph and be the variant used.
  // prettier-ignore
  const variant = typeof salePrice === 'number'
    ? 'on-sale'
    : isNewShoe(releaseDate)
      ? 'new-release'
      : 'default'

    let display = 'none';
    let textDecoration = 'none';
    let color = 'inherit';
    let stickerColor = 'none';
    let stickerVisibility = 'hidden';
    let variantText = '';

    if (variant === 'on-sale') {
        variantText = 'Sale';
        display = 'block';
        textDecoration = 'line-through';
        color = COLORS.gray[700];

        stickerVisibility = 'visible';
        stickerColor = COLORS.primary;
    } else if (variant === 'new-release') {
        variantText = 'Just Released!';
        stickerVisibility = 'visible';
        stickerColor = COLORS.secondary;
    }


  return (
    <Link href={`/shoe/${slug}`}>
      <Wrapper>
        <Sticker style={{ '--color': stickerColor, '--visibility': stickerVisibility }}>{variantText}</Sticker>
        <ImageWrapper>
          <Image alt="" src={imageSrc} />
        </ImageWrapper>
        <Spacer size={12} />
        <Row>
          <Name>{name}</Name>
          <Price display='block' color={color} textDecoration={textDecoration}>{formatPrice(price)}</Price>
        </Row>
        <Row>
          <ColorInfo>{pluralize('Color', numOfColors)}</ColorInfo>
          <Price textDecoration='none' display={display} color={COLORS.primary}>{formatPrice(salePrice)}</Price>
        </Row>
      </Wrapper>
    </Link>
  );
};

const Sticker = styled.div`
    visibility: var(--visibility);
    position: absolute;
    color: ${COLORS.white};
    font-weight: 700;
    font-size: ${14 / 16}rem;
    top: 12px;
    right: -4px;
    z-index: 5;
    background-color: var(--color);
    border-radius: 2px;
    padding: 7px 9px 9px 11px;
    text-align: center;
    padding: 10px 7px 9px 9px;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Wrapper = styled.article`
    flex: 1;
    max-width: 344px;
    position: relative;
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const Image = styled.img`
    width: 100%;
    border-radius: 16px 16px 4px 4px;
`;

const Row = styled.div`
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
`;

const Name = styled.h3`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.gray[900]};
`;

const Price = styled.span`
    display: ${p => p.display};
    text-decoration: ${p => p.textDecoration};
    color: ${p => p.color};
`;

const ColorInfo = styled.p`
  color: ${COLORS.gray[700]};
`;

const SalePrice = styled.span`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.primary};
`;

export default ShoeCard;
