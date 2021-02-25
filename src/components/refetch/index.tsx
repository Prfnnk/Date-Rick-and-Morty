import React from 'react';
import sadPic from './image/theEnd.png';
import { BlockWrapper, BtnBlock, LeftBtn, RightBtn, SadPic, SadText } from './styles/style';

const RefetchBlock = ({ fetchMore, setNextPage, setRefetch, setCards, setIsRefetching, nextPage }) => {
  const onClick = () => {
    fetchMore({
      variables: {
        page: nextPage,
      },
    })
      .then((res) => {
        const newPage = res?.data?.characters?.info?.next;
        const newData = res?.data?.characters?.results;
        setNextPage(newPage);
        setRefetch(true);
        setCards(newData);
        setIsRefetching(true);
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
