import { memo } from 'react';
import { styled } from 'styled-components';

import Title from '@common/Title.tsx';

import { CssFontRegularL, CssFontRegularM, mediaQueries } from '@helpers/reusableStyles.ts';

const STitle = styled(Title)`
  max-width: 320px;
  margin: 0 auto;
  text-align: center;

  @media ${mediaQueries.tablet} {
    max-width: 624px;
  }

  @media ${mediaQueries.desktop} {
    max-width: 100%;
  }
`;

const SIntroText = styled.p`
  ${CssFontRegularM}

  max-width: 320px;
  margin: 0 auto;
  text-align: center;
  color: ${({ theme }) => theme.textAndIconsSecondary};

  @media ${mediaQueries.tablet} {
    ${CssFontRegularL}
    max-width: 624px;
  }

  @media ${mediaQueries.laptop} {
    max-width: 820px;
  }

  @media ${mediaQueries.desktop} {
    max-width: 924px;
  }
`;

const Main = () => {
  return (
    <>
      <STitle className='main'>Mint Your Own NFT!l</STitle>
      <SIntroText>
        You&apos;ve completed the challenges, and now you&apos;re ready to mint
        your own customized Polkadot BUIDLER NFT! All you need to do is connect
        your wallet, and add your own custom message to the NFT to make it your own.
      </SIntroText>
    </>
  );
};

export default memo(Main);
