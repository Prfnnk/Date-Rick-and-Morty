import React from 'react';
import sadPic from './image/theEnd.png';
import _ from 'lodash';
import { Props } from '../../shared-types/shared-types';
import { randomPage } from '../../utils/randomPage';
import { BlockWrapper, BtnBlock, LeftBtn, RightBtn, SadPic, SadText } from './styles/style';

const RefetchBlock = ({
  newRequest,
  nextPage,
  fetchMore,
  setNextPage,
  setRefetch,
  setCards,
  setIsRefetching,
}: Props): JSX.Element => {
  const onClick = () => {
    setIsRefetching(true);
    fetchMore({
      variables: {
        page: nextPage,
        name: newRequest.name || '',
        gender: newRequest.gender || '',
        species: newRequest.species || '',
      },
    })
      .then((res) => {
        let newPage = res?.data?.characters?.info?.next;
        const newData = res?.data?.characters?.results;
        const shuffledNew = _.shuffle(newData);
        if (newPage === null) {
          newPage = randomPage;
        }
        setNextPage(newPage);
        setCards(shuffledNew);
        setRefetch(true);
      })
      .finally(() => {
        setIsRefetching(false);
      });
  };

  return (
    <BlockWrapper>
      <SadPic>
        <img src={sadPic} alt="" />
      </SadPic>
      <SadText>
        На этом пока все... <br /> Загрузить еще?
      </SadText>
      <BtnBlock>
        <LeftBtn onClick={() => onClick()}>Да, конечно.</LeftBtn>
        <RightBtn onClick={() => onClick()}>Еще бы!</RightBtn>
      </BtnBlock>
    </BlockWrapper>
  );
};
export default RefetchBlock;
