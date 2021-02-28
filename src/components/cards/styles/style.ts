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
  box-shadow: 0 0 10px rgb(0 0 0 / 20%);
  border-radius: 10px;
`;

export const Card = styled.div<CardsType>`
  position: absolute;
  top: 0;
  left: 0;
  width: 400px;
  height: 400px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
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
export const NameBlock = styled.div`
  display: flex;

  font-size: 24px;
  font-weight: 500;
  margin-bottom: 5px;
`;
const TextEllipsis = css`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
export const Name = styled.div`
  ${TextEllipsis};
  max-width: 230px;
`;
export const NameSpan = styled.div`
  margin-left: 5px;
  font-weight: 400;
  ${TextEllipsis};
`;
export const Location = styled.div`
  font-size: 20px;
`;
export const Info = styled.div`
  position: absolute;
  font-family: 'Roboto', sans-serif;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background-color: rgba(255, 255, 255, 0.7);
  text-align: left;
  padding: 20px;
`;
export const Picture = styled.div`
  width: 100%;
`;
