import React from 'react';
import { BlockWrapper, SadPic } from './styles/style';

const RefetchBlock = ({ fetchMore, setNextPage, setRefetch, setCards, setIsRefetching, nextPage }) => {
  return (
    <BlockWrapper>
      <SadPic></SadPic>
      <div
        onClick={() =>
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
            })
        }
      >
        zagruzka
      </div>
    </BlockWrapper>
  );
};
export default RefetchBlock;
