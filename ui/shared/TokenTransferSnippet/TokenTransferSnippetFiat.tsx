import { chakra } from '@chakra-ui/react';
import React from 'react';

import type { TokenInfo } from 'types/api/token';

import getCurrencyValue from 'lib/getCurrencyValue';
import TokenEntity from 'ui/shared/entities/token/TokenEntity';
import BigNumber from 'bignumber.js';

interface Props {
  token: TokenInfo;
  value: string;
  decimals: string | null;
}

interface Entity {
  valueStr: string;
  usd: string | undefined;
  usdBn: BigNumber;
}

const FtTokenTransferSnippet = ({ token, value, decimals }: Props) => {

  let entity: Entity = {
    valueStr: '',
    usd: '',
    usdBn: BigNumber(0),
  };

  if(value.length >= 75){
    const p1 = value.slice(0, 10);
    const p2 = value.slice(-10);
    entity.valueStr = `${p1}...${p2} (Encrypted amount)`;
  } else {
    entity = getCurrencyValue({
      value: value,
      exchangeRate: token.exchange_rate,
      accuracyUsd: 2,
      decimals: decimals,
    });
  }

  return (
    <>
      <chakra.span color="text_secondary">for</chakra.span>
      <span>{ entity.valueStr }</span>
      <TokenEntity
        token={{ ...token, name: token.symbol || token.name }}
        noCopy
        noSymbol
        w="auto"
      />
      { entity.usd && <chakra.span color="text_secondary">(${ entity.usd })</chakra.span> }
    </>
  );
};

export default React.memo(FtTokenTransferSnippet);