import styled, { css } from 'styled-components';
import { animated as a } from 'react-spring';
import heartInitial from '../images/heart-initial.svg';
import skip from '../images/skip-initial.svg';
import heartOnTap from '../images/heart-on-tap.svg';
import skipOnTap from '../images/skip-on-tap.svg';

type CardProps = {
  active: boolean;
};

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardsBlock = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Card = styled.div<CardProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 400px;
  height: 400px;
  background-color: gray;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Btn = css`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;

  &:active {
    transform: scale(1.1);
  }
`;

export const ButtonsBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 150px;
  margin-top: 20px;
`;
export const SkipBtn = styled.div`
  ${Btn};
  background-image: url('${skip}');
  &:hover {
    background-image: url('${skipOnTap}');
  }
`;

export const LikeBtn = styled.div`
  ${Btn};
  background-image: url('${heartInitial}');
  &:hover {
    background-image: url('${heartOnTap}');
  }
`;
