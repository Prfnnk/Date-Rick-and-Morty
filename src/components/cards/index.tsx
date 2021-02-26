import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import Loading from '../loading';
import RefetchBlock from '../refetch';
import { useQuery } from '@apollo/client';
import { CHARACTERS } from '../../gql/queries/Character.query';
import { Characters } from '../../gql/queries/types/Characters';
import { randomPage } from '../../utils/randomPage';
import {
  Card,
  ButtonsBlock,
  LikeBtn,
  SkipBtn,
  Wrapper,
  CardsBlock,
  Inner,
  Name,
  NameSpan,
  Location,
  Picture,
} from './styles/style';
import _ from 'lodash';

const Cards = () => {
  const [nextPage, setNextPage] = useState(2);
  const { loading, error, data, fetchMore } = useQuery<Characters>(CHARACTERS, {
    variables: {
      page: randomPage,
    },
    notifyOnNetworkStatusChange: true,
  });
  const results = data?.characters?.results;
  const nextRandomPage = data?.characters?.info?.next;
  const [id, setId] = useState(null);
  const [cards, setCards] = useState([]);
  const [ok, setOk] = useState(false);
  const [refetch, setRefetch] = useState(false);
  const [isRefetching, setIsRefetching] = useState(false);
  const cardsRef = useRef([]);

  const isEmpty = cards.length === 0;

  useEffect(() => {
    if (results && nextRandomPage) {
      const shuffled = _.shuffle(results);
      setCards(shuffled);
      setId(shuffled[0].id);
      setOk(true);
      setNextPage(nextRandomPage);
    }
  }, [results, nextRandomPage]);

  useEffect(() => {
    if (cards && results && ok) {
      if (cards.length < results.length) {
        setId(cards[0]?.id ?? '');
      }
    }
  }, [cards, results, ok]);

  useEffect(() => {
    if (cards && cards.length > 0 && refetch) {
      setId(cards[0].id);
      setRefetch(false);
    }
  }, [refetch, cards]);

  const removeCard = () => {
    const filtered = cards.filter((item) => item.id !== id);
    setCards(filtered);
  };

  const cardAnim = (type: 'skip' | 'like'): void => {
    const card = cardsRef.current[id];

    gsap.to(card, 0.4, {
      x: type === 'skip' ? -150 : 150,
      y: 20,
      ease: 'Power3.inOut',
      opacity: 0,
      onComplete: () => {
        removeCard();
      },
    });
  };

  if ((loading && !ok) || isRefetching) return <Loading />;
  if (error) return <p>Error :(</p>;

  return (
    <Wrapper>
      {!isEmpty && ok && (
        <Inner>
          <CardsBlock>
            {cards &&
              cards
                .map((item) => {
                  if (item === null) {
                    return null;
                  }
                  return (
                    <>
                      <Card ref={(el) => (cardsRef.current[item.id] = el)} key={item.id} active={item.id === id}>
                        <Picture>
                          <img src={item.image ?? ''} alt="" />
                        </Picture>
                        <Name>
                          {item.name ?? '-'}, <NameSpan>{item.species ?? ''}</NameSpan>
                        </Name>
                        <Location>{item.location.name ?? ''}</Location>
                      </Card>
                    </>
                  );
                })
                .reverse()}
          </CardsBlock>
          <ButtonsBlock>
            <SkipBtn onClick={() => cardAnim('skip')}></SkipBtn>
            <LikeBtn onClick={() => cardAnim('like')}></LikeBtn>
          </ButtonsBlock>
        </Inner>
      )}
      {isEmpty && ok && (
        <RefetchBlock
          nextPage={nextPage}
          setNextPage={setNextPage}
          setRefetch={setRefetch}
          setCards={setCards}
          setIsRefetching={setIsRefetching}
          fetchMore={fetchMore}
        />
      )}
    </Wrapper>
  );
};
export default Cards;
