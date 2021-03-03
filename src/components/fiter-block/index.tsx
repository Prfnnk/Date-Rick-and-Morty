import React from 'react';
import _ from 'lodash';
import { randomPage } from '../../utils/randomPage';
import {
  FilterItem,
  FilterBody,
  Title,
  ItemTitle,
  Input,
  Checkbox,
  CheckboxItem,
  Label,
  SubmitBtn,
} from './styles/style';

// type Inputs = {
//   name: string;
//   exampleRequired: string;
// };

const FilterBlock = ({
  setRefetch,
  setCards,
  setIsRefetching,
  fetchMore,
  setNextPage,
  setFiltered,
  register,
  handleSubmit,
}) => {
  const onSubmit = (data) => {
    const name = data?.name;
    const gender = data?.gender;
    // const species = data?.species;
    // console.log(species);

    setIsRefetching(true);
    fetchMore({
      variables: {
        page: 1,
        name: name,
        gender: gender,
        // species: species,
      },
    })
      .then((res) => {
        let newPage = res?.data?.characters?.info?.next;
        const newData = res?.data?.characters?.results;
        console.log(newData, 'new res');
        const shuffledNew = _.shuffle(newData);
        if (newPage === null) {
          newPage = randomPage;
        }
        setNextPage(newPage);
        setRefetch(true);
        setCards(shuffledNew);
      })
      .finally(() => {
        setIsRefetching(false);
        setFiltered(true);
      });
  };

  return (
    <FilterBody onSubmit={handleSubmit(onSubmit)}>
      <Title>Выберите фильтры для поиска</Title>
      <FilterItem>
        <ItemTitle>По имени:</ItemTitle>
        <Input ref={register} name="name"></Input>
      </FilterItem>
      <FilterItem>
        <ItemTitle>По виду:</ItemTitle>
        <CheckboxItem>
          <Checkbox name="species" ref={register} type="radio" id="human" value="Human"></Checkbox>
          <Label htmlFor="human">Human</Label>
        </CheckboxItem>
        <CheckboxItem>
          <Checkbox name="species" ref={register} type="radio" id="alien" value="Alien"></Checkbox>
          <Label htmlFor="alien">Alien</Label>
        </CheckboxItem>
        <CheckboxItem>
          <Checkbox name="species" ref={register} type="radio" id="mc" value="Mythological Creature"></Checkbox>
          <Label htmlFor="mc">Mythological Creature</Label>
        </CheckboxItem>
      </FilterItem>
      <FilterItem>
        <ItemTitle>По полу:</ItemTitle>
        <CheckboxItem>
          <Checkbox name="gender" ref={register} type="radio" id="female" value="female"></Checkbox>
          <Label htmlFor="female">Female</Label>
        </CheckboxItem>
        <CheckboxItem>
          <Checkbox name="gender" ref={register} type="radio" id="male" value="male"></Checkbox>
          <Label htmlFor="male">Male</Label>
        </CheckboxItem>
        <CheckboxItem>
          <Checkbox name="gender" ref={register} type="radio" id="genderless" value="genderless"></Checkbox>
          <Label htmlFor="genderless">Genderless</Label>
        </CheckboxItem>
        <CheckboxItem>
          <Checkbox name="gender" ref={register} type="radio" id="unknown" value="unknown"></Checkbox>
          <Label htmlFor="unknown">Unknown</Label>
        </CheckboxItem>
      </FilterItem>
      <SubmitBtn type="submit">Найти!</SubmitBtn>
    </FilterBody>
  );
};
export default FilterBlock;
