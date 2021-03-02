import styled, { css } from 'styled-components';

export const FilterBody = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 300px;
  height: 100vh;
  background-color: white;
  box-shadow: 0 0 10px rgb(0 0 0 / 20%);
  padding: 0 20px;
`;
export const FilterItem = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 22px;
  font-weight: 400;
  text-align: left;
  width: 100%;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
`;
export const ItemTitle = styled.div`
  margin-bottom: 15px;
`;
export const Title = styled(FilterItem)`
  border-bottom: 2px solid grey;
  font-weight: 700;
`;
export const Input = styled.input`
  width: 100%;
  height: 30px;
  font-size: 18px;
  padding: 5px;
`;

export const Label = styled.label`
  padding-left: 25px;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: calc(50% - 8px);
    width: 13px;
    height: 13px;
    border: 1px solid black;
  }
`;

export const Checkbox = styled.input`
  display: none;

  &:checked + ${Label}:before {
    content: '';
    position: absolute;
    left: 0;
    top: calc(50% - 8px);
    width: 15px;
    height: 15px;
    background: red;
  }
`;
export const CheckboxItem = styled.div`
  display: flex;
  font-size: 18px;
  margin-bottom: 10px;
`;
