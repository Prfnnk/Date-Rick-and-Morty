import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useQuery } from '@apollo/client';
import { CHARACTERS } from '../gql/queries/Character.query';
import { Characters } from '../gql/queries/types/Characters';
import { Card, ButtonsBlock, LikeBtn, SkipBtn, Wrapper, CardsBlock, Inner } from './styles/style';

const Cards = () => {
  const { loading, error, data } = useQuery<Characters>(CHARACTERS);
  const results = data?.characters?.results;
  const [id, setId] = useState(null);
  const [cards, setCards] = useState([]);
  const [ok, setOk] = useState(false);
  const cardsRef = useRef([]);

  const isEmpty = cards.length === 0;

  useEffect(() => {
    if (results) {
      setCards(results);
      setId(results[0].id);
      setOk(true);
    }
  }, [results]);

  useEffect(() => {
    if (cards && results && ok) {
      if (cards.length < results.length) {
        setId(cards[0]?.id ?? '');
      }
    }
  }, [cards, results, ok]);

  const removeCard = () => {
    const filtered = cards.filter((item) => item.id !== id);
    console.log(filtered);
    setCards(filtered);
  };

  const cardAnim = (type: 'skip' | 'like'): void => {
    const card = cardsRef.current[id];

    gsap.to(card, 0.5, {
      x: type === 'skip' ? -150 : 150,
      opacity: 0,
      onComplete: () => {
        removeCard();
      },
    });
  };

  if (loading && !ok) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Wrapper>
      {!isEmpty ? (
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
                        <div className="pic">
                          <img src={item.image ?? ''} alt="" />
                          <div className="name">{item.name ?? '-'}</div>
                          <div className="species">{item.species ?? ''}</div>
                          <div className="location">{item.location.name ?? ''}</div>
                        </div>
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
      ) : (
        <div>zagruzka</div>
      )}
    </Wrapper>
  );
};
export default Cards;
