import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { CHARACTERS } from '../gql/queries/Character.query';
import { Characters } from '../gql/queries/types/Characters';
import { useSpring } from 'react-spring';
import { Card, ButtonsBlock, LikeBtn, SkipBtn, Wrapper, CardsBlock, Inner } from './styles/style';

const Cards = () => {
  const { loading, error, data } = useQuery<Characters>(CHARACTERS);
  const results = data?.characters?.results;
  const [toggle, setToggle] = useState(false);
  const [id, setId] = useState(null);
  const props = useSpring({ opacity: toggle ? 0 : 1 });
  const [cards, setCards] = useState([]);
  const [ok, setOk] = useState(false);

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
        setId(cards[0].id);
      }
    }
  }, [cards, results, ok]);

  const removeCard = () => {
    const filtered = cards.filter((item) => item.id !== id);
    setCards(filtered);
  };

  console.log(cards, 'cards', results, 'res', data, 'data');

  if (loading && !ok) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Wrapper>
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
                    <Card key={item.id} active={item.id === id}>
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
          <SkipBtn onClick={() => removeCard()}></SkipBtn>
          <LikeBtn onClick={() => setToggle(true)}></LikeBtn>
        </ButtonsBlock>
      </Inner>
    </Wrapper>
  );
};
export default Cards;
