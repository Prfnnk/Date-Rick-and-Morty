import styled, { css } from 'styled-components';
import heartInitial from '../images/heart-initial.svg';
import skip from '../images/skip-initial.svg';
import heartOnTap from '../images/heart-on-tap.svg';
import skipOnTap from '../images/skip-on-tap.svg';

type CardsType = {
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

export const Card = styled.div<CardsType>`
  position: absolute;
  top: 0;
  left: 0;
  width: 400px;
  height: 400px;
  background-color: white;
  /* box-shadow: ${(props) =>
    props.active ? '0px 1.31738px 12.32px rgba(89, 98, 120, 0.3677)' : '0px 1.31738px 12.32px rgba(89, 98, 120, 0)'}; */
  border-radius: 10px;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
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
export const Name = styled.div`
  display: flex;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 500;
  margin: 10px 0;
  width: 300px;
`;
export const NameSpan = styled.div`
  margin-left: 5px;
  font-weight: 400;
`;
export const Location = styled.div`
  width: 300px;
  text-align: left;
`;
export const Picture = styled.div`
  width: 300px;
`;
